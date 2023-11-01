<template>
  <div class="background-desktop-container" v-bind:class="rootClassName">
    <img
      :alt="image_alt"
      :src="image_src"
      loading="eager"
      class="background-desktop-image"
    />
  </div>
</template>

<script>
export default {
  name: 'BackgroundDesktop',
  props: {
    image_src: {
      type: String,
      default: '/20230905-img_3464-1500h.jpg',
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
.background-desktop-container {
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 100;
  position: relative;
}
.background-desktop-image {
  flex: 1;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  z-index: 100;
  position: relative;
  object-fit: cover;
}
.background-desktop-root-class-name {
  top: 10vh;
  left: 0px;
  position: absolute;
}
.background-desktop-root-class-name1 {
  top: 15vh;
  left: 0px;
  position: absolute;
}
.background-desktop-root-class-name2 {
  top: 15vh;
  left: 0px;
  position: absolute;
}
.background-desktop-root-class-name3 {
  top: 15vh;
  left: 0px;
  position: absolute;
}
.background-desktop-root-class-name4 {
  top: 15vh;
  left: 0px;
  position: absolute;
}
@media(max-width: 991px) {
  .background-desktop-root-class-name {
    top: 10vh;
  }
  .background-desktop-root-class-name1 {
    top: 10vh;
  }
  .background-desktop-root-class-name4 {
    top: 10vh;
  }
}
@media(max-width: 767px) {
  .background-desktop-root-class-name {
    top: 10vh;
    display: none;
  }
  .background-desktop-root-class-name1 {
    display: none;
  }
  .background-desktop-root-class-name4 {
    top: 10vh;
    display: none;
  }
}
</style>
