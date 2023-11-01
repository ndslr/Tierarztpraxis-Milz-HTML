<template>
  <div class="main-main" v-bind:class="rootClassName">
    <div class="main-column">
      <h1 class="main-title">{{ Title }}</h1>
      <div class="main-div-desktop">
        <div class="main-sprechzeiten">
          <div class="main-title1">
            <h2 class="main-text-h2">{{ Caption }}</h2>
          </div>
          <div class="main-times">
            <div class="main-container">
              <div class="main-container01">
                <span class="main-text-span">{{ Mo }}</span>
                <span class="main-mo-time main-text-span">{{ MoTime }}</span>
              </div>
              <div class="main-container02">
                <span class="main-di main-text-span">{{ Di }}</span>
                <span class="main-di-do-time main-text-span">{{ DiTime }}</span>
              </div>
              <div class="main-container03">
                <span class="main-mi main-text-span">{{ Mi }}</span>
                <span class="main-mi-time main-text-span">{{ MiTime }}</span>
              </div>
              <div class="main-container04">
                <span class="main-do main-text-span">{{ Do }}</span>
                <span class="main-do-time main-text-span">{{ DoTime }}</span>
              </div>
              <div class="main-container05">
                <span class="main-fr main-text-span">{{ Fr }}</span>
                <span class="main-fr-time main-text-span">{{ FrTime }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="main-kontakt">
          <div class="main-container06">
            <h2 class="main-caption1 main-text-h2">{{ Caption1 }}</h2>
          </div>
          <div class="main-buttons">
            <div class="main-container07">
              <a
                :href="link_button"
                target="_blank"
                rel="noreferrer noopener"
                class="main-link button color-button"
              >
                <svg viewBox="0 0 1024 1024" class="main-icon">
                  <path
                    d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 960.002c-62.958 0-122.872-13.012-177.23-36.452l233.148-262.29c5.206-5.858 8.082-13.422 8.082-21.26v-96c0-17.674-14.326-32-32-32-112.99 0-232.204-117.462-233.374-118.626-6-6.002-14.14-9.374-22.626-9.374h-128c-17.672 0-32 14.328-32 32v192c0 12.122 6.848 23.202 17.69 28.622l110.31 55.156v187.886c-116.052-80.956-192-215.432-192-367.664 0-68.714 15.49-133.806 43.138-192h116.862c8.488 0 16.626-3.372 22.628-9.372l128-128c6-6.002 9.372-14.14 9.372-22.628v-77.412c40.562-12.074 83.518-18.588 128-18.588 70.406 0 137.004 16.26 196.282 45.2-4.144 3.502-8.176 7.164-12.046 11.036-36.266 36.264-56.236 84.478-56.236 135.764s19.97 99.5 56.236 135.764c36.434 36.432 85.218 56.264 135.634 56.26 3.166 0 6.342-0.080 9.518-0.236 13.814 51.802 38.752 186.656-8.404 372.334-0.444 1.744-0.696 3.488-0.842 5.224-81.324 83.080-194.7 134.656-320.142 134.656z"
                  ></path>
                </svg>
                <span class="main-text-button">{{ text }}</span>
              </a>
            </div>
            <div class="main-container08">
              <h3 class="main-text01">
                <span>Telefonisch unter </span>
                <span> </span>
              </h3>
              <a href="tel:+497115283223" class="main-link1">
                <h3 class="main-phone">{{ Phone }}</h3>
              </a>
              <a href="tel:+497115283223" class="main-link2 button color-button">
                <svg viewBox="0 0 1024 1024" class="main-icon02">
                  <path
                    d="M633.984 255.189c40.235 7.851 74.24 29.141 98.56 58.624 17.92 21.76 30.592 47.957 36.352 76.501 4.651 23.083 27.179 38.016 50.261 33.365s38.016-27.179 33.365-50.261c-8.533-42.325-27.349-81.365-54.144-113.877-36.437-44.203-87.765-76.331-148.053-88.064-23.125-4.523-45.525 10.581-50.048 33.707s10.581 45.525 33.707 50.048zM637.44 85.077c85.333 9.472 159.701 49.579 213.547 108.544 47.701 52.224 79.275 119.211 87.979 192.811 2.773 23.381 23.979 40.149 47.36 37.376s40.149-23.979 37.376-47.36c-10.795-91.605-50.176-175.189-109.696-240.384-67.328-73.728-160.512-123.989-267.136-135.808-23.424-2.603-44.501 14.293-47.104 37.675s14.293 44.501 37.675 47.104zM981.333 721.92c0.683-30.464-10.069-59.904-28.715-82.901-19.627-24.149-48.171-41.259-82.133-46.080-34.133-4.181-72.32-13.397-110.336-27.563-18.475-6.784-38.101-9.301-57.344-7.424-28.288 2.731-55.765 14.891-77.611 36.48l-30.72 30.72c-75.52-47.659-143.36-113.792-195.541-195.797l30.976-30.976c13.739-14.080 24.021-30.976 30.165-49.323 9.045-26.965 9.131-57.003-1.664-85.803-12.331-32.128-22.101-70.144-27.477-110.72-4.437-30.507-19.413-57.472-41.088-77.013-22.997-20.693-53.589-33.195-86.485-32.853h-127.829c-3.755 0-7.765 0.171-11.648 0.512-35.157 3.2-65.792 20.395-86.741 45.483s-32.341 58.325-29.141 93.824c12.8 131.243 58.24 266.368 137.216 388.352 64.085 102.955 155.648 197.248 268.715 269.056 109.568 72.405 242.517 122.112 387.669 137.856 3.925 0.384 8.149 0.555 12.288 0.555 35.328-0.128 67.328-14.635 90.368-37.845s37.248-55.339 37.12-90.496zM896 721.92v128c0.043 11.947-4.651 22.613-12.373 30.379s-18.304 12.587-30.123 12.629l-3.755-0.171c-130.56-14.208-250.581-59.221-348.757-124.117-103.595-65.835-185.984-150.955-243.285-242.944-72.405-111.787-113.28-233.856-124.757-351.488-1.024-11.435 2.731-22.443 9.771-30.891s17.195-14.080 28.928-15.147l131.712-0.171c11.563-0.128 21.632 4.011 29.312 10.923 7.253 6.571 12.288 15.616 13.781 25.941 6.059 45.739 17.408 90.325 32.299 129.067 3.456 9.216 3.413 19.072 0.427 28.075-2.091 6.187-5.589 11.989-10.325 16.853l-53.845 53.803c-13.824 13.824-16.171 34.731-6.912 51.243 67.584 118.827 163.797 211.499 272.256 272.128 16.939 9.472 37.632 6.144 50.987-7.083l54.187-54.187c7.083-6.997 16.085-10.965 25.515-11.904 6.485-0.64 13.227 0.213 19.584 2.56 43.605 16.256 88.32 27.136 129.451 32.171 10.283 1.451 19.712 7.083 26.24 15.147 6.272 7.723 9.856 17.579 9.643 29.099z"
                  ></path>
                </svg>
                <span class="main-text04 main-text-button">{{ text1 }}</span>
              </a>
            </div>
            <div class="main-container09">
              <h3 class="main-text05">
                <span>Telefonisch unter </span>
                <span> </span>
              </h3>
              <a href="tel:+497115283223" class="main-link3">
                <h3 class="main-phone1">{{ Phone1 }}</h3>
              </a>
              <a
                href="https://goo.gl/maps/2zyQpp5bfvPt7EQv5"
                target="_blank"
                rel="noreferrer noopener"
                class="main-link4 button color-button"
              >
                <svg viewBox="0 0 1024 1024" class="main-icon04">
                  <path
                    d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 516c-108.248 0-196-87.752-196-196s87.752-196 196-196 196 87.752 196 196-87.752 196-196 196zM388 320c0-68.483 55.517-124 124-124s124 55.517 124 124c0 68.483-55.517 124-124 124s-124-55.517-124-124z"
                  ></path>
                </svg>
                <span class="main-text08 main-text-button">{{ Route }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="main-div-tablet">
        <div class="main-sprechzeiten1">
          <div class="main-title2 main-text-h2">
            <h2 class="main-text-h2">{{ Caption2 }}</h2>
          </div>
          <div class="main-times1">
            <div class="main-container10">
              <div class="main-container11">
                <span class="main-mo1 main-text-span">{{ Mo1 }}</span>
                <span class="main-mo-time1 main-text-span">{{ MoTime2 }}</span>
              </div>
              <div class="main-container12">
                <span class="main-mo-time2 main-text-span">{{ MoTime11 }}</span>
              </div>
              <div class="main-container13">
                <span class="main-di1 main-text-span">{{ Di1 }}</span>
                <span class="main-di-do-time1 main-text-span">{{ DiTime1 }}</span>
              </div>
              <div class="main-container14">
                <span class="main-mi1 main-text-span">{{ Mi1 }}</span>
                <span class="main-mi-time1 main-text-span">{{ MiTime1 }}</span>
              </div>
              <div class="main-container15">
                <span class="main-do1 main-text-span">{{ Do1 }}</span>
                <span class="main-do-time1 main-text-span">{{ DoTime1 }}</span>
              </div>
              <div class="main-container16">
                <span class="main-fr1 main-text-span">{{ Fr1 }}</span>
                <span class="main-fr-time1 main-text-span">{{ FrTime1 }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="main-kontakt1">
          <div class="main-container17">
            <h2 class="main-caption3 main-text-h2">{{ Caption11 }}</h2>
          </div>
          <div class="main-buttons1">
            <div class="main-container18">
              <a
                :href="link_button1"
                target="_blank"
                rel="noreferrer noopener"
                class="main-link5 button color-button"
              >
                <svg viewBox="0 0 1024 1024" class="main-icon06">
                  <path
                    d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 960.002c-62.958 0-122.872-13.012-177.23-36.452l233.148-262.29c5.206-5.858 8.082-13.422 8.082-21.26v-96c0-17.674-14.326-32-32-32-112.99 0-232.204-117.462-233.374-118.626-6-6.002-14.14-9.374-22.626-9.374h-128c-17.672 0-32 14.328-32 32v192c0 12.122 6.848 23.202 17.69 28.622l110.31 55.156v187.886c-116.052-80.956-192-215.432-192-367.664 0-68.714 15.49-133.806 43.138-192h116.862c8.488 0 16.626-3.372 22.628-9.372l128-128c6-6.002 9.372-14.14 9.372-22.628v-77.412c40.562-12.074 83.518-18.588 128-18.588 70.406 0 137.004 16.26 196.282 45.2-4.144 3.502-8.176 7.164-12.046 11.036-36.266 36.264-56.236 84.478-56.236 135.764s19.97 99.5 56.236 135.764c36.434 36.432 85.218 56.264 135.634 56.26 3.166 0 6.342-0.080 9.518-0.236 13.814 51.802 38.752 186.656-8.404 372.334-0.444 1.744-0.696 3.488-0.842 5.224-81.324 83.080-194.7 134.656-320.142 134.656z"
                  ></path>
                </svg>
                <span class="main-text09 main-text-span">{{ text2 }}</span>
              </a>
            </div>
            <div class="main-container19">
              <a href="tel:+497115283223" class="main-link6 button color-button">
                <svg viewBox="0 0 1024 1024" class="main-icon08">
                  <path
                    d="M633.984 255.189c40.235 7.851 74.24 29.141 98.56 58.624 17.92 21.76 30.592 47.957 36.352 76.501 4.651 23.083 27.179 38.016 50.261 33.365s38.016-27.179 33.365-50.261c-8.533-42.325-27.349-81.365-54.144-113.877-36.437-44.203-87.765-76.331-148.053-88.064-23.125-4.523-45.525 10.581-50.048 33.707s10.581 45.525 33.707 50.048zM637.44 85.077c85.333 9.472 159.701 49.579 213.547 108.544 47.701 52.224 79.275 119.211 87.979 192.811 2.773 23.381 23.979 40.149 47.36 37.376s40.149-23.979 37.376-47.36c-10.795-91.605-50.176-175.189-109.696-240.384-67.328-73.728-160.512-123.989-267.136-135.808-23.424-2.603-44.501 14.293-47.104 37.675s14.293 44.501 37.675 47.104zM981.333 721.92c0.683-30.464-10.069-59.904-28.715-82.901-19.627-24.149-48.171-41.259-82.133-46.080-34.133-4.181-72.32-13.397-110.336-27.563-18.475-6.784-38.101-9.301-57.344-7.424-28.288 2.731-55.765 14.891-77.611 36.48l-30.72 30.72c-75.52-47.659-143.36-113.792-195.541-195.797l30.976-30.976c13.739-14.080 24.021-30.976 30.165-49.323 9.045-26.965 9.131-57.003-1.664-85.803-12.331-32.128-22.101-70.144-27.477-110.72-4.437-30.507-19.413-57.472-41.088-77.013-22.997-20.693-53.589-33.195-86.485-32.853h-127.829c-3.755 0-7.765 0.171-11.648 0.512-35.157 3.2-65.792 20.395-86.741 45.483s-32.341 58.325-29.141 93.824c12.8 131.243 58.24 266.368 137.216 388.352 64.085 102.955 155.648 197.248 268.715 269.056 109.568 72.405 242.517 122.112 387.669 137.856 3.925 0.384 8.149 0.555 12.288 0.555 35.328-0.128 67.328-14.635 90.368-37.845s37.248-55.339 37.12-90.496zM896 721.92v128c0.043 11.947-4.651 22.613-12.373 30.379s-18.304 12.587-30.123 12.629l-3.755-0.171c-130.56-14.208-250.581-59.221-348.757-124.117-103.595-65.835-185.984-150.955-243.285-242.944-72.405-111.787-113.28-233.856-124.757-351.488-1.024-11.435 2.731-22.443 9.771-30.891s17.195-14.080 28.928-15.147l131.712-0.171c11.563-0.128 21.632 4.011 29.312 10.923 7.253 6.571 12.288 15.616 13.781 25.941 6.059 45.739 17.408 90.325 32.299 129.067 3.456 9.216 3.413 19.072 0.427 28.075-2.091 6.187-5.589 11.989-10.325 16.853l-53.845 53.803c-13.824 13.824-16.171 34.731-6.912 51.243 67.584 118.827 163.797 211.499 272.256 272.128 16.939 9.472 37.632 6.144 50.987-7.083l54.187-54.187c7.083-6.997 16.085-10.965 25.515-11.904 6.485-0.64 13.227 0.213 19.584 2.56 43.605 16.256 88.32 27.136 129.451 32.171 10.283 1.451 19.712 7.083 26.24 15.147 6.272 7.723 9.856 17.579 9.643 29.099z"
                  ></path>
                </svg>
                <span class="main-text10 main-text-span">{{ text11 }}</span>
              </a>
            </div>
            <div class="main-container20">
              <a
                href="https://goo.gl/maps/2zyQpp5bfvPt7EQv5"
                target="_blank"
                rel="noreferrer noopener"
                class="main-link7 button color-button"
              >
                <svg viewBox="0 0 1024 1024" class="main-icon10">
                  <path
                    d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 516c-108.248 0-196-87.752-196-196s87.752-196 196-196 196 87.752 196 196-87.752 196-196 196zM388 320c0-68.483 55.517-124 124-124s124 55.517 124 124c0 68.483-55.517 124-124 124s-124-55.517-124-124z"
                  ></path>
                </svg>
                <span class="main-text11 main-text-span">{{ Route1 }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    Di1: {
      type: String,
      default: 'Dienstag',
    },
    Caption11: {
      type: String,
      default: 'Kontakt',
    },
    Do1: {
      type: String,
      default: 'Donnerstag',
    },
    Fr: {
      type: String,
      default: 'Freitag',
    },
    FrTime1: {
      type: String,
      default: '7 - 14 Uhr',
    },
    Di: {
      type: String,
      default: 'Dienstag',
    },
    Mo: {
      type: String,
      default: 'Montag',
    },
    rootClassName: String,
    Mi: {
      type: String,
      default: 'Mittwoch',
    },
    text12: {
      type: String,
      default: 'Telefon',
    },
    DiTime: {
      type: String,
      default: '12 - 19 Uhr',
    },
    Phone1: {
      type: String,
      default: '+49 (0) 711 / 528 32 23 ',
    },
    MoTime2: {
      type: String,
      default: '7 -  11 Uhr',
    },
    DoTime1: {
      type: String,
      default: '14 - 18 Uhr',
    },
    text2: {
      type: String,
      default: 'Terminland',
    },
    link_button1: {
      type: String,
      default: 'https://www.terminland.de/tierarztpraxis-milz/',
    },
    DiTime1: {
      type: String,
      default: '12 - 19 Uhr',
    },
    Caption: {
      type: String,
      default: 'Sprechzeiten',
    },
    Title: {
      type: String,
      default: 'Tierarztpraxis Dr. Stephanie Milz',
    },
    text3: {
      type: String,
      default: 'Terminland',
    },
    Route1: {
      type: String,
      default: 'Route zu uns',
    },
    text11: {
      type: String,
      default: 'Telefon',
    },
    Mo1: {
      type: String,
      default: 'Montag',
    },
    Phone: {
      type: String,
      default: '+49 (0) 711 / 528 32 23 ',
    },
    MiTime: {
      type: String,
      default: '7 - 14 Uhr',
    },
    Caption1: {
      type: String,
      default: 'Kontakt',
    },
    MiTime1: {
      type: String,
      default: '7 - 14 Uhr',
    },
    DoTime: {
      type: String,
      default: '14 - 18 Uhr',
    },
    Mi1: {
      type: String,
      default: 'Mittwoch',
    },
    link_button: {
      type: String,
      default: 'https://www.terminland.de/tierarztpraxis-milz/',
    },
    MoTime11: {
      type: String,
      default: '16 - 19 Uhr',
    },
    Caption2: {
      type: String,
      default: 'Sprechzeiten',
    },
    MoTime: {
      type: String,
      default: '7 -  11 Uhr / 16 - 19 Uhr',
    },
    text: {
      type: String,
      default: 'Terminland',
    },
    Route_Tablet: {
      type: String,
      default: 'Route',
    },
    Route: {
      type: String,
      default: 'Route zu uns',
    },
    FrTime: {
      type: String,
      default: '7 - 14 Uhr',
    },
    text1: {
      type: String,
      default: 'Telefon',
    },
    Do: {
      type: String,
      default: 'Donnerstag',
    },
    Caption12: {
      type: String,
      default: 'Kontakt',
    },
    Fr1: {
      type: String,
      default: 'Freitag',
    },
  },
}
</script>

<style scoped>
.main-main {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 999;
  position: relative;
  max-width: 80vw;
  max-height: 60vh;
  align-items: center;
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  flex-direction: row;
  justify-content: space-between;
}
.main-column {
  gap: var(--dl-space-space-oneandhalfunits);
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
.main-title {
  color: #464646;
  width: 100%;
  font-size: 3.5rem;
  align-self: center;
  font-style: normal;
  text-align: center;
  font-family: Carrois Gothic SC;
  font-weight: 800;
  line-height: 76px;
  margin-left: auto;
  margin-right: auto;
}
.main-div-desktop {
  flex: 0 0 auto;
  height: 100%;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  padding-left: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-halfunit);
  justify-content: space-between;
}
.main-sprechzeiten {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 50%;
  height: 100%;
  display: flex;
  z-index: 20;
  align-self: flex-start;
  align-items: center;
  margin-left: auto;
  padding-top: 2.5rem;
  margin-right: auto;
  padding-left: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-halfunit);
  flex-direction: column;
  padding-bottom: 2.5rem;
  justify-content: flex-start;
}
.main-title1 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-self: center;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}
.main-times {
  flex: 0 0 auto;
  width: 20rem;
  height: 100%;
  display: flex;
  align-self: center;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}
.main-container {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.main-container01 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: space-between;
}
.main-mo-time {
  font-style: normal;
}
.main-container02 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: space-between;
}
.main-di {
  font-style: normal;
}
.main-di-do-time {
  font-style: normal;
}
.main-container03 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: space-between;
}
.main-mi {
  font-style: normal;
}
.main-mi-time {
  font-style: normal;
}
.main-container04 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: space-between;
}
.main-do {
  font-style: normal;
}
.main-do-time {
  font-style: normal;
}
.main-container05 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: space-between;
}
.main-fr {
  font-style: normal;
}
.main-fr-time {
  font-style: normal;
}
.main-kontakt {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 50%;
  height: 100%;
  display: flex;
  z-index: 20;
  align-self: flex-start;
  align-items: center;
  margin-left: auto;
  padding-top: 2.5rem;
  margin-right: auto;
  padding-left: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: 2.5rem;
  justify-content: flex-start;
}
.main-container06 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-self: center;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}
.main-caption1 {
  color: rgb(70, 70, 70);
  width: auto;
  align-self: center;
  font-style: normal;
  text-align: center;
  font-family: Poppins;
  line-height: 27px;
}
.main-buttons {
  gap: var(--dl-space-space-unit);
  flex: 0 0 auto;
  width: 60%;
  display: flex;
  position: relative;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.main-container07 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-self: stretch;
  align-items: center;
  margin-left: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-halfunit);
  flex-direction: column;
  justify-content: center;
}
.main-link {
  color: var(--dl-color-gray-white);
  width: 15vw;
  height: 100%;
  display: flex;
  align-self: center;
  font-style: normal;
  align-items: center;
  font-weight: 300;
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
}
.main-icon {
  fill: var(--dl-color-gray-white);
  width: 1em;
  height: 1em;
}
.main-container08 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  margin-right: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-halfunit);
  flex-direction: column;
  justify-content: center;
}
.main-text01 {
  display: none;
  align-self: center;
  font-style: normal;
  text-align: center;
  font-weight: 300;
  margin-left: var(--dl-space-space-unit);
}
.main-link1 {
  display: contents;
}
.main-phone {
  display: none;
  align-self: center;
  font-style: normal;
  text-align: center;
  font-weight: 300;
  margin-left: var(--dl-space-space-unit);
  text-decoration: none;
}
.main-link2 {
  color: var(--dl-color-gray-white);
  width: 15vw;
  height: 100%;
  display: flex;
  align-self: center;
  font-style: normal;
  align-items: center;
  font-weight: 300;
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
}
.main-icon02 {
  fill: var(--dl-color-gray-white);
  width: 1em;
  height: 1em;
}
.main-text04 {
  padding-left: var(--dl-space-space-halfunit);
}
.main-container09 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  margin-right: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-halfunit);
  flex-direction: column;
  justify-content: center;
}
.main-text05 {
  display: none;
  align-self: center;
  font-style: normal;
  text-align: center;
  font-weight: 300;
  margin-left: var(--dl-space-space-unit);
}
.main-link3 {
  display: contents;
}
.main-phone1 {
  display: none;
  align-self: center;
  font-style: normal;
  text-align: center;
  font-weight: 300;
  margin-left: var(--dl-space-space-unit);
  text-decoration: none;
}
.main-link4 {
  color: var(--dl-color-gray-white);
  width: 15vw;
  height: 100%;
  display: flex;
  align-self: center;
  font-style: normal;
  align-items: center;
  font-weight: 300;
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
}
.main-icon04 {
  fill: var(--dl-color-gray-white);
  width: 1em;
  height: 1em;
}
.main-text08 {
  padding-left: var(--dl-space-space-halfunit);
}
.main-div-tablet {
  flex: 0 0 auto;
  height: 100%;
  display: none;
  align-self: stretch;
  align-items: flex-start;
  padding-left: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-halfunit);
  justify-content: space-between;
}
.main-sprechzeiten1 {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 50%;
  height: 100%;
  display: flex;
  z-index: 20;
  align-self: flex-start;
  align-items: center;
  margin-left: auto;
  padding-top: 2.5rem;
  margin-right: auto;
  padding-left: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-halfunit);
  flex-direction: column;
  padding-bottom: 2.5rem;
  justify-content: flex-start;
}
.main-title2 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-self: center;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}
.main-times1 {
  flex: 0 0 auto;
  width: 20rem;
  height: 100%;
  display: flex;
  align-self: center;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}
.main-container10 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.main-container11 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: space-between;
}
.main-mo1 {
  font-style: normal;
}
.main-mo-time1 {
  font-style: normal;
}
.main-container12 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: flex-end;
}
.main-mo-time2 {
  font-style: normal;
}
.main-container13 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: space-between;
}
.main-di1 {
  font-style: normal;
}
.main-di-do-time1 {
  font-style: normal;
}
.main-container14 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: space-between;
}
.main-mi1 {
  font-style: normal;
}
.main-mi-time1 {
  font-style: normal;
}
.main-container15 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: space-between;
}
.main-do1 {
  font-style: normal;
}
.main-do-time1 {
  font-style: normal;
}
.main-container16 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: space-between;
}
.main-fr1 {
  font-style: normal;
}
.main-fr-time1 {
  font-style: normal;
}
.main-kontakt1 {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 50%;
  height: 100%;
  display: flex;
  z-index: 20;
  align-self: flex-start;
  align-items: center;
  margin-left: auto;
  padding-top: 2.5rem;
  margin-right: auto;
  padding-left: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: 2.5rem;
  justify-content: flex-start;
}
.main-container17 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-self: center;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}
.main-caption3 {
  color: rgb(70, 70, 70);
  width: auto;
  align-self: center;
  font-style: normal;
  text-align: center;
  font-family: Poppins;
  line-height: 27px;
}
.main-buttons1 {
  gap: var(--dl-space-space-unit);
  flex: 0 0 auto;
  width: 60%;
  display: flex;
  position: relative;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.main-container18 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-self: stretch;
  align-items: center;
  margin-left: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-halfunit);
  flex-direction: column;
  justify-content: center;
}
.main-link5 {
  color: var(--dl-color-gray-white);
  width: 15vw;
  height: 100%;
  display: flex;
  align-self: center;
  font-style: normal;
  align-items: center;
  font-weight: 300;
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
}
.main-icon06 {
  fill: var(--dl-color-gray-white);
  width: 1em;
  height: 1em;
}
.main-text09 {
  padding-left: var(--dl-space-space-halfunit);
}
.main-container19 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  margin-right: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-halfunit);
  flex-direction: column;
  justify-content: center;
}
.main-link6 {
  color: var(--dl-color-gray-white);
  width: 15vw;
  height: 100%;
  display: flex;
  align-self: center;
  font-style: normal;
  align-items: center;
  font-weight: 300;
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
}
.main-icon08 {
  fill: var(--dl-color-gray-white);
  width: 1em;
  height: 1em;
}
.main-text10 {
  padding-left: var(--dl-space-space-halfunit);
}
.main-container20 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  margin-right: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-halfunit);
  flex-direction: column;
  justify-content: center;
}
.main-link7 {
  color: var(--dl-color-gray-white);
  width: 15vw;
  height: 100%;
  display: flex;
  align-self: center;
  font-style: normal;
  align-items: center;
  font-weight: 300;
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
}
.main-icon10 {
  fill: var(--dl-color-gray-white);
  width: 1em;
  height: 1em;
}
.main-text11 {
  padding-left: var(--dl-space-space-halfunit);
}
.main-root-class-name {
  top: 25vh;
  margin: auto;
  position: absolute;
}
@media(max-width: 1600px) {
  .main-caption1 {
    font-style: normal;
    font-weight: 500;
  }
  .main-link {
    width: 20vw;
  }
  .main-link2 {
    width: 20vw;
  }
  .main-link4 {
    width: 20vw;
  }
  .main-link5 {
    width: 20vw;
  }
  .main-link6 {
    width: 20vw;
  }
  .main-link7 {
    width: 20vw;
  }
  .main-root-class-name {
    top: 30vh;
  }
}
@media(max-width: 1200px) {
  .main-main {
    position: static;
    align-items: center;
    justify-content: center;
  }
  .main-column {
    width: auto;
  }
  .main-caption1 {
    font-size: 36px;
  }
  .main-link {
    width: 25vw;
  }
  .main-link2 {
    width: 25vw;
  }
  .main-link4 {
    width: 25vw;
  }
  .main-link5 {
    width: 25vw;
  }
  .main-link6 {
    width: 25vw;
  }
  .main-link7 {
    width: 25vw;
  }
  .main-root-class-name {
    top: 35vh;
    max-width: 80vw;
  }
}
@media(max-width: 991px) {
  .main-main {
    max-width: 80%;
    flex-direction: column;
  }
  .main-column {
    left: 0px;
    right: 0px;
    width: 100%;
    position: static;
    align-items: stretch;
    padding-left: 0px;
    padding-right: 0px;
    justify-content: center;
  }
  .main-title {
    font-size: 2.5rem;
  }
  .main-div-desktop {
    display: none;
  }
  .main-sprechzeiten {
    gap: var(--dl-space-space-unit);
    flex: 0 0 auto;
    padding-top: var(--dl-space-space-unit);
    padding-bottom: 0px;
  }
  .main-times {
    width: auto;
  }
  .main-kontakt {
    gap: var(--dl-space-space-unit);
    flex: 0 0 auto;
    padding-top: var(--dl-space-space-unit);
    padding-bottom: 0px;
  }
  .main-caption1 {
    font-size: 24px;
  }
  .main-link {
    width: 100%;
  }
  .main-icon {
    width: 12px;
    height: 12px;
  }
  .main-icon02 {
    width: 12px;
    height: 12px;
  }
  .main-div-tablet {
    display: flex;
    align-self: stretch;
  }
  .main-sprechzeiten1 {
    gap: var(--dl-space-space-unit);
    flex: 0 0 auto;
    width: 50%;
    margin-left: auto;
    padding-top: var(--dl-space-space-unit);
    margin-right: auto;
    padding-bottom: 0px;
  }
  .main-times1 {
    width: 100%;
    padding-left: var(--dl-space-space-halfunit);
    padding-right: var(--dl-space-space-halfunit);
  }
  .main-kontakt1 {
    gap: var(--dl-space-space-unit);
    flex: 0 0 auto;
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-twounits);
    padding-bottom: 0px;
  }
  .main-link5 {
    width: 25vw;
  }
  .main-icon06 {
    width: 12px;
    height: 12px;
  }
  .main-icon08 {
    width: 12px;
    height: 12px;
  }
  .main-root-class-name {
    top: 0px;
    max-width: 90vw;
    max-height: auto;
  }
}
@media(max-width: 767px) {
  .main-main {
    max-width: 100%;
  }
  .main-caption1 {
    font-size: 16px;
    line-height: 24px;
  }
}
@media(max-width: 479px) {
  .main-title {
    font-size: 1rem;
    font-weight: 700;
  }
}
</style>
