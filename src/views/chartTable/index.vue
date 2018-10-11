<template>
  <div class="app-container" id="auto-box">
    <chart-table :options="options" :tableData="tableData" :columns="columns" :title="title" :prop="prop"></chart-table>
  </div>
</template>
  
<script>
import { debounce } from '@/utils'
import ResizeSensor from 'css-element-queries/src/ResizeSensor'
import ChartTable from './chartTable'
export default {
  name: 'demo',
  components: {
    ChartTable
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      title: '产销差',
      options: {},
      prop: 'nowReadTime',
      tableData: [
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
        }
      ],
      columns: [
        { prop: 'readMonth', label: '月份', width: '200' },
        { prop: 'nowReadTime', label: '抄收日期', width: '200' },
        { prop: 'totalDay', label: '统计天数', width: '200' },
        { prop: 'monthSale', label: '月售水量(m³)', width: '200' },
        { prop: 'flux', label: '同期供水量', width: '200' },
        { prop: 'distributionFlux', label: '产销差水量', width: '200' },
        { prop: 'lastRate', label: '对比上月(%)', width: '200' },
        { prop: 'distributionRate', label: '产销差率(%)', width: '200' }
      ],
      chartData: {
        'monthSale': {
          'name': '同期供水量',
          'data': [
            [
              '2018-06-30',
              286.1938
            ],
            [
              '2018-07-31',
              11.3212
            ]
          ]
        },
        'distributionRate': {
          'name': '产销差率',
          'data': [
            [
              '2018-06-30',
              96.22
            ],
            [
              '2018-07-31',
              99.85
            ]
          ]
        },
        'flux': {
          'name': '售水量',
          'data': [
            [
              '2018-06-30',
              7574.0000
            ],
            [
              '2018-07-31',
              7388.0000
            ]
          ]
        }
      }

    }
  },
  methods: {
    getOption() {
      this.options = {
        legend: {
          bottom: '1%',
          data: [this.chartData.monthSale.name, this.chartData.flux.name, this.chartData.distributionRate.name]
        },
        xAxis: [
          {
            type: 'category',
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: this.chartData.monthSale.name + '(m³)'
          },
          {
            type: 'value',
            name: this.chartData.flux.name + '(m³)'
          }
        ],
        series: [
          {
            type: 'bar',
            name: this.chartData.monthSale.name,
            data: this.chartData.monthSale.data,
            color: '#C03639'
          },
          {
            type: 'bar',
            name: this.chartData.flux.name,
            data: this.chartData.flux.data,
            color: '#FEC171'
          },
          {
            type: 'line',
            name: this.chartData.distributionRate.name,
            data: this.chartData.distributionRate.data,
            smooth: true,
            color: '#6d5cae',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            yAxisIndex: 1
          }
        ]
      }
    }
  },
  mounted() {
    this.getOption()
    new ResizeSensor(document.querySelector('#auto-box'), debounce(() => {
      const myChart = this.$echarts.init(document.getElementById('chartBox'))
      myChart.resize()
    }, 100))
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch('getDataNode', this.data)
    next()
  },
  watch: {
    data() {
      console.log('data', this.data)
    }
  }

}
</script>
  
<style lang="scss" scoped>
</style>