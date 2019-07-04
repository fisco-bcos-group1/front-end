<template>
  <div class="option-cnt" :style="backgroundDiv">
    <div class="login-cnt">
      <div class="login-item" @click="clickOption('user')">普通用户</div>
      <div class="login-item" @click="clickOption('musician')">音乐人</div>
      <div class="login-item" @click="clickOption('company')">企业</div>
    </div>
    <!-- login dialog -->
    <el-dialog :title="dialogTitle" :visible.sync="loginVisible" width="30%" center append-to-body>
      <div class="ld-value">
        <div class="label">私钥：</div>
        <el-input class="myinput" v-model="pwd" placeholder="请输入私钥"></el-input>
      </div>
      <div class="ld-register" @click="switchToRegister">点此注册</div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="clickLogin">登 录</el-button>
      </div>
    </el-dialog>
    <!-- register dialog -->
    <el-dialog title="用户注册" :visible.sync="registerVisible" width="30%" center append-to-body>
      <div class="register-box">
        <div class="reg-line">
          <div class="label">姓名：</div>
          <el-input class="myinput" v-model="pwd" placeholder="请输入私钥"></el-input>
        </div>
        <div class="reg-line" style="margin-top:30px">
          <div class="label">电话号码：</div>
          <el-input class="myinput" v-model="pwd" placeholder="请输入私钥"></el-input>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="clickRegister">注 册</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginVisible: false,
      registerVisible: false,
      pwd: '',
      name: '',
      phone: '',
      type: 'user',
      backgroundDiv: {
        backgroundImage:
          'url(' + require('../../assets/img/background.jpg') + ')'
      }
    }
  },
  computed: {
    dialogTitle() {
      if (this.type === 'musician') return '音乐人登录'
      else if (this.type === 'company') return '企业登录'
      return '用户登录'
    }
  },
  methods: {
    clickOption(item) {
      this.type = item
      this.loginVisible = true
    },
    switchToRegister() {
      this.loginVisible = false
      if (this.type === 'musician') {
        this.$router.push('/musician')
      } else if (this.type === 'company') {
        this.$router.push('/company')
      } else {
        this.registerVisible = true
      }
    },
    clickLogin() {
      // to do
      this.loginVisible = false
    },
    clickRegister() {
      // to do
      this.registerVisible = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/default';

.option-cnt {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-size: 100% 100%;
}

.login-cnt {
  width: 750px;
  margin: 180px auto;
  display: flex;
  justify-content: space-between;
}

.login-item {
  width: 180px;
  line-height: 200px;
  text-align: center;
  font-size: 1.25rem;
  color: #303133;
  border: 1px solid #909399;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  noselect();

  &:hover {
    border-color: _color_default;
    color: #aaaaaa;
    font-size: 1.5rem;
    background-color: _color_default_alpha;
  }
}

.ld-value {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .label {
    font-size: 1.125rem;
  }

  .myinput {
    width: 350px;
  }
}

.ld-register {
  cursor: pointer;
  margin-top: 20px;
  text-align: right;
  text-decoration: underline;

  &:hover {
    color: _color_default;
  }
}

.register-box {
  .reg-line {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .label {
      font-size: 1rem;
    }

    .myinput {
      width: 320px;
    }
  }
}
</style>
