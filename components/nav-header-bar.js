import React from 'react'

import PropTypes from 'prop-types'

const NavHeaderBar = (props) => {
  return (
    <>
      <div
        id="nav-header-bar"
        className={`nav-header-bar-nav-header-bar nav-header color-design ${props.rootClassName} `}
      >
        <div className="nav-header-bar-container nav-header-bar">
          <span className="nav-header-bar-text nav-header-text">
            {props.phoneNumber}
          </span>
          <span className="nav-header-bar-text1 nav-header-text">
            {props.email}
          </span>
          <span className="nav-header-bar-text2 nav-header-text">
            {props.adress}
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .nav-header-bar-nav-header-bar {
            justify-content: center;
            background-color: var(--dl-color-milz-button);
          }
          .nav-header-bar-container {
            max-width: 85vw;
          }
          .nav-header-bar-text {
            align-self: left;
            text-align: left;
          }
          .nav-header-bar-text1 {
            color: #ffffff;
            width: 100%;
            margin: 0 auto;
            align-self: center;
            text-align: center;
          }
          .nav-header-bar-text2 {
            color: #ffffff;
            width: 100%;
            align-self: center;
            text-align: right;
          }
          .nav-header-bar-root-class-name {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            height: 4.5vh;
            position: static;
            align-self: center;
          }
          .nav-header-bar-root-class-name1 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            position: static;
            align-self: center;
          }
          .nav-header-bar-root-class-name2 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            height: 7vh;
            position: static;
            align-self: center;
          }
          .nav-header-bar-root-class-name3 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            height: 7vh;
            position: static;
            align-self: center;
          }

          .nav-header-bar-root-class-name5 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            height: 7vh;
            position: static;
            align-self: center;
          }
          @media (max-width: 1200px) {
            .nav-header-bar-container {
              max-width: 95vw;
            }
            .nav-header-bar-text1 {
              font-size: 16px;
            }
            .nav-header-bar-text2 {
              font-size: 16px;
            }
          }
          @media (max-width: 991px) {
            .nav-header-bar-text1 {
              font-size: 14px;
            }
            .nav-header-bar-text2 {
              font-size: 14px;
            }
            .nav-header-bar-root-class-name {
              height: 3.5vh;
            }
          }
          @media (max-width: 767px) {
            .nav-header-bar-text1 {
              font-size: 11px;
            }
            .nav-header-bar-text2 {
              font-size: 11px;
            }
            .nav-header-bar-root-class-name {
              display: none;
            }
            .nav-header-bar-root-class-name2 {
              display: none;
            }
            .nav-header-bar-root-class-name3 {
              display: none;
            }
            .nav-header-bar-root-class-name5 {
              display: none;
            }
          }
        `}
      </style>
    </>
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
