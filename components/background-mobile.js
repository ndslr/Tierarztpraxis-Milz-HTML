import React from 'react'

import PropTypes from 'prop-types'

const BackgroundMobile = (props) => {
  return (
    <>
      <div className={`background-mobile-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          loading="eager"
          className="background-mobile-image"
        />
      </div>
      <style jsx>
        {`
          .background-mobile-container {
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 100;
            position: relative;
          }
          .background-mobile-image {
            flex: 1;
            width: 100%;
            height: 100%;
            opacity: 0.6;
            z-index: 100;
            position: relative;
            object-fit: cover;
          }
          .background-mobile-root-class-name {
            display: none;
          }
          .background-mobile-root-class-name1 {
            display: none;
          }
          .background-mobile-root-class-name2 {
            display: none;
          }
          .background-mobile-root-class-name3 {
            display: none;
          }
          @media (max-width: 767px) {
            .background-mobile-root-class-name {
              top: 2vh;
              left: 0px;
              bottom: 0px;
              display: flex;
              position: absolute;
            }
            .background-mobile-root-class-name1 {
              top: 2vh;
              left: 0px;
              bottom: 0px;
              display: flex;
              position: absolute;
            }
            .background-mobile-root-class-name2 {
              top: 2vh;
              left: 0px;
              display: flex;
              position: absolute;
            }
            .background-mobile-root-class-name3 {
              top: 2vh;
              left: 0px;
              bottom: 0px;
              display: flex;
              position: absolute;
            }
          }
        `}
      </style>
    </>
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
