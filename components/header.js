import React from 'react'

import PropTypes from 'prop-types'

import NavHeaderBar from './nav-header-bar'
import Navigation from './navigation'

const Header = (props) => {
  return (
    <>
      <div className={`header-header ${props.rootClassName} `}>
        <NavHeaderBar rootClassName="nav-header-bar-root-class-name"></NavHeaderBar>
        <Navigation rootClassName="navigation-root-class-name"></Navigation>
      </div>
      <style jsx>
        {`
          .header-header {
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 9999;
            position: relative;
            max-width: 100%;
            align-self: stretch;
            max-height: 18vh;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }

          @media (max-width: 991px) {
            .header-root-class-name {
              max-height: 13vh;
            }
            .header-root-class-name1 {
              max-height: 13vh;
            }
            .header-root-class-name3 {
              max-height: 13vh;
            }
          }
          @media (max-width: 767px) {
            .header-root-class-name {
              max-height: 13.5vh;
            }
            .header-root-class-name2 {
              max-height: 13.5vh;
            }
            .header-root-class-name3 {
              max-height: 13.5vh;
            }
          }
          @media (max-width: 479px) {
            .header-root-class-name {
              max-height: 13.5vh;
            }
            .header-root-class-name2 {
              max-height: 13.5vh;
            }
            .header-root-class-name3 {
              max-height: 13.5vh;
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  rootClassName: '',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
}

export default Header
