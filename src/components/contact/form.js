import React from "react";
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';
import tw from "tailwind.macro";
import styled from '@emotion/styled'

const Field = tw.div`
  flex-grow-0 flex-shrink-0
  pt-6
  w-full
  text-white
`;

const Label = tw.label`
  block text-sm font-bold tracking-wider uppercase
  mb-2`;

const Input = styled.input`
  ${tw `block appearance-none
  h-12 w-full
  px-4 py-1
  border-solid border rounded
  outline-none no-underline
  bg-transparent
  `}
  border: 2px solid hsla(0,0%,100%,.125);

  &:focus {
    border-color: #5b6ba6;
  }
`;

const Textarea = styled.textarea`
  ${tw `block appearance-none
  w-full
  px-4 py-2
  border-solid border rounded
  outline-none no-underline
  bg-transparent
  `}
  border: 2px solid hsla(0,0%,100%,.125);

  &:focus {
    border-color: #5b6ba6;
  }
`;

const Submit = styled.button`
  appearance: none;
    background-color: transparent;
  border-radius: 5px;
  border: 0;
  box-shadow: inset 0 0 0 2px hsla(0,0%,100%,.125);
  color: #fff!important;
  cursor: pointer;
  display: inline-block;
  font-family: Raleway,Helvetica,sans-serif;
  font-size: .8em;
  font-weight: 700;
  height: 3.75em;
  letter-spacing: .1em;
  line-height: 3.75em;
  padding: 0 2.25em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
`;


function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function () {
  const { handleSubmit, register
   } = useForm()
  const onSubmit = data => {
    try {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...data
        }),
      });
      toast.success("Your message has been sent");
    } catch(error) {
      toast.error("An error occured please try again");
    }
  }

  return (
    <form name="contact" onSubmit={handleSubmit(onSubmit)} netlify-honeypot="bot-field" data-netlify="true">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="contact" value="contact" />
      <Field>
        <Label>Name</Label>
        <Input required name="name" ref={register} type="text" />
      </Field>
      <Field>
        <Label>Email</Label>
        <Input required name="email" ref={register} type="email" />
      </Field>
      <Field>
        <Label>Message</Label>
        <Textarea required rows="6" name="message" ref={register} type="text" />
      </Field>
      <Field>
        <Submit>Send message</Submit>
      </Field>
    </form>
  );
}
