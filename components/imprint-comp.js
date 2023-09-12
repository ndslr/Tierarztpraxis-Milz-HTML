import React from 'react'

import PropTypes from 'prop-types'

const ImprintComp = (props) => {
  return (
    <>
      <div className="imprint-comp-main">
        <div className="imprint-comp-container">
          <h1 className="header-h2-title">{props.heading}</h1>
        </div>
        <div className="imprint-comp-container1">
          <span>{props.text}</span>
        </div>
      </div>
      <style jsx>
        {`
          .imprint-comp-main {
            flex: 1;
            width: 100%;
            height: 300px;
            display: flex;
            z-index: 999;
            position: relative;
            max-width: 75vw;
            align-items: flex-start;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .imprint-comp-container {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .imprint-comp-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          @media (max-width: 1200px) {
            .imprint-comp-main {
              position: static;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 991px) {
            .imprint-comp-main {
              max-width: 80%;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

ImprintComp.defaultProps = {
  rootClassName: '',
  heading: 'Impressum',
  text: 'Text',
}

ImprintComp.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default ImprintComp
