import styled from "styled-components"

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: ${({ theme }) => theme.preDefined.cardBoxShadow};
`
export const InputField = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 0 0 18px;
  outline: none;
  border: none;
  background-color: transparent;
`

export const InputIcon = styled.img`
  margin-left: 36px;
`
