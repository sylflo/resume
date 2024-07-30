from __future__ import annotations

import os
from email.mime.text import MIMEText
from smtplib import SMTP

from fastapi import FastAPI
from pydantic import BaseModel


MAIL_SERVER = os.getenv("MAIL_SERVER")
MAIL_PORT = 465
MAIL_USERNAME = os.getenv("MAIL_USERNAME")
MAIL_PASSWORD = os.getenv("MAIL_PASSWORD")

app = FastAPI()


class Message(BaseModel):
    name: str
    email: str
    message: str


def send_email(name: str, email: str, message: str):
    destination = [MAIL_USERNAME]
    text_subtype = "plain"
    subject = "Resume contact"

    try:
        msg = MIMEText(f"From { name }\n{ message }", text_subtype)
        msg["Subject"] = subject
        msg["From"] = email
        with SMTP(MAIL_SERVER, MAIL_PORT) as conn:
            conn.starttls()  # Start TLS for security
            conn.login(MAIL_USERNAME, MAIL_PASSWORD)
            conn.sendmail(MAIL_USERNAME, destination, msg.as_string())
            return True
    except Exception as e:
        print(f"Error: {e}")
        return False

@app.post("/")
async def root(message: Message):
    if send_email(**message.dict()):
        return {"success": True}
    else:
        return {"success": False}

