<template>
  <div class="table-cnt">
    <el-table :data="tableData" style="width:100%" border>
      <el-table-column label="编号" type="index" :index="indexMethod" width="50"></el-table-column>
      <el-table-column label="作品名称" width="200" prop="mname"></el-table-column>
      <el-table-column label="作者" width="80" prop="author"></el-table-column>
      <el-table-column label="录制时间" width="120" prop="record"></el-table-column>
      <el-table-column label="登记时间" width="120" prop="publish"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleDetail(scope.$index, scope.row)">详情</el-button>
          <el-button size="mini" @click="handleTransfer(scope.$index, scope.row)">转让</el-button>
          <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">注销</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="音乐详情" :visible.sync="detailVisible" width="645px" append-to-body>
      <music-detail :detail="detail"></music-detail>
    </el-dialog>

    <el-dialog title="音乐转让" :visible.sync="transferVisible" width="645px" append-to-body>
      <music-detail :detail="detail"></music-detail>
      <div class="title">转让版权人信息</div>
      <div class="item">
        <span class="label">公钥：</span>
        <el-input class="value" v-model="transferAddress" placeholder="请输入对方地址"></el-input>
      </div>
      <div class="t-btn">
        <el-button plain type="primary" @click="sureTransfer">确认转让</el-button>
      </div>
    </el-dialog>

    <el-dialog title="音乐注销" :visible.sync="deleteVisible" width="645px" append-to-body>
      <music-detail :detail="detail"></music-detail>
      <div class="t-btn">
        <el-button plain type="danger" @click="sureDelete">确认注销</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import MusicDetail from './MusicDetail.vue'
export default {
  components: {
    'music-detail': MusicDetail
  },
  data() {
    return {
      detailVisible: false,
      transferVisible: false,
      deleteVisible: false,
      tableData: [
        {
          mname: '王小虎',
          author: 'XXX',
          record: '2018-09-09',
          publish: '2018-09-09'
        },
        {
          mname: '王小虎',
          author: 'XXX',
          record: '2018-09-09',
          publish: '2018-09-09'
        },
        {
          mname: '王小虎',
          author: 'XXX',
          record: '2018-09-09',
          publish: '2018-09-09'
        }
      ],
      detail: {
        mname: 'XXX ',
        recordTime: 'aaaASAS',
        publishTime: 'AAAA',
        author: 'SAAAA',
        ownerName: 'AAAA',
        id: 'AAAA',
        location: 'AAAA',
        phone: 'AAA',
        email: 'AAA'
      },
      transferAddress: ''
    }
  },

  methods: {
    handleDetail(index, row) {
      // to do
      console.log(index, row)
      this.detailVisible = true
    },
    handleTransfer(index, row) {
      // to do
      console.log(index, row)
      this.transferVisible = true
    },
    handleDelete(index, row) {
      // to do
      console.log(index, row)
      this.deleteVisible = true
    },
    indexMethod(idx) {
      return idx + 1
    }
  }
}
</script>

<style lang="stylus" scoped>
.table-cnt {
  width: 800px;
  margin: 50px auto;
}

.title {
  width: 200px;
  color: #bababa;
  border-bottom: 1px solid #bababa;
}

.item {
  margin-top: 10px;

  .label {
    width: 100px;
  }

  .value {
    width: 400px;
  }
}

.t-btn {
  text-align: center;
  margin-top: 20px;
}
</style>
