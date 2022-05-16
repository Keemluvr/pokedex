import { NamedAPIResource, NamedAPIResourceList } from "../Common"
import { ThemeCardBackground } from "../theme"

export interface Pokemon {
  id: number
  name: string
  height: number
  weight: number
  sprites: PokemonSprites
  types: PokemonType[]
  color: ThemeCardBackground
}

export interface PokemonList extends Omit<NamedAPIResourceList, "results"> {
  results: Pokemon[]
}

export interface PokemonType {
  slot: number
  type: NamedAPIResource
}

export interface PokemonSprites {
  other: OtherPokemonSprites
}

export interface OtherPokemonSprites {
  home: Home
}

export interface Home {
  front_default: string | null
}

export interface Name {
  name: string
  language: NamedAPIResource
}

export interface PokemonColor {
  id: number
  name:
    | "black"
    | "blue"
    | "brown"
    | "gray"
    | "green"
    | "pink"
    | "purple"
    | "red"
    | "white"
    | "yellow"
  names: Name[]
  pokemon_species: NamedAPIResource[]
  species: NamedAPIResource[]
}

export interface PokemonColorList
  extends Omit<NamedAPIResourceList, "results"> {
  results: PokemonColor[]
}
