import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Menu from './menu'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Header = ({ siteTitle, location, hero }) => {
  const { pathname } = location
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  siteTitle = siteTitle || site.siteMetadata.title

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
    <>
      <header className='header'>
        <div className='header__background'>
          <div className='header__background__left' />
          <div className='header__background__right' />
          <div className='header__background__bottom' />
        </div>
        <div className='header__container'>
          {page === 'home'
            ? <h1 className='header__logo'><AniLink fade to='/' className='link--plain'>{siteTitle}</AniLink></h1>
            : <h2 className='header__logo'><AniLink fade to='/' className='link--plain'>{siteTitle}</AniLink></h2>
          }
          <a className='header__menu  link--plain' href='#'>menu</a>
        </div>
        <div className={`header__hero  header__hero--${page}`}>
          {(page === 'home' || !hero)
            ? <h2>I make things<br />for the internet</h2>
            : <h1>{hero}</h1>
          }
        </div>
      </header>
      <Menu show={false} />
    </>
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
