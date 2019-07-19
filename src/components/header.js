import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, location, hero }) => {
  const { pathname } = location
  let page = 'other'

  switch (true) {
    case pathname === '/':
      page = 'home'
      break
    case pathname.startsWith('/posts/'):
      page = 'post'
      break
  }

  return (
    <header className='header'>
      <div className='header__background'>
        <div className='header__background__left' />
        <div className='header__background__right' />
        <div className='header__background__bottom' />
      </div>
      <div className='header__container'>
        {page === 'home'
          ? <h1 className='header__logo  link--plain'><Link to='/'>{siteTitle}</Link></h1>
          : <h2 className='header__logo  link--plain'><Link to='/'>{siteTitle}</Link></h2>
        }
        <a className='header__menu  link--plain' href='#'>menu</a>
      </div>
      <div className='header__hero'>
        {(page === 'home' || !hero)
          ? <h2>I make things<br />for the internet</h2>
          : <h1>{hero}</h1>
        }
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  location: PropTypes.object.isRequired,
  hero: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
