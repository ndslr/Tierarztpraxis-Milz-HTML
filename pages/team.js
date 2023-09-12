import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
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
          <BackgroundDesktop rootClassName="background-desktop-root-class-name1"></BackgroundDesktop>
          <TeamComp rootClassName="team-comp-root-class-name"></TeamComp>
          <div className="team-container1"></div>
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
          .team-container1 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: none;
            align-items: flex-start;
          }
          @media (max-width: 991px) {
            .team-container1 {
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

export default Team
