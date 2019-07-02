<template>
  <div class="company-cnt" :style="backgroundDiv"></div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: true,
      backgroundDiv: {
        backgroundImage: 'url(' + require('../assets/img/background.jpg') + ')'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.company-cnt {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-size: 100% 100%;
}
</style>
