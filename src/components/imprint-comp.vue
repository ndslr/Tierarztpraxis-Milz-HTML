<template>
  <div class="imprint-comp-main">
    <div class="imprint-comp-container">
      <h1 class="header-h2-title">{{ heading }}</h1>
    </div>
    <div class="imprint-comp-container1"><span>{{ text }}</span></div>
  </div>
</template>

<script>
export default {
  name: 'ImprintComp',
  props: {
    heading: {
      type: String,
      default: 'Impressum',
    },
    rootClassName: String,
    text: {
      type: String,
      default: 'Text',
    },
  },
}
</script>

<style scoped>
.imprint-comp-main {
  flex: 1;
  width: 100%;
  height: 300px;
  display: flex;
  z-index: 999;
  position: relative;
  max-width: 75vw;
  align-items: flex-start;
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  justify-content: flex-start;
}
.imprint-comp-container {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.imprint-comp-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
@media(max-width: 1200px) {
  .imprint-comp-main {
    position: static;
    align-items: center;
    justify-content: center;
  }
}
@media(max-width: 991px) {
  .imprint-comp-main {
    max-width: 80%;
    flex-direction: column;
  }
}
</style>
