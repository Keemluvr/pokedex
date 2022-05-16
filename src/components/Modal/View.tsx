import React from "react"
import { ModalWrapper, ModalContent, ModalCloseButton } from "./Styles"

interface IModal {
  children: React.ReactNode
  open: boolean
  handleModal: () => void
}

const Modal: React.FC<IModal> = ({ children, open, handleModal }) => {
  return (
    <ModalWrapper open={open}>
      <ModalContent>
        <ModalCloseButton
          onClick={handleModal}
          src="/static/assets/images/close.svg"
          alt="close button"
        />
        {children}
      </ModalContent>
    </ModalWrapper>
  )
}

export default Modal
