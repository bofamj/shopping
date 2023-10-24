"use client";



import { ComponentProps } from "react"
import { experimental_useFormState,
  experimental_useFormStatus,} from "react-dom";



type SubmitButtonProbs = {
children : React.ReactNode;
className? : string;

}&ComponentProps<"button">

export default function SubmitButton(
  {children,className}:SubmitButtonProbs
) {
  const { pending} = experimental_useFormStatus();
 
  
  
 
  return (
    <button disabled={pending} type="submit" className={`btn btn-primary ${className}`}>
      {pending && <span className="loading loading-dots loading-md"/>}
      {children}</button>
    
  )
}
