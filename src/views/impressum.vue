<template>
  <div class="impressum-container">
    <div class="impressum-page">
      <app-header rootClassName="header-root-class-name3"></app-header>
      <background-mobile
        rootClassName="background-mobile-root-class-name3"
      ></background-mobile>
      <background-desktop
        rootClassName="background-desktop-root-class-name4"
      ></background-desktop>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import BackgroundMobile from '../components/background-mobile'
import BackgroundDesktop from '../components/background-desktop'

export default {
  name: 'Impressum',
  components: {
    AppHeader,
    BackgroundMobile,
    BackgroundDesktop,
  },
  metaInfo: {
    title: 'Impressum - Tierarztpraxis Dr. Stephanie Milz',
    meta: [
      {
        name: 'description',
        content: 'Webseite für Tierarztpraxis Milz',
      },
      {
        property: 'og:title',
        content: 'Impressum - Tierarztpraxis Dr. Stephanie Milz',
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
.impressum-container {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.impressum-page {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-direction: column;
}
</style>
