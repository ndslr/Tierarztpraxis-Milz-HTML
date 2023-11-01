<template>
  <div class="header-header" v-bind:class="rootClassName">
    <nav-header-bar
      rootClassName="nav-header-bar-root-class-name"
    ></nav-header-bar>
    <app-navigation rootClassName="navigation-root-class-name"></app-navigation>
  </div>
</template>

<script>
import NavHeaderBar from './nav-header-bar'
import AppNavigation from './navigation'

export default {
  name: 'Header',
  props: {
    rootClassName: String,
  },
  components: {
    NavHeaderBar,
    AppNavigation,
  },
}
</script>

<style scoped>
.header-header {
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 9999;
  position: relative;
  max-width: 100%;
  align-self: stretch;
  max-height: 10rem;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.header-root-class-name {
  max-height: 10rem;
}



@media(max-width: 991px) {
  .header-root-class-name {
    max-height: 13vh;
  }
  .header-root-class-name1 {
    max-height: 13vh;
  }
  .header-root-class-name3 {
    max-height: 13vh;
  }
}
@media(max-width: 767px) {
  .header-root-class-name {
    max-height: 13.5vh;
  }
  .header-root-class-name2 {
    max-height: 13.5vh;
  }
  .header-root-class-name3 {
    max-height: 13.5vh;
  }
}
@media(max-width: 479px) {
  .header-root-class-name {
    max-height: 13.5vh;
  }
  .header-root-class-name2 {
    max-height: 13.5vh;
  }
  .header-root-class-name3 {
    max-height: 13.5vh;
  }
}
</style>
