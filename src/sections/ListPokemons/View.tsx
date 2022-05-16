import React, { useEffect, useState } from "react"
import { listPokemons, getPokemonByIdOrName } from "@/services/pokemons"
import { Card, Modal } from "@/components"
import { Pokemon, PokemonList } from "@/types"
import { ListPokemonsCardWrapper, ListPokemonsImg } from "./Styles"
import { ViewPokemon } from "../ViewPokemon"
import { useRouter } from "next/router"

interface IListPokemons {
  currentPokemon?: number
}

const ListPokemons: React.FC<IListPokemons> = ({ currentPokemon }) => {
  const router = useRouter()

  const [pokemons, setPokemons] = useState<PokemonList>()
  const [openModal, setOpenModal] = useState<boolean>(
    currentPokemon ? true : false
  )
  const [pokemonOpened, setPokemonOpened] = useState<Pokemon>()

  useEffect(() => {
    getPokemons()
  }, [])

  useEffect(() => {
    if (currentPokemon) getPokemon(currentPokemon)
  }, [currentPokemon])

  const getPokemons = async () => {
    const pokemons = await listPokemons()
    setPokemons(pokemons)
  }

  const getPokemon = async (pokemonIdOrName: number | string) => {
    const pokemon = await getPokemonByIdOrName(pokemonIdOrName)
    setPokemonOpened(pokemon)
  }

  const handleModal = (pokemonId: number, opened?: boolean) => {
    setOpenModal((oldValue) => (opened ? true : !oldValue))
    router.push(
      {
        pathname: `/${pokemonId}`
      },
      undefined,
      { shallow: true }
    )
  }

  return (
    <ListPokemonsCardWrapper>
      <ListPokemonsImg
        src="/static/assets/images/pokemon-logo.svg"
        alt="pokemon logo"
      />
      {pokemons?.results?.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} handleModal={handleModal} />
      ))}

      {pokemonOpened && (
        <Modal
          open={openModal}
          handleModal={() => setOpenModal((oldValue) => !oldValue)}
        >
          {openModal && (
            <ViewPokemon
              pokemon={pokemonOpened}
              color={pokemonOpened.color}
              handleModal={handleModal}
            />
          )}
        </Modal>
      )}
    </ListPokemonsCardWrapper>
  )
}

export default ListPokemons
