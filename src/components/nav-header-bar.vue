<template>
  <div
    id="nav-header-bar"
    class="nav-header-bar-nav-header-bar nav-header color-design"
    v-bind:class="rootClassName"
  >
    <div class="nav-header-bar-container nav-header-bar">
      <span class="nav-header-bar-text nav-header-text">{{ phoneNumber }}</span>
      <span class="nav-header-bar-text1 nav-header-text">{{ email }}</span>
      <span class="nav-header-bar-text2 nav-header-text">{{ adress }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavHeaderBar',
  props: {
    email: {
      type: String,
      default: 'info@tierarztpraxis-milz.de',
    },
    phoneNumber: {
      type: String,
      default: '+49 (0) 711 / 528 32 23',
    },
    adress: {
      type: String,
      default: 'Masurenstraße 12, 70374 Stuttgart',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.nav-header-bar-nav-header-bar {
  justify-content: center;
  background-color: var(--dl-color-milz-button);
}
.nav-header-bar-container {
  max-width: 85vw;
}
.nav-header-bar-text {
  align-self: left;
  text-align: left;
}
.nav-header-bar-text1 {
  color: #ffffff;
  width: 100%;
  margin: 0 auto;
  align-self: center;
  text-align: center;
}
.nav-header-bar-text2 {
  color: #ffffff;
  width: 100%;
  align-self: center;
  text-align: right;
}
.nav-header-bar-root-class-name {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 30%;
  position: static;
  align-self: center;
}
.nav-header-bar-root-class-name1 {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  position: static;
  align-self: center;
}
.nav-header-bar-root-class-name2 {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 7vh;
  position: static;
  align-self: center;
}
.nav-header-bar-root-class-name3 {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 7vh;
  position: static;
  align-self: center;
}

.nav-header-bar-root-class-name5 {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 7vh;
  position: static;
  align-self: center;
}
@media(max-width: 1200px) {
  .nav-header-bar-container {
    max-width: 95vw;
  }
  .nav-header-bar-text1 {
    font-size: 16px;
  }
  .nav-header-bar-text2 {
    font-size: 16px;
  }
}
@media(max-width: 991px) {
  .nav-header-bar-text1 {
    font-size: 14px;
  }
  .nav-header-bar-text2 {
    font-size: 14px;
  }
  .nav-header-bar-root-class-name {
    height: 3.5vh;
  }
}
@media(max-width: 767px) {
  .nav-header-bar-text1 {
    font-size: 11px;
  }
  .nav-header-bar-text2 {
    font-size: 11px;
  }
  .nav-header-bar-root-class-name {
    display: none;
  }
  .nav-header-bar-root-class-name2 {
    display: none;
  }
  .nav-header-bar-root-class-name3 {
    display: none;
  }
  .nav-header-bar-root-class-name5 {
    display: none;
  }
}
</style>
