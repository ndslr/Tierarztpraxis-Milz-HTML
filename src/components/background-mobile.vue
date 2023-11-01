<template>
  <div class="background-mobile-container" v-bind:class="rootClassName">
    <img
      :alt="image_alt"
      :src="image_src"
      loading="eager"
      class="background-mobile-image"
    />
  </div>
</template>

<script>
export default {
  name: 'BackgroundMobile',
  props: {
    image_src: {
      type: String,
      default: '/img_3430-1500h.jpg',
    },
    rootClassName: String,
    image_alt: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.background-mobile-container {
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 100;
  position: relative;
}
.background-mobile-image {
  flex: 1;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  z-index: 100;
  position: relative;
  object-fit: cover;
}
.background-mobile-root-class-name {
  display: none;
}
.background-mobile-root-class-name1 {
  display: none;
}
.background-mobile-root-class-name2 {
  display: none;
}
.background-mobile-root-class-name3 {
  display: none;
}
@media(max-width: 767px) {
  .background-mobile-root-class-name {
    top: 2vh;
    left: 0px;
    bottom: 0px;
    display: flex;
    position: absolute;
  }
  .background-mobile-root-class-name1 {
    top: 2vh;
    left: 0px;
    bottom: 0px;
    display: flex;
    position: absolute;
  }
  .background-mobile-root-class-name2 {
    top: 2vh;
    left: 0px;
    display: flex;
    position: absolute;
  }
  .background-mobile-root-class-name3 {
    top: 2vh;
    left: 0px;
    bottom: 0px;
    display: flex;
    position: absolute;
  }
}
</style>
