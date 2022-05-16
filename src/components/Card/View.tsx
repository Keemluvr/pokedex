import { Pokemon, ThemeTypeBackground } from "@/types"
import React from "react"
import {
  CardWrapper,
  CardImage,
  CardDescription,
  CardTitle,
  CardDescriptionWrapper,
  CardTypes,
  CardNumber
} from "./Styles"
import { Tag } from "@/components"
import theme from "@/styles/theme"

interface ICard {
  pokemon: Pokemon
  handleModal: (pokemonId: number, opened?: boolean) => void
}

const Card: React.FC<ICard> = ({ pokemon, handleModal }) => {
  return (
    <CardWrapper color={pokemon.color} onClick={() => handleModal(pokemon.id)}>
      <CardImage src={pokemon.sprites.other.home.front_default || undefined} />
      <CardDescription>
        <CardTitle>{pokemon.name}</CardTitle>
        <CardDescriptionWrapper>
          <CardTypes>
            {pokemon.types.map(({ type }) => (
              <Tag
                key={type.name}
                color={
                  theme.preDefined.typeBackground[
                    type.name as ThemeTypeBackground
                  ]
                }
              >
                {type.name}
              </Tag>
            ))}
          </CardTypes>
          <CardNumber>
            #{pokemon.id < 10 ? "00" : pokemon.id < 100 && "0"}
            {pokemon.id}
          </CardNumber>
        </CardDescriptionWrapper>
      </CardDescription>
    </CardWrapper>
  )
}

export default Card
