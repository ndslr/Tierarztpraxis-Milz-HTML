import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import BackgroundMobile from '../components/background-mobile'
import BackgroundDesktop from '../components/background-desktop'
import TeamComp from '../components/team-comp'

const Team = (props) => {
  return (
    <>
      <div className="team-container">
        <Head>
          <title>Team - Tierarztpraxis Dr. Stephanie Milz</title>
          <meta name="description" content="Webseite für Tierarztpraxis Milz" />
          <meta
            property="og:title"
            content="Team - Tierarztpraxis Dr. Stephanie Milz"
          />
          <meta
            property="og:description"
            content="Webseite für Tierarztpraxis Milz"
          />
        </Head>
        <div className="team-page">
          <Header rootClassName="header-root-class-name1"></Header>
          <BackgroundMobile rootClassName="background-mobile-root-class-name2"></BackgroundMobile>
          <BackgroundDesktop rootClassName="background-desktop-root-class-name1"></BackgroundDesktop>
          <TeamComp rootClassName="team-comp-root-class-name"></TeamComp>
        </div>
      </div>
      <style jsx>
        {`
          .team-container {
            width: 100%;
            height: 100vh;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .team-page {
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

export default Team
