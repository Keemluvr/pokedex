import React, { useEffect, useState } from "react"
import { listPokemons } from "@/services/pokemons"
import { Layout } from "@/layout"
import { Card } from "@/components"
import { PokemonList } from "@/types"
import { ListPokemonsCardWrapper } from "./Styles"
const ListPokemons: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonList>()

  useEffect(() => {
    getPokemons()
  }, [])

  const getPokemons = async () => {
    const pokemons = await listPokemons()

    setPokemons(pokemons)
  }

  return (
    <Layout>
      <ListPokemonsCardWrapper>
        {pokemons?.results?.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </ListPokemonsCardWrapper>
    </Layout>
  )
}

export default ListPokemons
