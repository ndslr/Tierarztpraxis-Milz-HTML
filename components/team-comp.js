import React from 'react'

import PropTypes from 'prop-types'

const TeamComp = (props) => {
  return (
    <>
      <div className={`team-comp-main ${props.rootClassName} `}>
        <div className="team-comp-column">
          <h2 className="header-h2-title">{props.Title}</h2>
          <div className="team-comp-row">
            <div className="team-comp-container">
              <img
                alt={props.image_alt2}
                src={props.image_src2}
                className="team-comp-image"
              />
            </div>
            <div className="team-comp-container1 team-container">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="team-img"
              />
              <span className="team-comp-text team-text-span">
                {props.text32}
              </span>
              <span className="team-comp-text1 team-text-subspan">
                {props.text312}
              </span>
              <span className="team-comp-text2 team-text-subspan">
                {props.text3112}
              </span>
              <span className="team-comp-text3 team-text-subspan">
                {props.text31111}
              </span>
              <span className="team-comp-text4 team-text-subspan">
                {props.text311111}
              </span>
            </div>
            <div className="team-container">
              <img
                alt={props.image_alt1}
                src={props.image_src1}
                loading="lazy"
                className="team-comp-image2 team-img"
              />
              <div className="team-comp-container3">
                <div className="team-comp-container4"></div>
                <span className="team-comp-text5 team-text-span">
                  {props.text3}
                </span>
                <span className="team-comp-text6 team-text-subspan">
                  {props.text31}
                </span>
                <span className="team-comp-text7 team-text-subspan">
                  {props.text311}
                </span>
                <span className="team-comp-text8 team-text-subspan">
                  {props.text3111}
                </span>
              </div>
            </div>
            <div className="team-comp-container5">
              <img
                alt={props.image_alt3}
                src={props.image_src3}
                className="team-comp-image3"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .team-comp-main {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 999;
            position: relative;
            max-width: 75vw;
            max-height: auto;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .team-comp-column {
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: auto;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: stretch;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .team-comp-row {
            flex: 0 0 auto;
            width: 100%;
            height: 90%;
            display: flex;
            position: relative;
            align-self: center;
            align-items: flex-start;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .team-comp-container {
            flex: 0 0 auto;
            height: 100%;
            display: flex;
            position: relative;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .team-comp-image {
            top: -5vh;
            left: 0px;
            width: 2em;
            position: absolute;
            object-fit: cover;
          }
          .team-comp-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .team-comp-text {
            align-self: stretch;
            text-align: center;
          }
          .team-comp-text1 {
            align-self: stretch;
          }
          .team-comp-text2 {
            align-self: stretch;
            text-align: center;
          }
          .team-comp-text3 {
            align-self: stretch;
            text-align: center;
          }
          .team-comp-text4 {
            align-self: stretch;
            text-align: center;
          }
          .team-comp-image2 {
            border-radius: var(--dl-radius-radius-radius8);
          }
          .team-comp-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 7.5em;
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
          }
          .team-comp-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: 7.5em;
            display: flex;
            opacity: 0.7;
            z-index: 100;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            background-color: #e8e8e8;
          }
          .team-comp-text5 {
            z-index: 999;
            align-self: stretch;
            text-align: center;
          }
          .team-comp-text6 {
            z-index: 999;
            align-self: stretch;
          }
          .team-comp-text7 {
            z-index: 999;
            align-self: stretch;
            text-align: center;
          }
          .team-comp-text8 {
            z-index: 999;
            align-self: stretch;
            text-align: center;
          }
          .team-comp-container5 {
            flex: 0 0 auto;
            width: auto;
            height: 100%;
            display: flex;
            position: relative;
            align-self: center;
            align-items: space-between;
            flex-direction: column;
          }
          .team-comp-image3 {
            top: -5vh;
            left: 0px;
            right: 0px;
            width: 2em;
            position: absolute;
            object-fit: cover;
          }

          @media (max-width: 1200px) {
            .team-comp-main {
              position: static;
              align-items: center;
              justify-content: center;
            }
            .team-comp-column {
              width: auto;
            }
            .team-comp-row {
              width: auto;
              align-self: center;
            }
          }
          @media (max-width: 991px) {
            .team-comp-main {
              max-width: 80%;
              flex-direction: column;
            }
            .team-comp-column {
              left: 0px;
              right: 0px;
              position: static;
              align-items: center;
              justify-content: center;
            }
            .team-comp-row {
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

TeamComp.defaultProps = {
  image_alt3: 'image',
  image_src3: '/arrow-right.svg',
  image_src: '/andreas-seiler.1024x1024-1500w.jpg',
  image_alt1: 'image',
  text311111: 'Tier-Verhaltenstherapeutin',
  text3: 'Saskia Schwarz',
  text31111: 'Tier-Physiotherapeutin',
  text3112: 'Veterinär Chiropraktikerin',
  text31: 'Tiermedizinische Fachangestellte',
  text32: 'Dr. Stephanie Milz',
  text311: 'Tier-Physiotherapeutin',
  image_src1: '/andreas-seiler.1024x1024-1500w.jpg',
  image_alt2: 'image',
  image_src2: '/arrow-left.svg',
  text312: 'Tierärztin für Kleintiere',
  text3111: 'Praxismanagement',
  rootClassName: '',
  image_alt: 'image',
  Title: 'Unser Team',
  text33: 'Saskia Schwarz',
  text313: 'Tiermedizinische Fachangestellte',
  text3113: 'Tier-Physiotherapeutin',
  text31112: 'Praxismanagement',
}

TeamComp.propTypes = {
  image_alt3: PropTypes.string,
  image_src3: PropTypes.string,
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
  text311111: PropTypes.string,
  text3: PropTypes.string,
  text31111: PropTypes.string,
  text3112: PropTypes.string,
  text31: PropTypes.string,
  text32: PropTypes.string,
  text311: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src2: PropTypes.string,
  text312: PropTypes.string,
  text3111: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  Title: PropTypes.string,
  text33: PropTypes.string,
  text313: PropTypes.string,
  text3113: PropTypes.string,
  text31112: PropTypes.string,
}

export default TeamComp
