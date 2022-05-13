const dotenv = require("dotenv")
const path = require("path")

dotenv.config({
  path: path.resolve(
    process.cwd(),
    `envs/.env.${process.env.ENVIRONMENT.trim()}`
  )
})

const securityHeaders = [
  {
    key: "X-XSS-Protection",
    value: "1; mode=block"
  }
]

/** @type {import('next').NextConfig} */
module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders
      }
    ]
  },
  reactStrictMode: true,
  pageExtensions: ["tsx"],
  env: {
    pokedexApi: process.env.POKEDEX_API,
    staticFolder: "/static",
    name: "Pokédex",
    author: "Keila Fernandes",
    title: "Pokédex",
    description:
      "The Pokédex is an electronic device created and designed to catalog and provide information regarding the various species of Pokémon featured in the Pokémon video game, anime and manga series.",
    keywords: "pokedex, pokemon"
  },
  generateEtags: false,
  eslint: {
    ignoreDuringBuilds: true
  }
}
