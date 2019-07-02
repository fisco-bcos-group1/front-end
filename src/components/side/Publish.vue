<template>
  <div class="publish-cnt">
    <div class="box upload-box">
      <div class="title">上传音乐</div>
    </div>
    <div class="box music-box">
      <div class="title">登记信息</div>
      <div class="value-box">
        <div class="value-line">
          <div class="value-item">
            <span>作品名称：</span>
            <el-input class="myinput" v-model="form.music_name"></el-input>
          </div>
          <div class="value-item">
            <span>作品种类：</span>
            <el-input class="myinput" v-model="form.music_kind"></el-input>
          </div>
        </div>
        <div class="value-item">
          <span>录制时间：</span>
          <el-date-picker
            style="width: 300px"
            v-model="form.record_time"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </div>
        <div class="value-item">
          <span>首句歌词：</span>
          <el-input class="myinput" v-model="form.lyric" style="width: 600px"></el-input>
        </div>
      </div>
    </div>
    <div class="box author-box">
      <div class="title">作者信息</div>
    </div>
    <div class="box owner-box">
      <div class="title">版权人信息</div>
    </div>
    <div class="btn-box"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        music_name: '',
        music_kind: '',
        record_time: '',
        lyric: '',
        author_ci: '',
        author_qu: '',
        author_si: '',
        owner_name: '',
        owner_id: '',
        owner_addr: '',
        owner_phone: '',
        owner_email: ''
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.publish-cnt {
  width: 950px;
  border: 1px solid #e9e9e9;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 40px auto;
  padding: 10px 20px;

  .box {
    margin: 10px 0;

    .title {
      width: 200px;
      color: #a9a9a9;
      border-bottom: 1px solid #a9a9a9;
    }

    .value-line {
      display: flex;
      justify-content: space-between;
    }

    .myinput {
      font-size: 1.125rem;
      width: 300px;
    }
  }
}
</style>
