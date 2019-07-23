import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import Context from '../context'
import FadeLink from '../transitions/fade'

const Menu = () => {
  const [context, setContext] = useContext(Context)
  const showClass = context.showMenu ? 'menu--show' : ''
  const hideMenu = () => setContext({ ...context, showMenu: false })

  return (
    <div className={`menu  menu--main  ${showClass}`} style={{ display: context.showMenu && 'flex' }}>
      <nav className='menu__pages'>
        <ul>
          <li><FadeLink to='/' onClick={hideMenu}>Blog</FadeLink></li>
          <li><FadeLink to='/page-2' onClick={hideMenu}>Page 2</FadeLink></li>
        </ul>
      </nav>
    </div>
  )
}

Menu.propTypes = {
  show: PropTypes.bool
}

export default Menu
