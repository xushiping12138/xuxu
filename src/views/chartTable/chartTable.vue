<template>
  <div class="chartTables">
    <div class="chart-box">
      <chart id="chartBox" height='100%' width='100%' :option="option"></chart>
    </div>
    <div class="bottom-table theme1">
      <el-table :data="tableData" ref="singleTable" style="width: 100%" height="100%" stripe :row-class-name="tableRowClassName" :header-row-class-name="tableHeaderClassName" highlight-current-row border tooltip-effect="dark">
        <el-table-column :prop="item.prop" :label="item.label" show-overflow-tooltip v-for="(item,index) in columns" :key="index" :min-width="item.width">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
  
<script>
import Chart from '@/components/Charts'

export default {
  name: 'chartTable',
  components: {
    Chart
  },
  props: {
    title: {
      type: String,
      default: ''
    }, // 图表名字
    prop: {
      type: String,
      default: ''
    }, // 图表跟表格联动的公用属性
    options: {
      type: Object,
      default: () => ({})
    }, // 外部传入的图表配置legend，xAxis，yAxis，series
    tableData: {
      type: Array,
      default: () => ([])
    }, // 表格数据
    columns: {
      type: Array,
      default: () => ([])
    } // 表头prop，label，width
  },
  data() {
    return {

    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
    },
    tableHeaderClassName() {
      return 'table-header'
    },
    setCurrent(i, prop) {
      let ind = 0
      this.$refs.singleTable.data.forEach((value, index) => {
        if (value[prop] === i) {
          ind = index
        }
      })
      this.$refs.singleTable.setCurrentRow(this.$refs.singleTable.data[ind])
      const targetTop = this.$refs.singleTable.$el.querySelectorAll('.el-table__body tr')[ind].getBoundingClientRect().top
      const containerTop = this.$refs.singleTable.$el.querySelector('.el-table__body').getBoundingClientRect().top
      const scrollParent = this.$refs.singleTable.$el.querySelector('.el-table__body-wrapper')
      scrollParent.scrollTop = targetTop - containerTop
    }
  },
  computed: {
    option() {
      const obj = Object.assign({}, this.options)
      const defaultObj = {
        title: {
          text: this.title,
          x: 'center',
          textStyle: {

          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          },
          formatter: (params, ticket, callback) => {
            this.setCurrent(params[0].data[0], this.prop)
            let str = `<b>${params[0].axisValue}<b><br>`

            for (let i = 0; i < params.length; i++) {
              str += `<span style="color:${params[i].color};">${params[i].seriesName}:${params[i].data[1]}</span><br>`
            }
            return str
          }
        }
      }
      return Object.assign({}, obj, defaultObj)
    }
  }
}
</script>
  
<style lang="scss" scoped>
.chartTables {
  width: 100%;
  height: 100%;
  padding: 10px;
}
.chart-box {
  width: 100%;
  height: calc(60% - 10px);
  margin-bottom: 10px;
  border: 1px solid rgb(32, 69, 176);
}
.bottom-table {
  width: 100%;
  height: 40%;
  margin-bottom: 10px;
  border: 1px solid rgb(32, 69, 176);
}
</style>