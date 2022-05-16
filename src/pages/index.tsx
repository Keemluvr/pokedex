import { NextPage } from "next/types"
import { ListPokemons } from "@/sections"
import { Layout } from "@/layout"

const Home: NextPage = () => {
  return (
    <Layout>
      <ListPokemons />
    </Layout>
  )
}

export default Home
