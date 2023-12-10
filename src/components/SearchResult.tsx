import React from 'react'

export const SearchResult = ({result}: {result: { color: string }}) => {
  return (
    <div>{(result as { color: string }).color}</div>
  )
}
