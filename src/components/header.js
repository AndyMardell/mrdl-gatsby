import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, location }) => (
  <header className='header'>
    {console.log(location)}
    <div className='header__background'>
      <div className='header__background__left' />
      <div className='header__background__right' />
      <div className='header__background__bottom' />
    </div>
    <div className='header__container'>
      <h1 className='header__logo  link--plain'><Link to='/'>{siteTitle}</Link></h1>
      <a className='header__menu  link--plain' href='#'>menu</a>
    </div>
    <div className='header__hero'>
      <h2>I make things<br />for the internet</h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  location: PropTypes.object.isRequired
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
