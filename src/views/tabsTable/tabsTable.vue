<template>
  <div class="app-container theme2">
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane :label="item.label" :name="'first'+index" v-for="(item,index) in panes" :key="index">
        <div class="el-tab-pane-box theme1" :style="'height:'+height+'px;'">
          <el-table v-loading="loading" :data="item.tableData" style="width: 100%" height="100%" stripe :row-class-name="tableRowClassName" :header-row-class-name="tableHeaderClassName" highlight-current-row border tooltip-effect="dark">
            <el-table-column :prop="items.prop" :label="items.label" show-overflow-tooltip v-for="(items,indexs) in item.columns" :key="indexs" :min-width="items.width">
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
  
<script>
  
export default {
  
    name: 'tabsTable',
    data() {
      return {
        activeName: 'first0',
        loading: false
      }
    },
    props: {
      panes: {
        type: Array,
        default: () => ([])
      },
      height: {
        type: Number,
        default: 300
      },
      /* tableData: {
        type: Array,
        default: () => ([])
      }, // 表格数据
      columns: {
        type: Array,
        default: () => ([])
      }, // 表头prop，label，width
      */
      funcProps: {
        type: Object,
        default: () => ({})
      }, // 其他组件传给组件的的参数，供组件事件执行时调用
      func: Function // 点击事件，点击或其他方式触发时执行
    },
    methods: {
      handleClick(item) {
        this.$emit('tab-click', item, this.func({
          funcProps: {
            tabTable: this
          }
        }))
      },
      tableRowClassName({ row, rowIndex }) {
      },
      tableHeaderClassName() {
        return 'table-header'
      }
    }
}
</script>
  
<style lang="scss" scoped>
</style>