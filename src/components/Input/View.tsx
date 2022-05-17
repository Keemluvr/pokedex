import React from "react"
import { InputWrapper, InputField, InputIcon } from "./Styles"

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  withIcon?: "search"
}

const Input: React.FC<IInput> = ({ withIcon, ...props }) => {
  return (
    <InputWrapper>
      {withIcon === "search" && (
        <InputIcon src="/static/assets/images/search.svg" alt="loading..." />
      )}
      <InputField {...props} />
    </InputWrapper>
  )
}

export default Input
