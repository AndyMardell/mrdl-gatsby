import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Menu from './menu'
import FadeLink from '../transitions/fade'
import Context from '../context'
import { CSSTransition } from 'react-transition-group'

const Header = (props) => {
  const { location } = props
  const specifiedHero = props.hero
  const [context, setContext] = useContext(Context)
  const [inProp, setInProp] = useState(false)

  useEffect(() => {
    setContext({ ...context, location })
    setInProp(true)
  }, [location])

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
    if (e) e.preventDefault()
    setContext({ ...context, showMenu: !context.showMenu })
  }

  return (
    <>
      <header className='header'>
        <div className='header__background'>
          <div className='header__background__left' />
          <div className='header__background__right' />
          <div className='header__background__bottom' />
        </div>
        <div className={`header__container  ${context.showMenu ? 'header__container--fixed' : ''}`}>
          {page === 'home'
            ? <h1 className='header__logo'>
              <FadeLink to='/' className='link--small-underline' onClick={context.showMenu && toggleMenu}>
                {siteTitle}
              </FadeLink>
            </h1>
            : <h2 className='header__logo'>
              <FadeLink to='/' className='link--small-underline' onClick={context.showMenu && toggleMenu}>
                {siteTitle}
              </FadeLink>
            </h2>
          }
          <a className='header__menu  link--small-underline' href='#' onClick={(e) => toggleMenu(e)}>
            {context.showMenu ? 'close' : 'menu'}
          </a>
        </div>
        <div className={`header__hero  header__hero--${page}`}>
          <CSSTransition in={inProp} timeout={200} classNames="my-node">
            {page === 'home'
              ? <h2>I make things<br />for the internet</h2>
              : <h1>{specifiedHero || hero}</h1>
            }
          </CSSTransition>
        </div>
      </header>
      <Menu />
    </>
  )
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
  hero: PropTypes.string
}

export default Header
