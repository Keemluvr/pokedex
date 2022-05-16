import { ThemeCardBackground } from "@/types"
import styled from "styled-components"

export const ViewPokemon = styled.section``

export const ViewPokemonWrapper = styled.div``

export const ViewPokemonImageWrapper = styled.div<{
  color: ThemeCardBackground
}>`
  background-color: ${({ theme, color }) =>
    theme.preDefined.cardBackground[color]};
  text-transform: capitalize;
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.size.large};
  min-height: 100px;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const ViewPokemonTitle = styled.h2`
  margin-top: 20px;
  text-align: center;
  color: ${({ theme }) => theme.color.text.normal};
`

export const ViewPokemonNumber = styled.div<{ color: ThemeCardBackground }>`
  background-color: ${({ theme, color }) =>
    theme.preDefined.numberBackground[color]};
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: bold;
  color: white;
  padding: 10px 20px;
  width: min-content;
  height: min-content;
  border-radius: 21px;
  margin: 15px auto 0 auto;
`

export const ViewPokemonImage = styled.img`
  max-height: 450px;
  object-fit: contain;
`

export const ViewPokemonTypes = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
`

export const ViewPokemonInfo = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;

  & > div {
    min-width: 250px;
    display: flex;
    gap: 5px;
    justify-content: center;
  }

  img {
    max-height: 20px;
  }
`

export const ViewPokemonInfoTitle = styled.div`
  font-weight: bold;
`

export const ViewPokemonHeight = styled.div``

export const ViewPokemonNav = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ViewPokemonNavButton = styled.div<{ color: ThemeCardBackground }>`
  background-color: ${({ theme, color }) =>
    theme.preDefined.cardBackground[color]};
  width: min-width;
  cursor: pointer;
  padding: 10px;

  :hover > img {
    transition: all 0.3s ease-in-out;
    transform: scale(1.1);
  }
`

export const ViewPokemonNavButtonLeft = styled(ViewPokemonNavButton)<{
  color: ThemeCardBackground
}>`
  border-bottom-left-radius: 16px;
  border-top-right-radius: 16px;
`

export const ViewPokemonNavButtonRight = styled(ViewPokemonNavButton)<{
  color: ThemeCardBackground
}>`
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
`
