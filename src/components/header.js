import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Menu from './menu'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Context from '../context'
import { CSSTransition } from 'react-transition-group'

const Header = ({ location }) => {
  const [context, setContext] = useContext(Context)
  const [inProp, setInProp] = useState(false)

  useEffect(() => {
    setContext({ ...context, location })
    setInProp(true)
  }, [])

  const { siteTitle, hero } = context
  const page = ((pathname) => {
    switch (true) {
      case pathname === '/':
        return 'home'
      case pathname.startsWith('/posts/'):
        return 'post'
      default:
        return 'other'
    }
  })(location.pathname)

  const toggleMenu = (e) => {
    e.preventDefault()
    setContext({ ...context, showMenu: true })
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
          <a className='header__menu  link--plain' href='#' onClick={(e) => toggleMenu(e)}>menu</a>
        </div>
        <div className={`header__hero  header__hero--${page}`}>
          <CSSTransition in={inProp} timeout={200} classNames="my-node">
            {page === 'home'
              ? <h2>I make things<br />for the internet</h2>
              : <h1>{hero}</h1>
            }
          </CSSTransition>
        </div>
      </header>
      <Menu />
    </>
  )
}

Header.propTypes = {
  location: PropTypes.object.isRequired
}

export default Header
