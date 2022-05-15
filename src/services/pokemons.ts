import { AxiosResponse } from "axios"
import { Dispatch, SetStateAction } from "react"
import http from "@/helpers/http"
import {
  NamedAPIResourceList,
  PokemonColor,
  PokemonColorList,
  PokemonList
} from "@/types"
import { Pokemon } from "@/types"

export const listPokemons = async (
  offset?: number,
  limit?: number,
  setLoading?: Dispatch<SetStateAction<boolean>>
): Promise<PokemonList | undefined> => {
  const result = await http<PokemonList>().get("/pokemon")
  const pokemons = result?.data
  const colors = await getColors()

  const results = await Promise.all(
    (pokemons as PokemonList)?.results?.map(async (pokemon) => {
      const info = (await getPokemonByName(pokemon.name)) as Pokemon
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

export const getPokemonByName = async (
  name: string,
  setLoading?: Dispatch<SetStateAction<boolean>>
): Promise<Pokemon | undefined> => {
  const result = await http<Pokemon>().get(`/pokemon/${name}`)
  setLoading?.(false)
  return result?.data
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
