import React from "react"
import { AppProps } from "next/dist/shared/lib/router/router"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/global"
import Theme from "@/styles/theme"

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
