import React from "react"
import {
  PaginationWrapper,
  PaginationCurrentPage,
  PaginationButton
} from "./Styles"

interface IPagination {
  current: number
  previous: string | null
  next: string | null
  onChange: (path?: string, direction?: "previous" | "next") => void
}

const Pagination: React.FC<IPagination> = ({
  current,
  previous,
  next,
  onChange
}) => {
  const onPreviousPagination = () => {
    const nextPath = previous?.replace(process.env.pokedexApi as string, "")
    onChange(nextPath, "previous")
  }

  const onNextPagination = () => {
    const nextPath = next?.replace(process.env.pokedexApi as string, "")
    onChange(nextPath, "next")
  }

  return (
    <PaginationWrapper>
      <PaginationButton onClick={onPreviousPagination} disabled={!previous}>
        {current - 1}
      </PaginationButton>
      <PaginationCurrentPage>{current}</PaginationCurrentPage>
      <PaginationButton onClick={onNextPagination} disabled={!next}>
        {current + 1}
      </PaginationButton>
    </PaginationWrapper>
  )
}

export default Pagination
