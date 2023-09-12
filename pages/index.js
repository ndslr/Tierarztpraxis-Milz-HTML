import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import BackgroundMobile from '../components/background-mobile'
import BackgroundDesktop from '../components/background-desktop'
import Main from '../components/main'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Tierarztpraxis Dr. Stephanie Milz</title>
          <meta name="description" content="Webseite für Tierarztpraxis Milz" />
          <meta
            property="og:title"
            content="Tierarztpraxis Dr. Stephanie Milz"
          />
          <meta
            property="og:description"
            content="Webseite für Tierarztpraxis Milz"
          />
        </Head>
        <div className="home-page">
          <Header rootClassName="header-root-class-name"></Header>
          <BackgroundMobile rootClassName="background-mobile-root-class-name"></BackgroundMobile>
          <BackgroundDesktop rootClassName="background-desktop-root-class-name"></BackgroundDesktop>
          <Main rootClassName="main-root-class-name"></Main>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: 100vh;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-page {
            width: 100%;
            height: 100vh;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Home
