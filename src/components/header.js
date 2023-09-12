import React from 'react'

import PropTypes from 'prop-types'

import NavHeaderBar from './nav-header-bar'
import Navigation from './navigation'
import './header.css'

const Header = (props) => {
  return (
    <div className={`header-header ${props.rootClassName} `}>
      <NavHeaderBar
        rootClassName="nav-header-bar-root-class-name"
        className=""
      ></NavHeaderBar>
      <Navigation
        rootClassName="navigation-root-class-name"
        className=""
      ></Navigation>
    </div>
  )
}

Header.defaultProps = {
  rootClassName: '',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
}

export default Header
