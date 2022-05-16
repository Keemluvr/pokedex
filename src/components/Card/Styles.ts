import { ThemeCardBackground } from "@/types"
import styled from "styled-components"

export const CardWrapper = styled.div<{ color: ThemeCardBackground }>`
  box-shadow: ${({ theme }) => theme.preDefined.cardBoxShadow};
  width: 400px;
  background-color: ${({ theme, color }) =>
    theme.preDefined.cardBackground[color]};
  position: relative;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: ${({ theme }) => theme.preDefined.cardBoxShadowHover};
    transform: scale(1.02);
  }
`

export const CardImage = styled.img`
  width: 100%;
`

export const CardDescription = styled.div`
  background-color: white;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: 20px 10px;
`

export const CardTitle = styled.p`
  text-transform: capitalize;
  text-align: center;
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.size.tinyLarge};
`

export const CardDescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
`

export const CardTypes = styled.div`
  display: flex;
  gap: 5px;
  margin: 20px 0 10px 0;
`

export const CardNumber = styled.div`
  background-color: ${({ theme }) => theme.color.idBackground};
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: bold;
  color: white;
  padding: 10px 20px;
  margin-top: 5px;
  width: min-content;
  height: min-content;
  border-radius: 21px;
`
