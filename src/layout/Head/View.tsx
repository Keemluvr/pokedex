import Head from "next/head"
import React from "react"
import theme from "@/styles/theme"

interface IHeader {
  children?: React.ReactNode
}

const Header: React.FC<IHeader> = ({ children }) => {
  return (
    <Head>
      <title>{process.env.title}</title>
      <meta charSet="utf-8" />
      <meta name="keywords" key="keywords" content={process.env.keywords} />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${process.env.staticFolder}/assets/images/favicon/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${process.env.staticFolder}/assets/images/favicon/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${process.env.staticFolder}/assets/images/favicon/favicon-16x16.png`}
      />
      <link
        rel="manifest"
        href={`${process.env.staticFolder}/assets/images/favicon/site.webmanifest`}
      />
      <link
        rel="mask-icon"
        href={`${process.env.staticFolder}/assets/images/favicon/safari-pinned-tab.svg`}
        color={theme.color.primary}
      />
      <meta name="msapplication-TileColor" content={theme.color.primary} />

      <meta name="theme-color" content="#ffffff" />

      <meta name="theme-color" content={theme.color.primary}></meta>

      <meta
        name="description"
        key="description"
        content={process.env.description}
      />
      <meta property="og:type" key="og:type" content="website" />
      <meta property="og:title" key="og:title" content={process.env.title} />
      <meta
        property="og:site_name"
        key="og:site_name"
        content={process.env.name}
      />
      <meta
        property="og:description"
        key="og:description"
        content={process.env.description}
      />
      <meta
        property="og:image"
        key="og:image"
        content={`${process.env.staticFolder}/assets/images/favicon/favicon.ico`}
      />

      <meta name="twitter:card" key="twitter:card" content="summary" />

      <meta
        property="twitter:creator"
        key="twitter:creator"
        content={process.env.author}
      />

      <meta
        property="twitter:title"
        key="twitter:title"
        content={process.env.title}
      />

      <meta property="twitter:description" content={process.env.description} />

      {children}
    </Head>
  )
}

export default Header
