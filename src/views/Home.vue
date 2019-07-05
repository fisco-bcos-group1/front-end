<template>
  <div class="home" :style="backgroundDiv">
    <div class="slogan">音链音乐授权 有保障的版权音乐</div>
    <div class="search-box">
      <el-input placeholder="输入音乐名称" v-model="musicName"></el-input>
      <el-input placeholder="输入作者" v-model="musicAuthor"></el-input>
      <el-button plain type="success" icon="el-icon-search" circle @click="clickSearch"></el-button>
    </div>

    <div class="show-box" v-show="isShow">
      <div class="title">音乐信息</div>
      <div class="music">
        <div class="line">
          <div class="item">
            <span class="label">作品名称：</span>
            <span class="value">{{music.name}}</span>
          </div>
          <div class="item">
            <span class="label">作&emsp;者：</span>
            <span class="value">{{music.author}}</span>
          </div>
        </div>
        <div class="item2">
          <span class="label">版权人地址：</span>
          <span class="value">{{music.owner}}</span>
        </div>
      </div>
      <div class="apply-btn" @click="dialogVisible=true">申请授权</div>
    </div>

    <el-dialog
      title="授 权"
      :visible.sync="dialogVisible"
      width="610px"
      center
      append-to-body
      top="20px"
    >
      <div class="dialog-cnt">
        <div class="box">
          <div class="title">授权歌曲信息</div>
          <div class="line">
            <div class="const-item">
              <span class="label">作品名称：</span>
              <span class="value">{{music.name}}</span>
            </div>
            <div class="const-item">
              <span class="label">作&emsp;者：</span>
              <span class="value">{{music.author}}</span>
            </div>
            <div class="const-item">
              <span class="label">版权人：</span>
              <span class="value">{{music.owner}}</span>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="title">填写授权信息</div>
          <div class="item">
            <span class="label">购买用途：</span>
            <el-input class="input-value" v-model="music.purpose"></el-input>
          </div>
          <div class="item">
            <span class="label">授权地域：</span>
            <el-input class="input-value" v-model="music.address"></el-input>
          </div>
          <div class="item">
            <span class="label">授权期限：</span>
            <el-input class="input-value" v-model="music.period"></el-input>
            <span>&ensp;月</span>
          </div>
          <div class="item">
            <span class="label">其他说明：</span>
            <el-input class="input-value" v-model="music.desc"></el-input>
          </div>
        </div>

        <div class="box">
          <div class="title">填写授权人信息</div>
          <div class="line">
            <div class="item">
              <span class="label">姓&emsp;名：</span>
              <el-input class="input-value" v-model="music.asker"></el-input>
            </div>
            <div class="item">
              <span class="label">联系电话：</span>
              <el-input class="input-value" v-model="music.phone"></el-input>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="title">付款方式</div>
          <div class="price-line">
            <span>价&emsp;格：</span>
            <el-input class="input-value" v-model="music.price"></el-input>
          </div>
          <div class="payway-box">
            <div class="payway">支付宝</div>
            <div class="payway">微信支付</div>
            <div class="payway">银联支付</div>
          </div>
        </div>
        <div class="dialog-footer">
          <el-button type="primary" @click="clickApply">确定申请授权</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  data() {
    return {
      dialogVisible: false,
      isShow: false,
      backgroundDiv: {
        backgroundImage: 'url(' + require('../assets/img/background.jpg') + ')'
      },
      musicName: '',
      musicAuthor: '',
      music: {
        bin: '',
        name: 'XXX',
        author: 'XXX',
        owner: 'XXX',
        alltime: '',
        purpose: '', // 购买用途
        address: '', // 授权地域
        period: '', // 授权期限
        desc: '', // 其他说明
        asker: '', // 授权人姓名
        phone: '', // 联系电话
        price: '' // 价格
      }
    }
  },
  methods: {
    clickSearch() {
      // To do
      if (this.$store.state.isLogin) {
        this.axios
          .post('/api/search', {
            privateKey: this.$store.state.privateKey,
            mName: this.musicName,
            singer: this.musicAuthor
          })
          .then(e => {
            let res = e.data
            let music = res.data
            console.log(music)
            if (res.success === 1) {
              this.isShow = true
              this.music.bin = music.bin
              this.music.name = music.mName
              this.music.author = music.singer
              this.music.owner = music.owner
              this.music.alltime = music.alltime
              console.log(music)
            } else {
              this.$message.info('无结果')
            }
          })
      } else {
        this.$message.error('请先登录')
      }
    },
    clickApply() {
      // To do
      let arr = [
        this.music.asker,
        this.music.phone,
        this.music.purpose,
        this.music.address,
        this.music.period,
        this.music.desc,
        this.music.price
      ]
      let req = {
        music:
          this.music.name + '#' + this.music.author + '#' + this.music.alltime,
        to: this.music.owner,
        info: arr.join('#'),
        privateKey: this.$store.state.privateKey
      }
      this.axios.post('/api/apply', req).then(e => {
        let res = e.data
        if (res.success === 1) this.$message.success(res.message)
        else this.$message.error(res.message)
      })
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/default';

.home {
  position: fixed;
  top: 0;
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

.show-box {
  width: 60%;
  min-width: 800px;
  margin: 80px auto;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  padding: 20px 30px 30px 40px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

  .title {
    font-size: 1.25rem;
    width: 30%;
    color: #606266;
    border-bottom: 1px solid #606266;
    margin-bottom: 20px;
  }

  .music {
    .line {
      display: flex;
      justify-content: space-between;
    }

    .item {
      width: 225px;
      font-size: 1rem;
      color: #303133;
    }

    .item2 {
      margin-top: 20px;
      font-size: 1rem;
      color: #303133;
    }
  }

  .apply-btn {
    width: 150px;
    line-height: 36px;
    text-align: center;
    margin: 25px (225 - 150)px 0 auto;
    background-color: #F53C3C;
    color: #dedede;
    border-radius: 10px;
    cursor: pointer;
    noselect();

    &:hover {
      background-color: #dedede;
      color: #F53C3C;
    }
  }
}

.dialog-cnt {
  // margin-left: 15px;
  .box {
    .title {
      width: 120px;
      border-bottom: 1px solid #d0d0d0;
      color: #d0d0d0;
      margin-bottom: 8px;
    }

    .line {
      display: flex;
      justify-content: space-between;
    }

    .const-item {
      width: 180px;
      margin-right: 10px;
      margin-bottom: 10px;
    }

    .item {
      // width: 180px;
      margin-right: 10px;
      margin-bottom: 10px;
    }

    .input-value {
      width: 180px;
    }

    .payway-box {
      display: flex;
      justify-content: center;

      .payway {
        cursor: pointer;
        width: 120px;
        line-height: 40px;
        text-align: center;
        border: 1px solid #d0d0d0;
        margin: 20px 10px 0;
        border-radius: 5px;
      }
    }
  }

  .dialog-footer {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
