import React from 'react'

import PropTypes from 'prop-types'

import './background-desktop.css'

const BackgroundDesktop = (props) => {
  return (
    <div className={`background-desktop-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        loading="eager"
        className="background-desktop-image"
      />
    </div>
  )
}

BackgroundDesktop.defaultProps = {
  image_src: '/20230905-img_3464-1500h.jpg',
  rootClassName: '',
  image_alt: 'image',
}

BackgroundDesktop.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
}

export default BackgroundDesktop
