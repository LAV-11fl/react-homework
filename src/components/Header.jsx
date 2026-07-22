import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import avatar from '../assets/netflix/avatar.png'
import netflixLogo from '../assets/netflix/netflix-logo.png'
import Search from './Search'

function Header({ isLoggedIn = false }) {
  return (
    <header className="header">
      <div className="brand-row">
        <Link to="/" aria-label="Netflix homepage">
          <img className="logo" src={netflixLogo} alt="Netflix" />
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/price">Price</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <div className="header-actions">
        {isLoggedIn ? (
          <>
            <Search />
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
  isLoggedIn: PropTypes.bool,
}

export default Header
