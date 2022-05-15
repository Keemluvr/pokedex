import styled from "styled-components"

export const LayoutContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  max-width: 1275px;

  @media only screen and (min-width: 1440px) {
    max-width: 1275px;
  }

  @media only screen and (max-width: 1440px) {
    max-width: 80%;
  }
`
