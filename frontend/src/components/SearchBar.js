function SearchBar({currentSearchInput, searchInputSetter}) {

  return (

    <input
      className="search-bar"
      name="searchBar"
      aria-label="searchBar"
      type="text"
      placeholder="Keresés..."
      spellCheck="false"
      autoComplete="off"
      value={currentSearchInput}

      onChange={(e) => {

        searchInputSetter(e.target.value)
      }}
    />
  )
}

export default SearchBar