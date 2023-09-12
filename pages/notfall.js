import React from 'react'
import Head from 'next/head'

import NavHeaderBar from '../components/nav-header-bar'
import Navigation from '../components/navigation'
import BackgroundDesktop from '../components/background-desktop'

const Notfall = (props) => {
  return (
    <>
      <div className="notfall-container">
        <Head>
          <title>Notfall - Tierarztpraxis Dr. Stephanie Milz</title>
          <meta name="description" content="Webseite für Tierarztpraxis Milz" />
          <meta
            property="og:title"
            content="Notfall - Tierarztpraxis Dr. Stephanie Milz"
          />
          <meta
            property="og:description"
            content="Webseite für Tierarztpraxis Milz"
          />
        </Head>
        <div className="notfall-page">
          <div className="notfall-header">
            <NavHeaderBar rootClassName="nav-header-bar-root-class-name3"></NavHeaderBar>
            <Navigation rootClassName="navigation-root-class-name3"></Navigation>
          </div>
          <BackgroundDesktop rootClassName="background-desktop-root-class-name2"></BackgroundDesktop>
          <div className="notfall-container1"></div>
        </div>
      </div>
      <style jsx>
        {`
          .notfall-container {
            width: 100%;
            height: 100vh;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .notfall-page {
            width: 100%;
            height: 100vh;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .notfall-header {
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
          .notfall-container1 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: none;
            align-items: flex-start;
          }
          @media (max-width: 991px) {
            .notfall-container1 {
              height: var(--dl-size-size-small);
              display: flex;
              z-index: 100;
              background-color: #3d004c;
            }
          }
        `}
      </style>
    </>
  )
}

export default Notfall
