<template>
  <div class="team-comp-main" v-bind:class="rootClassName">
    <div class="team-comp-column">
      <h2 class="header-h2-title">{{ Title }}</h2>
      <div class="team-comp-row">
        <div class="team-comp-left-arrow">
          <img :alt="image_alt2" :src="image_src2" class="team-comp-image" />
        </div>
        <div class="team-comp-container team-container">
          <img :alt="image_alt" :src="image_src" class="team-img" />
          <div class="team-comp-container1">
            <div class="team-text-box"></div>
            <span class="team-comp-text team-text-span">{{ text32 }}</span>
            <span class="team-comp-text1 team-text-subspan">{{ text312 }}</span>
            <span class="team-comp-text2 team-text-subspan">{{ text3112 }}</span>
            <span class="team-comp-text3 team-text-subspan">{{ text31111 }}</span>
            <span class="team-comp-text4 team-text-subspan">
              {{ text311111 }}
            </span>
          </div>
        </div>
        <div class="team-container">
          <img
            :alt="image_alt1"
            :src="image_src1"
            loading="lazy"
            class="team-img"
          />
          <div class="team-comp-container4">
            <div class="team-text-box"></div>
            <span class="team-text-span">{{ text3 }}</span>
            <span class="team-text-subspan">{{ text31 }}</span>
            <span class="team-comp-text7 team-text-subspan">{{ text311 }}</span>
            <span class="team-comp-text8 team-text-subspan">{{ text3111 }}</span>
          </div>
        </div>
        <div class="team-comp-right-arrow">
          <img :alt="image_alt3" :src="image_src3" class="team-comp-image3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamComp',
  props: {
    image_alt3: {
      type: String,
      default: 'image',
    },
    image_src3: {
      type: String,
      default: '/arrow-right.svg',
    },
    image_src: {
      type: String,
      default: '/andreas-seiler.1024x1024-1500w.jpg',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    text311111: {
      type: String,
      default: 'Tier-Verhaltenstherapeutin',
    },
    text3: {
      type: String,
      default: 'Saskia Schwarz',
    },
    text31111: {
      type: String,
      default: 'Tier-Physiotherapeutin',
    },
    text3112: {
      type: String,
      default: 'Veterinär Chiropraktikerin',
    },
    text31: {
      type: String,
      default: 'Tiermedizinische Fachangestellte',
    },
    text32: {
      type: String,
      default: 'Dr. Stephanie Milz',
    },
    text311: {
      type: String,
      default: 'Tier-Physiotherapeutin',
    },
    image_src1: {
      type: String,
      default: '/andreas-seiler.1024x1024-1500w.jpg',
    },
    image_alt2: {
      type: String,
      default: 'image',
    },
    image_src2: {
      type: String,
      default: '/arrow-left.svg',
    },
    text312: {
      type: String,
      default: 'Tierärztin für Kleintiere',
    },
    text3111: {
      type: String,
      default: 'Praxismanagement',
    },
    rootClassName: String,
    image_alt: {
      type: String,
      default: 'image',
    },
    Title: {
      type: String,
      default: 'Unser Team',
    },
  },
}
</script>

<style scoped>
.team-comp-main {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 999;
  position: relative;
  max-width: 75vw;
  max-height: auto;
  align-items: center;
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  flex-direction: row;
  justify-content: space-between;
}
.team-comp-column {
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
.team-comp-row {
  flex: 0 0 auto;
  width: 100%;
  height: 90%;
  display: flex;
  position: relative;
  align-self: center;
  align-items: flex-start;
  padding-left: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-halfunit);
  justify-content: space-between;
}
.team-comp-left-arrow {
  top: 168px;
  flex: 0 0 auto;
  left: 0px;
  width: 2em;
  height: 2em;
  display: flex;
  position: absolute;
  align-self: center;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: column;
  background-color: #ffffff;
}
.team-comp-image {
  top: -5vh;
  left: 0px;
  width: 2em;
  position: absolute;
  object-fit: cover;
}
.team-comp-container {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.team-comp-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 7.5em;
  display: flex;
  position: relative;
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: column;
}
.team-comp-text {
  align-self: stretch;
  text-align: center;
}
.team-comp-text1 {
  align-self: stretch;
}
.team-comp-text2 {
  align-self: stretch;
  text-align: center;
}
.team-comp-text3 {
  align-self: stretch;
  text-align: center;
}
.team-comp-text4 {
  align-self: stretch;
  text-align: center;
}
.team-comp-container4 {
  flex: 0 0 auto;
  width: 100%;
  height: 7.5em;
  display: flex;
  position: relative;
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: column;
}
.team-comp-text7 {
  z-index: 999;
  align-self: stretch;
  text-align: center;
}
.team-comp-text8 {
  z-index: 999;
  align-self: stretch;
  text-align: center;
}
.team-comp-right-arrow {
  flex: 0 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  position: relative;
  align-self: center;
  align-items: space-between;
  flex-direction: column;
}
.team-comp-image3 {
  top: -5vh;
  left: 0px;
  right: 0px;
  width: 2em;
  position: absolute;
  object-fit: cover;
}

@media(max-width: 1200px) {
  .team-comp-main {
    position: static;
    align-items: center;
    justify-content: center;
  }
  .team-comp-column {
    width: auto;
  }
  .team-comp-row {
    width: auto;
    align-self: center;
  }
}
@media(max-width: 991px) {
  .team-comp-main {
    max-width: 80%;
    flex-direction: column;
  }
  .team-comp-column {
    left: 0px;
    right: 0px;
    position: static;
    align-items: center;
    justify-content: center;
  }
  .team-comp-row {
    justify-content: center;
  }
}
</style>
