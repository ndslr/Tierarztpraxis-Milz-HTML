<template>
  <div class="home-container">
    <div class="home-page">
      <app-header rootClassName="header-root-class-name"></app-header>
      <background-mobile
        rootClassName="background-mobile-root-class-name"
      ></background-mobile>
      <background-desktop
        rootClassName="background-desktop-root-class-name"
      ></background-desktop>
      <app-main rootClassName="main-root-class-name"></app-main>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import BackgroundMobile from '../components/background-mobile'
import BackgroundDesktop from '../components/background-desktop'
import AppMain from '../components/main'

export default {
  name: 'Home',
  components: {
    AppHeader,
    BackgroundMobile,
    BackgroundDesktop,
    AppMain,
  },
  metaInfo: {
    title: 'Tierarztpraxis Dr. Stephanie Milz',
    meta: [
      {
        name: 'description',
        content: 'Webseite für Tierarztpraxis Milz',
      },
      {
        property: 'og:title',
        content: 'Tierarztpraxis Dr. Stephanie Milz',
      },
      {
        property: 'og:description',
        content: 'Webseite für Tierarztpraxis Milz',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.home-page {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-direction: column;
}
</style>
