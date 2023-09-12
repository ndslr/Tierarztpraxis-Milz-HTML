import React from 'react'

import PropTypes from 'prop-types'

import './background-mobile.css'

const BackgroundMobile = (props) => {
  return (
    <div className={`background-mobile-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        loading="eager"
        className="background-mobile-image"
      />
    </div>
  )
}

BackgroundMobile.defaultProps = {
  image_src: '/img_3430-1500h.jpg',
  rootClassName: '',
  image_alt: 'image',
}

BackgroundMobile.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
}

export default BackgroundMobile
