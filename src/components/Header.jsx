function Header() {
  return (
    <header className="header">
      <div className="brand-row">
        <a href="#top" aria-label="Netflix homepage">
          <img className="logo" src="netflix-img/netflix-logo.png" alt="Netflix" />
        </a>
        <span className="header-line" aria-hidden="true"></span>
        <p className="date">Friday July 8th</p>
      </div>
      <div className="header-actions">
        <form className="search-form" action="https://www.google.com/search" target="_blank">
          <label className="visually-hidden" htmlFor="movie-search">Search</label>
          <input id="movie-search" name="q" type="search" defaultValue="netflix stranger things" />
          <button className="search-button" type="submit" aria-label="Search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <img className="avatar" src="netflix-img/avatar.png" alt="User avatar" />
      </div>
    </header>
  )
}

export default Header