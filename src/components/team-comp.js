import React from 'react'

import PropTypes from 'prop-types'

import './team-comp.css'

const TeamComp = (props) => {
  return (
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
