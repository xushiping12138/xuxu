<template>
  <div class="app-container" id="auto-box">
    <div class="linechart">
      <chart id="linechart" height='100%' width='100%' :option="option"></chart>
    </div>
  </div>
</template>
  
<script>
import Chart from '@/components/Charts'
import { debounce } from '@/utils'
import ResizeSensor from 'css-element-queries/src/ResizeSensor'
export default {
  name: '',

  components: {
    Chart
  },

  data() {
    return {
      option: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }]
      }

    }
  },

  created() {

  },

  mounted() {
    new ResizeSensor(document.querySelector('#auto-box'), debounce(() => {
      const myChart = this.$echarts.init(document.getElementById('linechart'))
      myChart.resize()
    }, 100))
  },

  methods: {

  },

  computed: {

  }

}
</script>
  
<style lang="scss" scoped>
.linechart {
  width: 100%;
  height: 100%;
}
</style>