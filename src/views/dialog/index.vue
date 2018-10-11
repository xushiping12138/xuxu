<template>
  <div class="app-container">
    <button class="pan-btn yellow-btn" @click="OpenDialogVisible">点击打开 Dialog</button>
    <dialog-theme :height="height" :panes="panes" @tab-click="tabClick" :show.sync="show">
      <div slot="pane" slot-scope="{data}">
        <component :is="currentComponent[data]"></component>
      </div>
    </dialog-theme>
  </div>
</template>
  
<script>
import One from './compoents/demo01'
import Two from './compoents/demo02'
import Three from './compoents/demo03'
import Four from './compoents/demo04'
import DialogTheme from './dialog'
export default {
  name: 'dialogUse',
  components: {
    DialogTheme,
    One,
    Two,
    Three,
    Four
  },
  data() {
    return {
      panes: [
        { label: '用户管理' },
        { label: '配置管理' },
        { label: '角色管理' },
        { label: '定时任务补偿' }
      ], // 传入tabs的名字
      height: 300, // 弹框高度
      show: false, // 弹框显示
      currentComponent: {
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four'
      } // 当前tab页现实的组件，组件名对应tab窗口1,2,3。。。
    }
  },

  created() {

  },

  mounted() {

  },

  methods: {
    OpenDialogVisible() {
      this.show = true
    },
    // 点击tab切换事件
    tabClick(item) {
      console.log(item)
    }
  }

}
</script>
  
<style lang="scss" scoped>
</style>