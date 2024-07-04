import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import tw from "twin.macro"
import styled from "@emotion/styled"

const Field = tw.div`
  flex-grow-0 flex-shrink-0
  pt-6
  w-full
  text-white
`

const Label = tw.label`
  block text-sm font-bold tracking-wider uppercase
  mb-2`

const Input = styled.input`
  ${tw`block appearance-none
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
`

const Textarea = styled.textarea`
  ${tw`block appearance-none
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
`

const Submit = styled.button`
  appearance: none;
  background-color: transparent;
  border-radius: 5px;
  border: 0;
  box-shadow: inset 0 0 0 2px hsla(0, 0%, 100%, 0.125);
  color: #fff !important;
  cursor: pointer;
  display: inline-block;
  font-family: Raleway, Helvetica, sans-serif;
  font-size: 0.8em;
  font-weight: 700;
  height: 3.75em;
  letter-spacing: 0.1em;
  line-height: 3.75em;
  padding: 0 2.25em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
`

const Spinner = styled.div`
  ${tw`border-4 border-gray-200 border-t-blue-500 rounded-full w-6 h-6 animate-spin ml-2 inline-block`}
`;

const Form = () => {
  const { handleSubmit, register } = useForm()
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async(data) => {
    try {
      setIsLoading(true);
      await fetch("/api/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      toast.success("Your message has been sent")
    } catch (error) {
      toast.error("An error occured please try again")
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      name="contact"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Field>
        <Label>Name</Label>
        <Input required {...register("name", { required: true })} type="text" />
      </Field>
      <Field>
        <Label>Email</Label>
        <Input
          required
          {...register("email", { required: true })}
          type="email"
        />
      </Field>
      <Field>
        <Label>Message</Label>
        <Textarea
          required
          rows="6"
          {...register("message", { required: true })}
          type="text"
        />
      </Field>
      <Field>
        <Submit  disabled={isLoading}>
          {isLoading ? (
            <>
              Sending...
              <Spinner />
            </>
          ) : (
            "Send message"
          )}
        </Submit>
        {/* <Submit>Send message</Submit> */}
      </Field>
    </form>
  )
}

export default Form
