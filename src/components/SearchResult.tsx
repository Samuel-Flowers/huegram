

export const SearchResult = ({result}: {result: { color: string }}) => {
  return (
    <div className="result" >{(result as { color: string }).color}</div>
  )
}
