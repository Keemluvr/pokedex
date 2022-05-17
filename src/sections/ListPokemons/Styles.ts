import styled from "styled-components"

export const ListPokemons = styled.section``

export const ListPokemonsCardWrapper = styled.div`
  margin: 50px auto;
  display: flex;
  gap: 40px 20px;
  flex-wrap: wrap;
  justify-content: center;
`

export const ListPokemonsImg = styled.img`
  width: 100%;
  padding: 0 50% 60px 50%;
`

export const ListPokemonsSearch = styled.div`
  width: 100%;
  min-width: 100px;
  margin: 0 15%;
`

export const ListPokemonsNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  h1 {
    text-align: center;
    font-weight: bold;
    font-size: ${({ theme }) => theme.font.size.large};
  }
  img {
    max-height: 300px;
  }
`
