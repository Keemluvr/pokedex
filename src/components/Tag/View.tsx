import React from "react"
import { TagWrapper } from "./Styles"

interface ITag {
  children: React.ReactNode
  color: string
}

const Tag: React.FC<ITag> = ({ color, children }) => {
  return <TagWrapper color={color}>{children}</TagWrapper>
}

export default Tag
