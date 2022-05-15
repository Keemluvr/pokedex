import { Layout } from "@/layout"
import { ListPokemons } from "@/sections"
import { NextPage } from "next/types"

const Home: NextPage = () => {
  return (
    <Layout>
      <ListPokemons />
    </Layout>
  )
}

export default Home
