<template>
  <div class="app-container">
    <tabs-table :height="height" :panes="panes" @tab-click="tabClick" :func="tabFunc">
    </tabs-table>
  </div>
</template>
  
<script>
import TabsTable from './tabsTable'
export default {
  name: 'demo',
  components: {
    TabsTable
  },
  data() {
    return {
      panes: [
        { label: '用户管理',
          tableData: [{
            'monthSale': 286.1938,
            'lastRate': 0.0,
            'readMonth': '2018-06',
            'nowReadTime': '2018-06-30',
            'distributionRate': 96.22,
            'flux': 7574.0000,
            'distributionFlux': 7287.8062,
            'totalDay': 29
          },
          {
            'monthSale': 286.1938,
            'lastRate': 0.0,
            'readMonth': '2018-06',
            'nowReadTime': '2018-06-30',
            'distributionRate': 96.22,
            'flux': 7574.0000,
            'distributionFlux': 7287.8062,
            'totalDay': 29
          },

          {
            'monthSale': 11.3212,
            'lastRate': 88.8726,
            'readMonth': '2018-07',
            'nowReadTime': '2018-07-31',
            'distributionRate': 99.85,
            'flux': 7388.0000,
            'distributionFlux': 7376.6788,
            'totalDay': 30
          }],
          columns: [{ prop: 'readMonth', label: '月份', width: '200' },
            { prop: 'nowReadTime', label: '抄收日期', width: '200' },
            { prop: 'totalDay', label: '统计天数', width: '200' },
            { prop: 'monthSale', label: '月售水量(m³)', width: '200' },
            { prop: 'flux', label: '同期供水量', width: '200' },
            { prop: 'distributionFlux', label: '产销差水量', width: '200' },
            { prop: 'lastRate', label: '对比上月(%)', width: '200' },
            { prop: 'distributionRate', label: '产销差率(%)', width: '200' }] },
        { label: '用户管理',
          tableData: [],
          columns: [{ prop: 'readMonth', label: '月份2', width: '200' },
            { prop: 'nowReadTime', label: '抄收日期2', width: '200' },
            { prop: 'totalDay', label: '统计天数2', width: '200' },
            { prop: 'monthSale', label: '月售水量2(m³)', width: '200' },
            { prop: 'flux', label: '同期供水量2', width: '200' }
          ] },
        { label: '用户管理',
          tableData: [],
          columns: [{ prop: 'readMonth', label: '月3份', width: '200' },

            { prop: 'monthSale', label: '月售水量3(m³)', width: '200' },
            { prop: 'flux', label: '同期供水量3', width: '200' },
            { prop: 'distributionFlux', label: '产销差水量3', width: '200' },
            { prop: 'lastRate', label: '对比上月3(%)', width: '200' },
            { prop: 'distributionRate', label: '产销差率3(%)', width: '200' }] },
        { label: '定时任务补偿',
          tableData: [],
          columns: [{ prop: 'readMonth', label: '月份44', width: '200' },
            { prop: 'nowReadTime', label: '抄收日期4', width: '200' },
            { prop: 'totalDay', label: '统计天数4', width: '200' },
            { prop: 'monthSale', label: '月售水量4(m³)', width: '200' },
            { prop: 'flux', label: '同期供水量4', width: '200' },
            { prop: 'distributionFlux', label: '产销差水量4', width: '200' },
            { prop: 'lastRate', label: '对比上月4(%)', width: '200' },
            { prop: 'distributionRate', label: '产销差率4(%)', width: '200' }] }
      ], // 传入tabs的名字
      height: 300 // 弹框高度,
    }
  },
  methods: {
    // 点击tab切换事件
    tabClick(item) {
      console.log(item)
    },
    tabFunc({ funcProps }) {
      const res = [
        [{
          'monthSale': 286.1938,
          'lastRate': 0.0,
          'readMonth': '2018-06',
          'nowReadTime': '2018-06-30',
          'distributionRate': 96.22,
          'flux': 7574.0000,
          'distributionFlux': 7287.8062,
          'totalDay': 29
        },
        {
          'monthSale': 11.3212,
          'lastRate': 88.8726,
          'readMonth': '2018-07',
          'nowReadTime': '2018-07-31',
          'distributionRate': 99.85,
          'flux': 7388.0000,
          'distributionFlux': 7376.6788,
          'totalDay': 30
        }],
        [{
          'monthSale': 286.1938,
          'lastRate': 0.0,
          'readMonth': '2018-06',
          'nowReadTime': '2018-06-30',
          'distributionRate': 96.22,
          'flux': 7574.0000,
          'distributionFlux': 7287.8062,
          'totalDay': 29
        },
        {
          'monthSale': 11.3212,
          'lastRate': 88.8726,
          'readMonth': '2018-07',
          'nowReadTime': '2018-07-31',
          'distributionRate': 99.85,
          'flux': 7388.0000,
          'distributionFlux': 7376.6788,
          'totalDay': 30
        }],
        [{
          'monthSale': 286.1938,
          'lastRate': 0.0,
          'readMonth': '2018-06',
          'nowReadTime': '2018-06-30',
          'distributionRate': 96.22,
          'flux': 7574.0000,
          'distributionFlux': 7287.8062,
          'totalDay': 29
        },
        {
          'monthSale': 11.3212,
          'lastRate': 88.8726,
          'readMonth': '2018-07',
          'nowReadTime': '2018-07-31',
          'distributionRate': 99.85,
          'flux': 7388.0000,
          'distributionFlux': 7376.6788,
          'totalDay': 30
        }],
        [{
          'monthSale': 286.1938,
          'lastRate': 0.0,
          'readMonth': '2018-06',
          'nowReadTime': '2018-06-30',
          'distributionRate': 96.22,
          'flux': 7574.0000,
          'distributionFlux': 7287.8062,
          'totalDay': 29
        },
        {
          'monthSale': 11.3212,
          'lastRate': 88.8726,
          'readMonth': '2018-07',
          'nowReadTime': '2018-07-31',
          'distributionRate': 99.85,
          'flux': 7388.0000,
          'distributionFlux': 7376.6788,
          'totalDay': 30
        }]
      ]// 模拟数据请求
      // console.log('funcProps', funcProps)
      funcProps.tabTable.loading = true
      const index = funcProps.tabTable.activeName.split('first')[1]
      funcProps.tabTable.panes[index].tableData = res[index]
      setTimeout(() => {
        funcProps.tabTable.loading = false
      }, 500)
    }
  }
}
</script>
  
<style lang="scss" scoped>
</style>