import { ThemeCardBackground } from "@/types"
import styled from "styled-components"

export const ModalWrapper = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "block" : "none")};
  background-color: ${({ theme }) => theme.color.modalBackground};
  box-shadow: ${({ theme }) => theme.preDefined.modalBoxShadow};
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  outline: none;
  z-index: 1;
`

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  box-shadow: ${({ theme }) => theme.preDefined.modalBoxShadow};
  border-radius: 16px;
  margin: 10vh auto 0 auto;
  width: 800px;
  min-height: 200px;
  position: relative;
  z-index: 2;
`

export const ModalCloseButton = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`
