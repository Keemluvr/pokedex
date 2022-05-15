import React from "react"
import { LayoutContainer } from "./Styles"

interface ILayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => (
  <LayoutContainer>{children}</LayoutContainer>
)

export default Layout
