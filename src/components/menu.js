import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import Context from '../context'

const Menu = () => {
  const [context, setContext] = useContext(Context)
  const toggleMenu = () => setContext({ ...context, showMenu: false })

  if (!context.showMenu) return null

  return (
    <div className='menu  menu--main'>
      <button className='menu__close' onClick={toggleMenu}>X</button>
      <div className='menu__pages'>
        MENU
      </div>
    </div>
  )
}

Menu.propTypes = {
  show: PropTypes.bool
}

export default Menu
