<template>
  <section class="app-main flex-box" id="app-main-box-id">
    <div class="app-main-box" :class="{'app-main-box1': pin === 'pin1', 'app-main-box2': !show}" id="app-box-id">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" :data="data"></router-view>
      </keep-alive>
    </transition>
    </div>
    <div class="tree-box" :class="{'shrink': pin === 'pin1'}" v-show="show">
      <tree-select @shrink="shrink" @selectNode="selectNode" :fixed="fixed"></tree-select>
    </div>
  </section>
</template>

<script>
import TreeSelect from './TreeSelect'
import { debounce } from '@/utils'
import ResizeSensor from 'css-element-queries/src/ResizeSensor'
export default {
  name: 'AppMain',
  data() {
    return {
      pin: 'pin', // 控制站点树是否可滑动，pin固定，pin1滑动
      data: {} // 点击树节点获取数据
    }
  },
  components: {
    TreeSelect
  },
  methods: {
    shrink(state) {
      this.pin = state
    },
    selectNode(obj) {
      this.data = obj
    }
  },
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      // return this.$route.fullPath
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    },
    // 全局控制树的显示或隐藏
    show() {
      return this.$store.state.app.show
    },
    fixed() {
      return this.pin === 'pin'
    }

  },
  mounted() {
    // 监测屏幕变化，动态控制组织树的固定或滑动
    const width = document.querySelector('#app-main-box-id').clientWidth
    if (width < 1300) {
      this.pin = 'pin1'
    } else if (width >= 1300) {
      this.pin = 'pin'
    }
    new ResizeSensor(document.querySelector('#app-main-box-id'), debounce(() => {
      const width = document.querySelector('#app-main-box-id').clientWidth
      if (width < 1300) {
        this.pin = 'pin1'
      } else if (width >= 1300) {
        this.pin = 'pin'
      }
    }, 100))
  }
}
</script>


<style lang="scss" scoped>

.tree-box{
  width: 360px;
  height: calc(100% - 0px);
  background-color: #fff;
  z-index: 1000;
}
.shrink{
  box-shadow: -2px 2px 5px #504b4b;
  position: absolute;
  top: 0px;
  right: -359px;
  z-index: 1000;
  transition: right .5s ease-in-out;
  &:hover{
    right: 0px;
  }
}
.app-main-box{
  width: calc(100% - 360px);
  height: 100%;
}
.app-main-box1{
  width: 100%;
}
.app-main-box2{
  width: 100%;
}
.flex-box{
  display: flex;
  flex-direction: row;
  position: relative;
}
</style>

