<template>
  <div class="home" :style="backgroundDiv">
    <div class="slogan">音链音乐授权 有保障的版权音乐</div>
    <div class="search-box">
      <el-input placeholder="输入音乐名称" v-model="musicName"></el-input>
      <el-input placeholder="输入作者" v-model="musicAuthor"></el-input>
      <el-button plain type="success" icon="el-icon-search" circle></el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  data() {
    return {
      backgroundDiv: {
        backgroundImage: 'url(' + require('../assets/img/background.jpg') + ')'
      },
      musicName: '',
      musicAuthor: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
$headbar-height = 60px;

.home {
  position: fixed;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  background-size: 100% 100%;
}

.slogan {
  margin-top: 120px;
  font-size: 1.85rem;
  color: #E2E6EC;
  text-align: center;
}

.search-box {
  margin: 50px auto;
  width: 680px;
  display: flex;
  justify-content: space-between;

  .el-input {
    width: 300px;
  }
}
</style>
