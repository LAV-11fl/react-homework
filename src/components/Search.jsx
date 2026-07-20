import { useEffect, useState } from 'react'

function Search() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchText, setSearchText] = useState('')

  function toggleSearch() {
    setIsOpen((currentValue) => !currentValue)
  }

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const searchInput = document.getElementById('movie-search')
    searchInput?.focus()

    function closeSearch(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', closeSearch)

    return () => document.removeEventListener('keydown', closeSearch)
  }, [isOpen])

  return (
    <div className={`search-form ${isOpen ? 'is-open' : ''}`}>
      {isOpen && (
        <>
          <label className="visually-hidden" htmlFor="movie-search">Search</label>
          <input
            id="movie-search"
            type="search"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="Search a movie"
          />
        </>
      )}
      <button
        className="search-button"
        type="button"
        aria-label={isOpen ? 'Close search' : 'Open search'}
        aria-expanded={isOpen}
        onClick={toggleSearch}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      {isOpen && searchText.trim().length >= 4 && (
        <p className="search-result">You search: {searchText}</p>
      )}
    </div>
  )
}

export default Search