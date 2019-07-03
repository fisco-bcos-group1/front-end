<template>
  <div class="company-cnt" :style="backgroundDiv">
    <div class="music-btn" @click="dialogVisible=true">申请企业认证</div>
    <el-dialog title="申请企业认证" :visible.sync="dialogVisible" center width="40%" append-to-body>
      <div class="d-cnt">
        <div class="d-line">
          <div class="label">姓名：</div>
          <el-input class="value"></el-input>
        </div>
        <div class="d-line">
          <div class="label">企业编号：</div>
          <el-input class="value"></el-input>
        </div>
        <div class="d-line">
          <div class="label">所在地：</div>
          <el-input class="value"></el-input>
        </div>
        <div class="d-line">
          <div class="label">联系电话：</div>
          <el-input class="value"></el-input>
        </div>
        <div class="d-line">
          <div class="label">电子邮箱：</div>
          <el-input class="value"></el-input>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible=false">确定申请</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      backgroundDiv: {
        backgroundImage: 'url(' + require('../assets/img/background.jpg') + ')'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/default';

.company-cnt {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-size: 100% 100%;
}

.music-btn {
  background-color: #fff;
  width: 200px;
  line-height: 50px;
  border-radius: 10px;
  margin: 80px auto;
  text-align: center;
  font-size: 1.25rem;
  noselect();
  cursor: pointer;
  box-shadow: 0 2px 12px 0 rgba(120, 120, 120, 0.5);

  &:hover {
    background-color: #eee;
    color: _color_default;
  }
}

.d-cnt {
  width: 450px;
  margin: 0 auto;

  .d-line {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    .label {
      width: 90px;
    }

    .value {
      width: 360px;
    }
  }
}
</style>
