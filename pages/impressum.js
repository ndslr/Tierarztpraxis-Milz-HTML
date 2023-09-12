import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import BackgroundMobile from '../components/background-mobile'
import BackgroundDesktop from '../components/background-desktop'

const Impressum = (props) => {
  return (
    <>
      <div className="impressum-container">
        <Head>
          <title>Impressum - Tierarztpraxis Dr. Stephanie Milz</title>
          <meta name="description" content="Webseite für Tierarztpraxis Milz" />
          <meta
            property="og:title"
            content="Impressum - Tierarztpraxis Dr. Stephanie Milz"
          />
          <meta
            property="og:description"
            content="Webseite für Tierarztpraxis Milz"
          />
        </Head>
        <div className="impressum-page">
          <Header rootClassName="header-root-class-name3"></Header>
          <BackgroundMobile rootClassName="background-mobile-root-class-name3"></BackgroundMobile>
          <BackgroundDesktop rootClassName="background-desktop-root-class-name4"></BackgroundDesktop>
        </div>
      </div>
      <style jsx>
        {`
          .impressum-container {
            width: 100%;
            height: 100vh;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .impressum-page {
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

export default Impressum
