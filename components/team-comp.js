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
            <div className="team-comp-container1">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="team-img"
              />
              <span className="team-text-span">{props.text2}</span>
            </div>
            <div className="team-comp-container2">
              <img
                alt={props.image_alt1}
                src={props.image_src1}
                className="team-comp-image2 team-img"
              />
              <span className="team-text-span">{props.text3}</span>
            </div>
            <div className="team-comp-container3">
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
            align-items: center;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .team-comp-container {
            flex: 0 0 auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team-comp-image {
            width: 2em;
            object-fit: cover;
          }
          .team-comp-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .team-comp-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .team-comp-image2 {
            object-fit: cover;
          }
          .team-comp-container3 {
            flex: 0 0 auto;
            width: auto;
            height: 100%;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .team-comp-image3 {
            width: 2em;
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
  text2: 'Person A',
  image_alt3: 'image',
  image_src3: '/arrow-right.svg',
  image_src: '/andreas-seiler.1024x1024-1500w.jpg',
  image_alt1: 'image',
  text3: 'Person B',
  image_src1: '/andreas-seiler.1024x1024-1500w.jpg',
  image_alt2: 'image',
  image_src2: '/arrow-left.svg',
  rootClassName: '',
  image_alt: 'image',
  Title: 'Unser Team',
}

TeamComp.propTypes = {
  text2: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src3: PropTypes.string,
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
  text3: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src2: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  Title: PropTypes.string,
}

export default TeamComp
