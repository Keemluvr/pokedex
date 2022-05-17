import React, { useEffect, useState } from "react"
import { listPokemons, getPokemonByIdOrName } from "@/services/pokemons"
import { Card, Loader, Modal, Pagination } from "@/components"
import { IPagination, Pokemon, PokemonList } from "@/types"
import { ListPokemonsCardWrapper, ListPokemonsImg } from "./Styles"
import { ViewPokemon } from "../ViewPokemon"
import { useRouter } from "next/router"

interface IListPokemons {
  currentPokemon?: number
}

const ListPokemons: React.FC<IListPokemons> = ({ currentPokemon }) => {
  const router = useRouter()

  const [pokemons, setPokemons] = useState<PokemonList>()
  const [loading, setLoading] = useState<boolean>(true)
  const [pagination, setPagination] = useState<IPagination>({
    current: 0,
    total: 0,
    pageSize: 20
  })
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

  const getPokemons = async (
    nextPath?: string,
    direction?: "previous" | "next"
  ) => {
    setLoading(true)
    const pokemons = await listPokemons(nextPath)
    setPokemons(pokemons)
    setPagination({
      ...pagination,
      current:
        direction === "previous"
          ? pagination.current - 1
          : pagination.current + 1,
      total: pokemons?.count as number
    })
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
    setLoading(false)
  }

  const getPokemon = async (pokemonIdOrName: number | string) => {
    setLoading(true)
    const pokemon = await getPokemonByIdOrName(pokemonIdOrName)
    setPokemonOpened(pokemon)
    setLoading(false)
  }

  const handleModal = (pokemonId?: number, opened?: boolean) => {
    setOpenModal((oldValue) => (opened ? true : !oldValue))

    if (pokemonId)
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
      <Loader loading={loading} />

      <ListPokemonsImg
        src="/static/assets/images/pokemon-logo.svg"
        alt="pokemon logo"
      />

      {pokemons?.results?.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} handleModal={handleModal} />
      ))}

      {pokemons?.results && (
        <Pagination
          previous={pokemons.previous}
          current={pagination.current}
          next={pokemons.next}
          onChange={getPokemons}
        />
      )}

      {pokemonOpened && (
        <Modal open={openModal} handleModal={() => handleModal()}>
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
