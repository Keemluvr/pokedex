import { NextPage } from "next/types"
import { ListPokemons } from "@/sections"
import { Layout } from "@/layout"
import { useRouter } from "next/router"

const Pokemon: NextPage = () => {
  const router = useRouter()
  const { pokemonId } = router.query

  return (
    <Layout>
      <ListPokemons currentPokemon={pokemonId as unknown as number} />
    </Layout>
  )
}

export default Pokemon
