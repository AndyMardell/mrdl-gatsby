import PropTypes from 'prop-types'
import React from 'react'

const Menu = ({ show }) => (
  <>
    {show &&
      <div className='menu  menu--main'>
        <div className='menu__pages'>
          MENU
        </div>
      </div>
    }
  </>
)

Menu.propTypes = {
  show: PropTypes.bool
}

export default Menu
