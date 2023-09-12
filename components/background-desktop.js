import React from 'react'

import PropTypes from 'prop-types'

const BackgroundDesktop = (props) => {
  return (
    <>
      <div className={`background-desktop-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          loading="eager"
          className="background-desktop-image"
        />
      </div>
      <style jsx>
        {`
          .background-desktop-container {
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 100;
            position: relative;
          }
          .background-desktop-image {
            flex: 1;
            width: 100%;
            height: 100%;
            opacity: 0.6;
            z-index: 100;
            position: relative;
            object-fit: cover;
          }
          .background-desktop-root-class-name {
            top: 15vh;
            left: 0px;
            position: absolute;
          }
          .background-desktop-root-class-name1 {
            top: 15vh;
            left: 0px;
            position: absolute;
          }
          .background-desktop-root-class-name2 {
            top: 15vh;
            left: 0px;
            position: absolute;
          }
          @media (max-width: 991px) {
            .background-desktop-root-class-name {
              top: 10vh;
            }
          }
          @media (max-width: 767px) {
            .background-desktop-root-class-name {
              top: 10vh;
              display: none;
            }
          }
        `}
      </style>
    </>
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
