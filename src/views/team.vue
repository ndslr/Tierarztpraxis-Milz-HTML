<template>
  <div class="team-container">
    <div class="team-page">
      <app-header rootClassName="header-root-class-name1"></app-header>
      <background-mobile
        rootClassName="background-mobile-root-class-name2"
      ></background-mobile>
      <background-desktop
        rootClassName="background-desktop-root-class-name1"
      ></background-desktop>
      <team-comp rootClassName="team-comp-root-class-name"></team-comp>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import BackgroundMobile from '../components/background-mobile'
import BackgroundDesktop from '../components/background-desktop'
import TeamComp from '../components/team-comp'

export default {
  name: 'Team',
  components: {
    AppHeader,
    BackgroundMobile,
    BackgroundDesktop,
    TeamComp,
  },
  metaInfo: {
    title: 'Team - Tierarztpraxis Dr. Stephanie Milz',
    meta: [
      {
        name: 'description',
        content: 'Webseite für Tierarztpraxis Milz',
      },
      {
        property: 'og:title',
        content: 'Team - Tierarztpraxis Dr. Stephanie Milz',
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
.team-container {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.team-page {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-direction: column;
}
</style>
