import React from 'react'

import PropTypes from 'prop-types'

import './nav-header-bar.css'

const NavHeaderBar = (props) => {
  return (
    <div
      id="nav-header-bar"
      className={`nav-header-bar-nav-header-bar nav-header color-design ${props.rootClassName} `}
    >
      <div className="nav-header-bar-container nav-header-bar">
        <span className="nav-header-bar-text">{props.phoneNumber}</span>
        <span className="nav-header-bar-text1">{props.email}</span>
        <span className="nav-header-bar-text2">{props.adress}</span>
      </div>
    </div>
  )
}

NavHeaderBar.defaultProps = {
  email: 'info@tierarztpraxis-milz.de',
  phoneNumber: '+49 (0) 711 / 528 32 23',
  adress: 'Masurenstraße 12, 70374 Stuttgart',
  rootClassName: '',
}

NavHeaderBar.propTypes = {
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  adress: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavHeaderBar
