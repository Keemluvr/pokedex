import React from "react"
import { LoaderWrapper, LoaderImg } from "./Styles"

interface ILoader {
  loading: boolean
}

const Loader: React.FC<ILoader> = ({ loading }) => {
  return loading ? (
    <LoaderWrapper>
      <LoaderImg src="/static/assets/images/pokeball.svg" alt="loading..." />
    </LoaderWrapper>
  ) : null
}

export default Loader
