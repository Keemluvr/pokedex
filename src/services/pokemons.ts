import { Dispatch, SetStateAction } from "react"
import http from "@/helpers/http"
import {
  PokemonColor,
  PokemonColorList,
  PokemonList,
  ThemeCardBackground
} from "@/types"
import { Pokemon } from "@/types"

export const listPokemons = async (
  path?: string,
  setLoading?: Dispatch<SetStateAction<boolean>>
): Promise<PokemonList | undefined> => {
  const result = await http<PokemonList>().get(path ? path : "/pokemon")
  const pokemons = result?.data
  const colors = await getColors()

  const results = await Promise.all(
    (pokemons as PokemonList)?.results?.map(async (pokemon) => {
      const info = (await getPokemonByIdOrName(pokemon.name)) as Pokemon
      let color = "black"

      colors?.results?.map((c) => {
        if (!!c.species.find((specie) => specie.name === pokemon.name))
          color = c.name
      })

      return {
        ...pokemon,
        ...info,
        color
      }
    })
  ).then((results) => ({ ...pokemons, results } as PokemonList))

  setLoading?.(false)
  return results
}

export const getPokemonByIdOrName = async (
  name: string | number,
  setLoading?: Dispatch<SetStateAction<boolean>>
): Promise<Pokemon | undefined> => {
  const result = await http<Pokemon>().get(`/pokemon/${name}`)
  const pokemon = result?.data
  const colors = await getColors()
  let color = "black"

  if (pokemon) {
    colors?.results?.map((c) => {
      if (!!c.species.find((specie) => specie.name === pokemon.name))
        color = c.name
    })

    setLoading?.(false)

    if (pokemon)
      return {
        ...pokemon,
        color: color as ThemeCardBackground
      }
  }
}

export const getTypeByName = async (
  name: string,
  setLoading?: Dispatch<SetStateAction<boolean>>
): Promise<Pokemon | undefined> => {
  const result = await http<Pokemon>().get(`/type/${name}`)
  setLoading?.(false)
  return result?.data
}

export const getColorByName = async (
  name: string,
  setLoading?: Dispatch<SetStateAction<boolean>>
): Promise<PokemonColor | undefined> => {
  const result = await http<PokemonColor>().get(`/pokemon-color/${name}`)
  setLoading?.(false)
  return result?.data
}

export const getColors = async (
  setLoading?: Dispatch<SetStateAction<boolean>>
) => {
  const result = await http<PokemonColorList>().get(`/pokemon-color`)
  const colors = result?.data

  const results = await Promise.all(
    (colors as PokemonColorList)?.results?.map(async (color) => {
      const info = (await getColorByName(color.name)) as PokemonColor

      return {
        ...color,
        species: info.pokemon_species
      }
    })
  ).then((results) => ({ ...colors, results } as PokemonColorList))
  setLoading?.(false)
  return results
}
