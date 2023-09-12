import React from 'react'

import { Helmet } from 'react-helmet'

import NavHeaderBar from '../components/nav-header-bar'
import Navigation from '../components/navigation'
import BackgroundDesktop from '../components/background-desktop'
import './notfall.css'

const Notfall = (props) => {
  return (
    <div className="notfall-container">
      <Helmet>
        <title>Notfall - TPMilz</title>
        <meta name="description" content="Webseite für Tierarztpraxis Milz" />
        <meta property="og:title" content="Notfall - TPMilz" />
        <meta
          property="og:description"
          content="Webseite für Tierarztpraxis Milz"
        />
      </Helmet>
      <div className="notfall-page">
        <div className="notfall-header">
          <NavHeaderBar rootClassName="nav-header-bar-root-class-name3"></NavHeaderBar>
          <Navigation rootClassName="navigation-root-class-name3"></Navigation>
        </div>
        <BackgroundDesktop rootClassName="background-desktop-root-class-name2"></BackgroundDesktop>
        <div className="notfall-container1"></div>
      </div>
    </div>
  )
}

export default Notfall
