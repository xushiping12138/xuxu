<template>
  <div class="app-container">
    <el-button type="primay" @click="handleClick" style="margin-bottom:10px;">点击切换tabs</el-button>
    <my-tabs :height="height" :panes="panes" :active="active" @tab-click="tabClick">
      <div slot="pane" slot-scope="{data}" style="height:100%">
        <component :is="currentComponent[data]"></component>
      </div>
    </my-tabs>
  </div>
</template>
  
<script>
import One from './compoents/demo01'
import Two from './compoents/demo02'
import Three from './compoents/demo03'
import Four from './compoents/demo04'
import MyTabs from './myTabs'
export default {
  name: 'demo',
  components: {
    MyTabs,
    One,
    Two,
    Three,
    Four
  },
  data() {
    return {
      panes: [
        { label: '数据列表' },
        { label: '基础信息' },
        { label: '维护记录' },
        { label: '巡查记录' },
        { label: '生命周期' },
        { label: '附件' }
      ], // 传入tabs的名字
      active: 0, // 外部操作控制显示tabs的当前项，对应tabs的index
      height: 300, // tabs内容的高度,
      currentComponent: {
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four'
      } // 当前tab页现实的组件，组件名对应tab窗口1,2,3。。。

    }
  },
  methods: {
    // 点击tab切换事件
    tabClick(item) {
      console.log(item)
    },
    handleClick() {
      this.active = this.randomNum(0, 5)
    },
    // 获取指定范围的随机整数
    randomNum(minNum, maxNum) {
      switch (arguments.length) {
        case 1:
          return parseInt(Math.random() * minNum + 1, 10)
        case 2:
          return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
        default:
          return 0
      }
    }
  }
}
</script>
  
<style lang="scss" scoped>
</style>