import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import BackgroundMobile from '../components/background-mobile'
import BackgroundDesktop from '../components/background-desktop'
import Main from '../components/main'
import Main1 from '../components/main1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>TPMilz</title>
        <meta name="description" content="Webseite für Tierarztpraxis Milz" />
        <meta property="og:title" content="TPMilz" />
        <meta
          property="og:description"
          content="Webseite für Tierarztpraxis Milz"
        />
      </Helmet>
      <div className="home-page">
        <Header rootClassName="header-root-class-name"></Header>
        <BackgroundMobile rootClassName="background-mobile-root-class-name"></BackgroundMobile>
        <BackgroundDesktop rootClassName="background-desktop-root-class-name"></BackgroundDesktop>
        <Main rootClassName="main-root-class-name"></Main>
        <Main1 rootClassName="main1-root-class-name"></Main1>
      </div>
    </div>
  )
}

export default Home
