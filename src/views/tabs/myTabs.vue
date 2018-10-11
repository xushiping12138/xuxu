<template>
  <div class="theme4">
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick" ref="tabs">
      <el-tab-pane :label="item.label" :name="'first'+index" v-for="(item,index) in panes" :key="index">
        <div class="el-tab-pane-box" :style="'height:'+height+'px;'">
            <slot name="pane" :data="index+1">{{item.label}}</slot>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
  
<script>
import './elementui.scss'
export default {

  name: 'My-Tabs',
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
    active: Number,
    height: {
      type: Number,
      default: 300
    }
  },
  methods: {
    handleClick(item) {
      this.$emit('tab-click', item)
    }
  },
  watch: {
    active() {
      this.handleClick(this.$refs.tabs.panes[this.active])
      this.activeName = `first${this.active}`
    }
  }
}
</script>

<style lang="scss" scoped>
// .app-container-tabs{
//   width: 100%;
//   height: 100%;
// }
</style>