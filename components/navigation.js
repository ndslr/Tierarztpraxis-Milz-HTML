import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Navigation = (props) => {
  return (
    <>
      <div
        id="nav-header-bar"
        className={`navigation-nav-header-bar nav-menu ${props.rootClassName} `}
      >
        <header data-thq="thq-navbar" className="navigation-navbar-interactive">
          <Link href="/">
            <a className="navigation-link">
              <img
                alt="logo"
                src="/logo-new-1500h.png"
                loading="eager"
                className="navigation-image"
              />
            </a>
          </Link>
          <div data-thq="thq-navbar-nav" className="navigation-desktop-menu">
            <nav className="navigation-links">
              <Link href="/">
                <a className="navigation-link1 nav-menu-point">Home</a>
              </Link>
              <Link href="/team">
                <a className="navigation-link2 nav-menu-point">Unser Team</a>
              </Link>
              <span className="navigation-leistungen nav-menu-point">
                Leistungen
              </span>
              <span className="navigation-notfallpraxen nav-menu-point">
                Notfallpraxen
              </span>
              <div
                data-thq="thq-dropdown"
                className="navigation-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="navigation-dropdown-toggle"
                >
                  <span className="navigation-text nav-menu-point">
                    Kontakt
                  </span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="navigation-dropdown-arrow"
                  >
                    <svg viewBox="0 0 1024 1024" className="navigation-icon">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="navigation-dropdown-list"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="navigation-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="navigation-dropdown-toggle1"
                    >
                      <span
                        id="nav-menu-point"
                        className="navigation-text1 nav-menu-point"
                      >
                        Impressum
                      </span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="navigation-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="navigation-dropdown-toggle2"
                    >
                      <span className="navigation-text2 nav-menu-point">
                        Datenschutzerklärung
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <a
                href="https://www.terminland.de/tierarztpraxis-milz/"
                target="_blank"
                rel="noreferrer noopener"
                className="navigation-termin-buchen button color-button"
              >
                Termin buchen
              </a>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="navigation-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navigation-icon02">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navigation-mobile-menu">
            <div className="navigation-nav">
              <div className="navigation-top">
                <img
                  alt="image"
                  src="/logo-new-1500h.png"
                  className="navigation-logo"
                />
                <div
                  data-thq="thq-close-menu"
                  className="navigation-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="navigation-icon04">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navigation-links1">
                <span className="navigation-text3">About</span>
                <span className="navigation-text4">Features</span>
                <span className="navigation-text5">Pricing</span>
                <span className="navigation-text6">Team</span>
                <span className="navigation-text7">Blog</span>
              </nav>
              <div className="navigation-buttons"></div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="navigation-icon06"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="navigation-icon08"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="navigation-icon10"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .navigation-nav-header-bar {
            justify-content: center;
            background-color: #e8e8e8;
          }
          .navigation-navbar-interactive {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 85vw;
            align-self: center;
          }
          .navigation-link {
            display: contents;
          }
          .navigation-image {
            width: auto;
            height: 100%;
            object-fit: contain;
            padding-top: 0.25rem;
            padding-bottom: 0.25rem;
            text-decoration: none;
          }
          .navigation-desktop-menu {
            flex: 1;
            height: 100%;
            display: flex;
            justify-content: space-between;
          }
          .navigation-links {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navigation-link1 {
            font-size: 0.85em;
            font-style: normal;
            font-weight: 400;
          }
          .navigation-link2 {
            font-size: 0.85em;
            font-style: normal;
            font-family: Montserrat;
            font-weight: 400;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-leistungen {
            font-size: 0.85em;
            font-style: normal;
            font-family: Montserrat;
            font-weight: 400;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-notfallpraxen {
            font-size: 0.85em;
            font-style: normal;
            font-family: Montserrat;
            font-weight: 400;
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-thq-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            margin-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navigation-dropdown-toggle {
            fill: #595959;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: inline-flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navigation-text {
            color: var(--dl-color-gray-black);
            font-size: 0.85em;
            font-style: normal;
            text-align: center;
            font-weight: 400;
            margin-right: 4px;
            vertical-align: middle;
          }
          .navigation-dropdown-arrow {
            transition: 0.3s;
          }
          .navigation-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-top: auto;
            transition: 0.3s;
            margin-bottom: auto;
          }
          .navigation-dropdown-list {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .navigation-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navigation-dropdown-toggle1 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navigation-dropdown-toggle1:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navigation-text1 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 0.85em;
            font-style: normal;
            font-weight: 300;
          }
          .navigation-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navigation-dropdown-toggle2 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navigation-dropdown-toggle2:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navigation-text2 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 0.85em;
            font-style: normal;
            font-weight: 300;
          }
          .navigation-termin-buchen {
            color: rgb(255, 255, 255);
            font-size: 0.85em;
            font-style: normal;
            font-family: Montserrat;
            font-weight: 300;
            margin-left: var(--dl-space-space-twounits);
            border-color: var(--dl-color-milz-button);
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
            background-color: var(--dl-color-milz-button);
            border-top-width: 5px;
            border-bottom-width: 5px;
          }
          .navigation-burger-menu {
            display: none;
          }
          .navigation-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navigation-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .navigation-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navigation-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navigation-logo {
            height: 2rem;
          }
          .navigation-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navigation-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navigation-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .navigation-text3 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navigation-text4 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navigation-text5 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navigation-text6 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navigation-text7 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .navigation-buttons {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navigation-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navigation-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .navigation-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navigation-root-class-name {
            width: 100%;
            height: 13.5vh;
            align-self: center;
          }
          .navigation-root-class-name1 {
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            position: 0px;
            align-self: center;
          }
          .navigation-root-class-name2 {
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 13vh;
            position: 0px;
            align-self: center;
          }
          .navigation-root-class-name3 {
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 13vh;
            position: 0px;
            align-self: center;
          }

          @media (max-width: 1200px) {
            .navigation-dropdown-list {
              display: none;
            }
          }
          @media (max-width: 991px) {
            .navigation-nav-header-bar {
              padding-left: 0.5rem;
              padding-right: 0.5rem;
            }
            .navigation-navbar-interactive {
              max-width: 95vw;
              align-items: center;
              justify-content: space-between;
            }
            .navigation-desktop-menu {
              display: none;
            }
            .navigation-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .navigation-icon02 {
              width: 3rem;
              height: 3rem;
            }
            .navigation-root-class-name {
              height: 9.5vh;
            }
          }
          @media (max-width: 767px) {
            .navigation-burger-menu {
              align-items: center;
              justify-content: center;
            }
            .navigation-text3 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-text4 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-text5 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-text6 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-text7 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .navigation-navbar-interactive {
              position: relative;
              max-width: 100%;
            }
            .navigation-image {
              height: 4rem;
            }
            .navigation-icon02 {
              width: 2rem;
              height: 2rem;
            }
            .navigation-mobile-menu {
              width: 100%;
              height: 100vh;
              padding: 16px;
              z-index: 9999;
              position: absolute;
              align-items: stretch;
            }
            .navigation-top {
              width: 100%;
              position: relative;
              align-self: center;
            }
            .navigation-logo {
              height: 4rem;
              padding-top: 0.25rem;
              padding-bottom: 0.25rem;
            }
            .navigation-close-menu {
              align-items: stretch;
              justify-content: space-between;
            }
            .navigation-icon04 {
              width: auto;
              height: 1.5rem;
            }
          }
        `}
      </style>
    </>
  )
}

Navigation.defaultProps = {
  rootClassName: '',
}

Navigation.propTypes = {
  rootClassName: PropTypes.string,
}

export default Navigation
