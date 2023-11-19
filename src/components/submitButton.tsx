'use client'

import { ComponentProps } from 'react'
import { experimental_useFormState } from 'react-dom'

/* experimental_useFormState */

type SubmitButtonProbs = {
  children: React.ReactNode
  className?: string
} & ComponentProps<'button'>

export default function SubmitButton({
  children,
  className,
  ...props
}: SubmitButtonProbs) {
  const { pending } = experimental_useFormState()

  return (
    <button
      {...props}
      disabled={pending}
      type="submit"
      className={`btn btn-primary ${className}`}
    >
      {pending && <span className="loading loading-dots loading-md" />}
      {children}
    </button>
  )
}
