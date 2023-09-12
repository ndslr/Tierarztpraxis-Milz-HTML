import React from 'react'

import PropTypes from 'prop-types'

import './main.css'

const Main = (props) => {
  return (
    <div className={`main-main ${props.rootClassName} `}>
      <div className="main-column">
        <h1 className="main-title">{props.Title}</h1>
        <div className="main-div-desktop">
          <div className="main-sprechzeiten">
            <div className="main-title1">
              <h2 className="main-text-h2">{props.Caption}</h2>
            </div>
            <div className="main-times">
              <div className="main-container">
                <div className="main-container01">
                  <span className="main-mo main-text-span">{props.Mo}</span>
                  <span className="main-mo-time main-text-span">
                    {props.MoTime}
                  </span>
                </div>
                <div className="main-container02">
                  <span className="main-mo-time1 main-text-span">
                    {props.MoTime1}
                  </span>
                </div>
                <div className="main-container03">
                  <span className="main-di main-text-span">{props.Di}</span>
                  <span className="main-di-do-time main-text-span">
                    {props.DiTime}
                  </span>
                </div>
                <div className="main-container04">
                  <span className="main-mi main-text-span">{props.Mi}</span>
                  <span className="main-mi-time main-text-span">
                    {props.MiTime}
                  </span>
                </div>
                <div className="main-container05">
                  <span className="main-do main-text-span">{props.Do}</span>
                  <span className="main-do-time main-text-span">
                    {props.DoTime}
                  </span>
                </div>
                <div className="main-container06">
                  <span className="main-fr main-text-span">{props.Fr}</span>
                  <span className="main-fr-time main-text-span">
                    {props.FrTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="main-termin">
            <div className="main-container07">
              <h2 className="main-caption1 main-text-h2">{props.Caption1}</h2>
            </div>
            <div className="main-buttons">
              <div className="main-container08">
                <a
                  href={props.link_button}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="main-link button color-button"
                >
                  <svg viewBox="0 0 1024 1024" className="main-icon">
                    <path
                      d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 960.002c-62.958 0-122.872-13.012-177.23-36.452l233.148-262.29c5.206-5.858 8.082-13.422 8.082-21.26v-96c0-17.674-14.326-32-32-32-112.99 0-232.204-117.462-233.374-118.626-6-6.002-14.14-9.374-22.626-9.374h-128c-17.672 0-32 14.328-32 32v192c0 12.122 6.848 23.202 17.69 28.622l110.31 55.156v187.886c-116.052-80.956-192-215.432-192-367.664 0-68.714 15.49-133.806 43.138-192h116.862c8.488 0 16.626-3.372 22.628-9.372l128-128c6-6.002 9.372-14.14 9.372-22.628v-77.412c40.562-12.074 83.518-18.588 128-18.588 70.406 0 137.004 16.26 196.282 45.2-4.144 3.502-8.176 7.164-12.046 11.036-36.266 36.264-56.236 84.478-56.236 135.764s19.97 99.5 56.236 135.764c36.434 36.432 85.218 56.264 135.634 56.26 3.166 0 6.342-0.080 9.518-0.236 13.814 51.802 38.752 186.656-8.404 372.334-0.444 1.744-0.696 3.488-0.842 5.224-81.324 83.080-194.7 134.656-320.142 134.656z"
                      className=""
                    ></path>
                  </svg>
                  <span className="main-text main-text-span">{props.text}</span>
                </a>
              </div>
              <div className="main-container09">
                <h3 className="main-text01">
                  <span className="">Telefonisch unter </span>
                  <span className=""> </span>
                </h3>
                <a href="tel:+497115283223" className="main-link1">
                  <h3 className="main-phone">{props.Phone}</h3>
                </a>
                <a
                  href="tel:+497115283223"
                  className="main-link2 button color-button"
                >
                  <svg viewBox="0 0 1024 1024" className="main-icon2">
                    <path
                      d="M633.984 255.189c40.235 7.851 74.24 29.141 98.56 58.624 17.92 21.76 30.592 47.957 36.352 76.501 4.651 23.083 27.179 38.016 50.261 33.365s38.016-27.179 33.365-50.261c-8.533-42.325-27.349-81.365-54.144-113.877-36.437-44.203-87.765-76.331-148.053-88.064-23.125-4.523-45.525 10.581-50.048 33.707s10.581 45.525 33.707 50.048zM637.44 85.077c85.333 9.472 159.701 49.579 213.547 108.544 47.701 52.224 79.275 119.211 87.979 192.811 2.773 23.381 23.979 40.149 47.36 37.376s40.149-23.979 37.376-47.36c-10.795-91.605-50.176-175.189-109.696-240.384-67.328-73.728-160.512-123.989-267.136-135.808-23.424-2.603-44.501 14.293-47.104 37.675s14.293 44.501 37.675 47.104zM981.333 721.92c0.683-30.464-10.069-59.904-28.715-82.901-19.627-24.149-48.171-41.259-82.133-46.080-34.133-4.181-72.32-13.397-110.336-27.563-18.475-6.784-38.101-9.301-57.344-7.424-28.288 2.731-55.765 14.891-77.611 36.48l-30.72 30.72c-75.52-47.659-143.36-113.792-195.541-195.797l30.976-30.976c13.739-14.080 24.021-30.976 30.165-49.323 9.045-26.965 9.131-57.003-1.664-85.803-12.331-32.128-22.101-70.144-27.477-110.72-4.437-30.507-19.413-57.472-41.088-77.013-22.997-20.693-53.589-33.195-86.485-32.853h-127.829c-3.755 0-7.765 0.171-11.648 0.512-35.157 3.2-65.792 20.395-86.741 45.483s-32.341 58.325-29.141 93.824c12.8 131.243 58.24 266.368 137.216 388.352 64.085 102.955 155.648 197.248 268.715 269.056 109.568 72.405 242.517 122.112 387.669 137.856 3.925 0.384 8.149 0.555 12.288 0.555 35.328-0.128 67.328-14.635 90.368-37.845s37.248-55.339 37.12-90.496zM896 721.92v128c0.043 11.947-4.651 22.613-12.373 30.379s-18.304 12.587-30.123 12.629l-3.755-0.171c-130.56-14.208-250.581-59.221-348.757-124.117-103.595-65.835-185.984-150.955-243.285-242.944-72.405-111.787-113.28-233.856-124.757-351.488-1.024-11.435 2.731-22.443 9.771-30.891s17.195-14.080 28.928-15.147l131.712-0.171c11.563-0.128 21.632 4.011 29.312 10.923 7.253 6.571 12.288 15.616 13.781 25.941 6.059 45.739 17.408 90.325 32.299 129.067 3.456 9.216 3.413 19.072 0.427 28.075-2.091 6.187-5.589 11.989-10.325 16.853l-53.845 53.803c-13.824 13.824-16.171 34.731-6.912 51.243 67.584 118.827 163.797 211.499 272.256 272.128 16.939 9.472 37.632 6.144 50.987-7.083l54.187-54.187c7.083-6.997 16.085-10.965 25.515-11.904 6.485-0.64 13.227 0.213 19.584 2.56 43.605 16.256 88.32 27.136 129.451 32.171 10.283 1.451 19.712 7.083 26.24 15.147 6.272 7.723 9.856 17.579 9.643 29.099z"
                      className=""
                    ></path>
                  </svg>
                  <span className="main-text04 main-text-span">
                    {props.text1}
                  </span>
                </a>
              </div>
            </div>
            <div className="main-maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.4753839122923!2d9.246321176337688!3d48.81099047132567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799c5eaa8c153a3%3A0xf12b001e3bbf9fdb!2sDr.%20Stephanie%20Milz!5e0!3m2!1sde!2sfr!4v1694526265117!5m2!1sde!2sfr"
                className="main-iframe"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="main-div-tablet">
          <div className="main-column1">
            <h2 className="main-caption2 main-text-h2">{props.Caption12}</h2>
            <div className="main-buttons1">
              <div className="main-container10">
                <a
                  href={props.link_button2}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="main-link3 button color-button"
                >
                  <svg viewBox="0 0 1024 1024" className="main-icon4">
                    <path
                      d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 960.002c-62.958 0-122.872-13.012-177.23-36.452l233.148-262.29c5.206-5.858 8.082-13.422 8.082-21.26v-96c0-17.674-14.326-32-32-32-112.99 0-232.204-117.462-233.374-118.626-6-6.002-14.14-9.374-22.626-9.374h-128c-17.672 0-32 14.328-32 32v192c0 12.122 6.848 23.202 17.69 28.622l110.31 55.156v187.886c-116.052-80.956-192-215.432-192-367.664 0-68.714 15.49-133.806 43.138-192h116.862c8.488 0 16.626-3.372 22.628-9.372l128-128c6-6.002 9.372-14.14 9.372-22.628v-77.412c40.562-12.074 83.518-18.588 128-18.588 70.406 0 137.004 16.26 196.282 45.2-4.144 3.502-8.176 7.164-12.046 11.036-36.266 36.264-56.236 84.478-56.236 135.764s19.97 99.5 56.236 135.764c36.434 36.432 85.218 56.264 135.634 56.26 3.166 0 6.342-0.080 9.518-0.236 13.814 51.802 38.752 186.656-8.404 372.334-0.444 1.744-0.696 3.488-0.842 5.224-81.324 83.080-194.7 134.656-320.142 134.656z"
                      className=""
                    ></path>
                  </svg>
                  <span className="main-text05 main-text-span">
                    {props.text3}
                  </span>
                </a>
              </div>
              <div className="main-container11">
                <h3 className="main-text06">
                  <span className="">Telefonisch unter </span>
                  <span className=""> </span>
                </h3>
                <a href="tel:+497115283223" className="main-link4">
                  <h3 className="main-phone1">{props.Phone2}</h3>
                </a>
                <a
                  href="tel:+497115283223"
                  className="main-link5 button color-button"
                >
                  <svg viewBox="0 0 1024 1024" className="main-icon6">
                    <path
                      d="M633.984 255.189c40.235 7.851 74.24 29.141 98.56 58.624 17.92 21.76 30.592 47.957 36.352 76.501 4.651 23.083 27.179 38.016 50.261 33.365s38.016-27.179 33.365-50.261c-8.533-42.325-27.349-81.365-54.144-113.877-36.437-44.203-87.765-76.331-148.053-88.064-23.125-4.523-45.525 10.581-50.048 33.707s10.581 45.525 33.707 50.048zM637.44 85.077c85.333 9.472 159.701 49.579 213.547 108.544 47.701 52.224 79.275 119.211 87.979 192.811 2.773 23.381 23.979 40.149 47.36 37.376s40.149-23.979 37.376-47.36c-10.795-91.605-50.176-175.189-109.696-240.384-67.328-73.728-160.512-123.989-267.136-135.808-23.424-2.603-44.501 14.293-47.104 37.675s14.293 44.501 37.675 47.104zM981.333 721.92c0.683-30.464-10.069-59.904-28.715-82.901-19.627-24.149-48.171-41.259-82.133-46.080-34.133-4.181-72.32-13.397-110.336-27.563-18.475-6.784-38.101-9.301-57.344-7.424-28.288 2.731-55.765 14.891-77.611 36.48l-30.72 30.72c-75.52-47.659-143.36-113.792-195.541-195.797l30.976-30.976c13.739-14.080 24.021-30.976 30.165-49.323 9.045-26.965 9.131-57.003-1.664-85.803-12.331-32.128-22.101-70.144-27.477-110.72-4.437-30.507-19.413-57.472-41.088-77.013-22.997-20.693-53.589-33.195-86.485-32.853h-127.829c-3.755 0-7.765 0.171-11.648 0.512-35.157 3.2-65.792 20.395-86.741 45.483s-32.341 58.325-29.141 93.824c12.8 131.243 58.24 266.368 137.216 388.352 64.085 102.955 155.648 197.248 268.715 269.056 109.568 72.405 242.517 122.112 387.669 137.856 3.925 0.384 8.149 0.555 12.288 0.555 35.328-0.128 67.328-14.635 90.368-37.845s37.248-55.339 37.12-90.496zM896 721.92v128c0.043 11.947-4.651 22.613-12.373 30.379s-18.304 12.587-30.123 12.629l-3.755-0.171c-130.56-14.208-250.581-59.221-348.757-124.117-103.595-65.835-185.984-150.955-243.285-242.944-72.405-111.787-113.28-233.856-124.757-351.488-1.024-11.435 2.731-22.443 9.771-30.891s17.195-14.080 28.928-15.147l131.712-0.171c11.563-0.128 21.632 4.011 29.312 10.923 7.253 6.571 12.288 15.616 13.781 25.941 6.059 45.739 17.408 90.325 32.299 129.067 3.456 9.216 3.413 19.072 0.427 28.075-2.091 6.187-5.589 11.989-10.325 16.853l-53.845 53.803c-13.824 13.824-16.171 34.731-6.912 51.243 67.584 118.827 163.797 211.499 272.256 272.128 16.939 9.472 37.632 6.144 50.987-7.083l54.187-54.187c7.083-6.997 16.085-10.965 25.515-11.904 6.485-0.64 13.227 0.213 19.584 2.56 43.605 16.256 88.32 27.136 129.451 32.171 10.283 1.451 19.712 7.083 26.24 15.147 6.272 7.723 9.856 17.579 9.643 29.099z"
                      className=""
                    ></path>
                  </svg>
                  <span className="main-text09 main-text-span">
                    {props.text12}
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="main-content">
            <div className="main-container12">
              <h2 className="main-text-h2 main-caption3">{props.Caption3}</h2>
            </div>
            <div className="main-container13">
              <div className="main-container14">
                <div className="main-container15">
                  <span className="main-text-span">Montag</span>
                </div>
                <div className="main-container16">
                  <span className="main-di-do main-text-span">
                    Dienstag &amp; Donnerstag
                  </span>
                </div>
                <div className="main-container17">
                  <span className="main-mi-fr main-text-span">
                    Mittwoch &amp; Freitag
                  </span>
                </div>
              </div>
              <div className="main-container18">
                <div className="main-container19">
                  <span className="main-mo-time2 main-text-span">
                    7 - 11 Uhr sowie 16 - 19 Uhr
                  </span>
                </div>
                <div className="main-container20 main-text-span">
                  <span className="main-di-do-time1">12 - 19 Uhr</span>
                </div>
                <div className="main-container21">
                  <span className="main-mi-fr-time main-text-span">
                    7 - 14 Uhr
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Main.defaultProps = {
  text3: 'Terminland.de',
  link_button: 'https://www.terminland.de/tierarztpraxis-milz/',
  Mi: 'Mittwoch',
  Title: 'Tierarztpraxis Dr. Stephanie Milz',
  DoTime: '14 - 18 Uhr',
  Di: 'Dienstag',
  Do: 'Donnerstag',
  MiTime: '07 - 14 Uhr',
  link_button2: 'https://www.terminland.de/tierarztpraxis-milz/',
  Phone2: '+49 (0) 711 / 528 32 23 ',
  Caption: 'Sprechzeiten',
  Phone: '+49 (0) 711 / 528 32 23 ',
  FrTime: '07 - 14 Uhr',
  Mo: 'Montag',
  DiTime: '12 - 19 Uhr',
  MoTime1: '16 - 19 Uhr',
  Caption3: 'Sprechzeiten',
  text1: ' +49 (0) 711 / 528 32 23',
  rootClassName: '',
  MoTime: '07 - 11 Uhr',
  Fr: 'Freitag',
  text: ' Terminland.de',
  Caption12: 'Terminvereinbarung',
  text12: ' +49 (0) 711 / 528 32 23',
  Caption1: 'Kontakt',
}

Main.propTypes = {
  text3: PropTypes.string,
  link_button: PropTypes.string,
  Mi: PropTypes.string,
  Title: PropTypes.string,
  DoTime: PropTypes.string,
  Di: PropTypes.string,
  Do: PropTypes.string,
  MiTime: PropTypes.string,
  link_button2: PropTypes.string,
  Phone2: PropTypes.string,
  Caption: PropTypes.string,
  Phone: PropTypes.string,
  FrTime: PropTypes.string,
  Mo: PropTypes.string,
  DiTime: PropTypes.string,
  MoTime1: PropTypes.string,
  Caption3: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  MoTime: PropTypes.string,
  Fr: PropTypes.string,
  text: PropTypes.string,
  Caption12: PropTypes.string,
  text12: PropTypes.string,
  Caption1: PropTypes.string,
}

export default Main
