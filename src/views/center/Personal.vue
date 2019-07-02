<template>
  <div class="person-cnt">
    <center-side></center-side>
    <div class="cnt">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Side from '../../components/CenterSide.vue'

export default {
  components: {
    'center-side': Side
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/default';

.person-cnt {
  display: flex;
}

.cnt {
  margin-left: _sidebar_width;
  width: 100%;
}
</style>
