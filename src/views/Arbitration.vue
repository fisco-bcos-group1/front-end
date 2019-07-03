<template>
  <div class="main-cnt">
    <div class="bg"></div>
    <div>
      <el-button>机构登录</el-button>
      <el-button>机构注册</el-button>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style lang="stylus" scoped>
@import '../assets/css/default';

.main-cnt {
  .bg {
    position: fixed;
    top: 0px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(128, 64, 255, 0.2);
    z-index: -1;
  }
}
</style>
