import PropTypes from 'prop-types'
import avatar from '../assets/netflix/avatar.png'
import netflixLogo from '../assets/netflix/netflix-logo.png'

function Header({ date = 'Friday July 8th', isLoggedIn = false }) {
  return (
    <header className="header">
      <div className="brand-row">
        <a href="#top" aria-label="Netflix homepage">
          <img className="logo" src={netflixLogo} alt="Netflix" />
        </a>
        <span className="header-line" aria-hidden="true"></span>
        <p className="date">{date}</p>
      </div>
      <div className="header-actions">
        {isLoggedIn ? (
          <>
            <form className="search-form" action="https://www.google.com/search" target="_blank">
              <label className="visually-hidden" htmlFor="movie-search">Search</label>
              <input id="movie-search" name="q" type="search" defaultValue="netflix stranger things" />
              <button className="search-button" type="submit" aria-label="Search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <img className="avatar" src={avatar} alt="User avatar" />
          </>
        ) : (
          <a className="login-button" href="https://www.netflix.com/login" target="_blank" rel="noopener">
            Login to Netflix
          </a>
        )}
      </div>
    </header>
  )
}

Header.propTypes = {
  date: PropTypes.string,
  isLoggedIn: PropTypes.bool,
}

export default Header
