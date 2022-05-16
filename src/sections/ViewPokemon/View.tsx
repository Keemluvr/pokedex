import React, { useEffect } from "react"
import { Pokemon, ThemeCardBackground, ThemeTypeBackground } from "@/types"
import {
  ViewPokemonWrapper,
  ViewPokemonImageWrapper,
  ViewPokemonTitle,
  ViewPokemonNumber,
  ViewPokemonImage,
  ViewPokemonTypes,
  ViewPokemonInfo,
  ViewPokemonInfoTitle,
  ViewPokemonHeight,
  ViewPokemonNav,
  ViewPokemonNavButtonLeft,
  ViewPokemonNavButtonRight
} from "./Styles"
import { Tag } from "@/components"
import theme from "@/styles/theme"

interface IViewPokemon {
  pokemon: Pokemon
  color: ThemeCardBackground
  handleModal: (pokemonId: number, opened?: boolean) => void
}

const ViewPokemon: React.FC<IViewPokemon> = ({
  pokemon,
  color,
  handleModal
}) => {
  const previousPokemon = () => {
    handleModal(pokemon.id - 1, true)
  }

  const nextPokemon = () => {
    handleModal(pokemon.id + 1, true)
  }

  return (
    <ViewPokemonWrapper>
      <ViewPokemonImageWrapper color={color}>
        <ViewPokemonTitle>{pokemon.name}</ViewPokemonTitle>
        <ViewPokemonNumber color={color}>
          #{pokemon.id < 10 ? "00" : pokemon.id < 100 && "0"}
          {pokemon.id}
        </ViewPokemonNumber>
        <ViewPokemonImage
          src={pokemon.sprites.other.home.front_default || undefined}
          alt={pokemon.name}
        />
        <ViewPokemonTypes>
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
        </ViewPokemonTypes>
      </ViewPokemonImageWrapper>
      <ViewPokemonInfo>
        <Tag color={theme.color.heightBackground}>
          <img src="/static/assets/images/height-icon.svg" alt="height" />
          <ViewPokemonInfoTitle>Altura:</ViewPokemonInfoTitle>
          <ViewPokemonHeight>{pokemon.height} hectogramas</ViewPokemonHeight>
        </Tag>
        <Tag color={theme.color.weightBackground}>
          <img src="/static/assets/images/weight-icon.svg" alt="weight" />
          <ViewPokemonInfoTitle>Peso:</ViewPokemonInfoTitle>
          <ViewPokemonHeight>{pokemon.weight} decimetros</ViewPokemonHeight>
        </Tag>
      </ViewPokemonInfo>
      <ViewPokemonNav>
        <ViewPokemonNavButtonLeft color={color}>
          <img
            src="/static/assets/images/arrow-left.svg"
            onClick={previousPokemon}
          />
        </ViewPokemonNavButtonLeft>
        <ViewPokemonNavButtonRight color={color}>
          <img
            src="/static/assets/images/arrow-right.svg"
            onClick={nextPokemon}
          />
        </ViewPokemonNavButtonRight>
      </ViewPokemonNav>
    </ViewPokemonWrapper>
  )
}

export default ViewPokemon
