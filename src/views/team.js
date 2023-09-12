import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import BackgroundDesktop from '../components/background-desktop'
import TeamComp from '../components/team-comp'
import './team.css'

const Team = (props) => {
  return (
    <div className="team-container">
      <Helmet>
        <title>Team - TPMilz</title>
        <meta name="description" content="Webseite für Tierarztpraxis Milz" />
        <meta property="og:title" content="Team - TPMilz" />
        <meta
          property="og:description"
          content="Webseite für Tierarztpraxis Milz"
        />
      </Helmet>
      <div className="team-page">
        <Header rootClassName="header-root-class-name1"></Header>
        <BackgroundDesktop rootClassName="background-desktop-root-class-name1"></BackgroundDesktop>
        <TeamComp rootClassName="team-comp-root-class-name"></TeamComp>
        <div className="team-container1"></div>
      </div>
    </div>
  )
}

export default Team
