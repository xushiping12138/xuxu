<template>
  <el-scrollbar style="height:100%;">
    <div class="app-container theme1">
      <el-row class="marginB">
        <el-col :span="6" :offset="18">
          <el-input placeholder="请输入内容" v-model="search">
            <template slot="prepend">模糊搜索</template>
          </el-input>
        </el-col>
      </el-row>
      <!-- 表格 -->
      <el-table :data="tables.slice((pageIndex-1)*pageSize,pageIndex*pageSize)" style="width: 100%" stripe :row-class-name="tableRowClassName" :header-row-class-name="tableHeaderClassName" highlight-current-row border>
        <el-table-column label="日期" min-width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px" v-html="format(scope.row.date)"></span>
          </template>
        </el-table-column>
        <el-table-column label="姓名" min-width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px" v-html="format(scope.row.name)"></span>
          </template>
        </el-table-column>
        <el-table-column label="地址" min-width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px" v-html="format(scope.row.address)"></span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageIndex" :page-sizes="[5, 10, 15, 20]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>
    </div>
  </el-scrollbar>
</template>

<script>
import moment from 'moment'
import { getList } from '@/api/table'

export default {
  name: '',

  components: {

  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      pageSize: 10, // 每页大小默认值
      pageIndex: 1, // 默认第一页
      search: '',
      tableData: [{
        date: '2016-05-02',
        name: '王仲虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王季虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王伯虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王叔虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },
      {
        date: '2016-05-01',
        name: '王伯虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王叔虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },

  mounted() {
    console.log('树节点', this.$store.state.app.dataNode)
  },

  methods: {
    fetchData() {
      getList().then(response => {
        console.log('response', response)
      })
    },
    // 前端过滤
    format(val) {
      val = val.toString()
      if (val.indexOf(this.search) !== -1 && this.search !== '') {
        return val.replace(this.search, '<font color="red">' + this.search + '</font>')
      } else {
        return val
      }
    },
    dateFormat(val) {
      return moment(val).format('YYYY-MM-DD')
    },
    handleSizeChange(val) {
      this.pageSize = val
    },
    handleCurrentChange(val) {
      this.pageIndex = val
    },
    tableRowClassName({ row, rowIndex }) {
      // if (rowIndex % 2) {
      //   return 'warning-row'
      // } else {
      //   return 'success-row'
      // }
    },
    tableHeaderClassName() {
      return 'table-header'
    },
    handleEdit(index, row) {
      console.log('编辑')
    },
    handleDelete(index, row) {
      console.log('删除')
    }
  },
  computed: {
    // 前端过滤
    tables() {
      const search = this.search
      if (search) {
        return this.tableData.filter(dataNews => {
          return Object.keys(dataNews).some(key => {
            return String(dataNews[key]).toLowerCase().indexOf(search) > -1
          })
        })
      }
      return this.tableData
    },
    // 总条数
    total() {
      return this.tables.length
    }
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch('getDataNode', this.data)
    next()
  },
  watch: {
    // 检测表格数据过滤变化，自动跳到第一页
    tables() {
      this.pageIndex = 1
    },
    // 点击组织树获取节点数据
    data() {
      console.log('data', this.data)
    }
  }
}
</script>
<style lang="scss" scoped>
.table-container {
  width: 100%;
  height: 100%;
  padding: 20px;
}
</style>


