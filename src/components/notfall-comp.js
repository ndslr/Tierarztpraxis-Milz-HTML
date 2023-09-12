import React from 'react'

import PropTypes from 'prop-types'

import './notfall-comp.css'

const NotfallComp = (props) => {
  return <div className="notfall-comp-main"></div>
}

NotfallComp.defaultProps = {
  DiDoTime: '12 - 19 Uhr',
  link_button: 'https://www.terminland.de/tierarztpraxis-milz/',
  Title: 'Tierarztpraxis Dr. Stephanie Milz',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text1: ' +49 (0) 711 / 528 32 23',
  image_alt1: 'image',
  Mo: 'Montag',
  Caption1: 'Terminvereinbarung',
  DiDo: 'Dienstag & Donnerstag',
  rootClassName: '',
  MiFr: 'Mittwoch & Freitag',
  MoTime: '7 - 11 Uhr sowie 16 - 19 Uhr',
  image_alt: 'image',
  Phone: '+49 (0) 711 / 528 32 23 ',
  MiFrTime: '7 - 14 Uhr',
  heading: 'Heading',
  Caption: 'Sprechzeiten',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text: ' Terminland.de',
}

NotfallComp.propTypes = {
  DiDoTime: PropTypes.string,
  link_button: PropTypes.string,
  Title: PropTypes.string,
  image_src1: PropTypes.string,
  text1: PropTypes.string,
  image_alt1: PropTypes.string,
  Mo: PropTypes.string,
  Caption1: PropTypes.string,
  DiDo: PropTypes.string,
  rootClassName: PropTypes.string,
  MiFr: PropTypes.string,
  MoTime: PropTypes.string,
  image_alt: PropTypes.string,
  Phone: PropTypes.string,
  MiFrTime: PropTypes.string,
  heading: PropTypes.string,
  Caption: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
}

export default NotfallComp
