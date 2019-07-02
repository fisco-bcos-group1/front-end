<template>
  <div class="order-cnt">
    <div class="order-box" v-for="(order,idx) in orderList" :key="idx">
      <div class="head">
        <div class="item item1">
          <span class="label">作品名称：</span>
          <span class="value">{{order.name}}</span>
        </div>
        <div class="item item2">
          <span class="label">录制时间：</span>
          <span class="value">{{order.record_time}}</span>
        </div>
        <div class="item item3">
          <span class="label">订单时间：</span>
          <span class="value">{{order.order_time}}</span>
        </div>
      </div>
      <div class="main">
        <div class="line">
          <div class="item item1">
            <span class="label">词作者：</span>
            <span class="value">{{order.author_ci}}</span>
          </div>
          <div class="item item2">
            <span class="label">曲作者：</span>
            <span class="value">{{order.author_qu}}</span>
          </div>
          <div class="item item3">
            <span class="label">演唱者：</span>
            <span class="value">{{order.author_si}}</span>
          </div>
        </div>
        <div class="line">
          <div class="item item1">
            <span class="label">是否授权：</span>
            <span class="value">{{order.auth_str}}</span>
          </div>
          <div class="item item2">
            <span class="label">价格：</span>
            <span class="value">{{order.price}}</span>
          </div>
          <div class="item item3">
            <div :class="order.is_auth ? 'certify' : 'certify-disable' ">电子授权证明</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var testList = [
  {
    name: '这是一个作品名称',
    author_ci: '这是词作者',
    author_qu: '这是曲作者',
    author_si: '这是演唱者',
    is_auth: true,
    auth_str: '是',
    price: 1000,
    order_time: '2019-09-09 13:00',
    record_time: '2018-09-09 13:00'
  },
  {
    name: '这是一个作品名称',
    author_ci: '这是词作者',
    author_qu: '这是曲作者',
    author_si: '这是演唱者',
    is_auth: false,
    auth_str: '否',
    price: 1000,
    order_time: '2019-09-09 13:00',
    record_time: '2018-09-09 11:00'
  }
]

export default {
  data() {
    return {
      orderList: testList
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/default';

.order-box {
  width: 800px;
  margin: 60px auto;
  border: 1px solid #e9e9e9;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  .head, .line {
    display: flex;
    justify-content: space-between;
  }

  .head {
    padding: 25px 20px 20px 20px;
    border-bottom: 1px solid #dedede;
  }

  .main {
    padding: 10px 20px 20px 20px;
  }

  .line {
    line-height: 40px;
    margin-top: 10px;
  }

  .item {
    .label {
      color: #a0a0a0;
    }

    .value {
      color: #303133;
    }
  }

  .item1 {
    width: 300px;
  }

  .item2 {
    width: 240px;
  }

  .item3 {
    width: 220px;
  }

  .certify {
    cursor: pointer;
    width: 150px;
    border: 1px solid _color_default;
    color: _color_default;
    text-align: center;
    border-radius: 10px;
    noselect();

    &:hover {
      background-color: _color_default;
      color: #fff;
    }
  }

  .certify-disable {
    cursor: not-allowed;
    width: 150px;
    border: 1px solid #d0d0d0;
    color: #d0d0d0;
    text-align: center;
    border-radius: 10px;
    noselect();
  }
}
</style>
