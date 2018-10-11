<template>
<el-scrollbar style="height:100%;">
  <div class="app-container"> 
    <ul class="module-box">
      <li v-waves  @click="handleClick(item)" class="module-box-sub" v-for="(item,index) in modules" :key="index"><span class="icon-box" :style="{background:item.color}"><i class="iconfont" :class="item.icon"></i></span><span class="icon-name">{{item.title}}</span></li>
    </ul>
    <div class="button-box">
      <button class="pan-btn blue-btn">蓝色</button>
      <button class="pan-btn red-btn">红色</button>
      <button class="pan-btn pink-btn">粉色</button>
    </div>    
    <div class="dropdown-menu">
      <dropdown-menu  :title="title" :arrays="arrays"></dropdown-menu>
    </div>
  </div>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import Waves from '@/directive/waves'
import DropdownMenu from '@/components/dropdownMenu'

import '@/styles/btn.scss'
export default {
  name: 'dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    DropdownMenu
  },
  directives: { Waves },
  data() {
    return {
      modules: [
        { title: '大用户', icon: 'icon-users', color: 'rgb(245, 87, 83)' },
        { title: 'DMA', icon: 'icon-DMA', color: 'rgb(16, 207, 189)' },
        { title: '分区分压', icon: 'icon-acquisitionModality', color: 'rgb(91, 77, 145)' }
      ],
      title: '排好队',
      arrays: [
        { name: '1排好队，一个一个来' },
        { name: '2排好队，一个一个来' },
        { name: '3排好队，一个一个来' },
        { name: '4排好队，一个一个来' },
        { name: '5排好队，一个一个来' },
        { name: '6排好队，一个一个来' },
        { name: '7排好队，一个一个来' },
        { name: '8排好队，一个一个来' },
        { name: '9排好队，一个一个来' },
        { name: '10排好队，一个一个来' }
      ]
    }
  },
  methods: {
    handleClick(item) {
      console.log('item', item.title)
    }
  },
  mounted() {
    this.$store.dispatch('showTree', false)
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch('showTree', true)
    next()
  },
  watch: {
    data() {
      console.log('data', this.data)
    }
  }

}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

$blue: #48b0f7;
@mixin hover{
  color: $blue;
  text-decoration: underline;
}
.dashboard {
  &-container {
    padding: 20px;
  }
}
.module-box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    &-sub {
      width: 120px;
      cursor: pointer;
      margin-right: 20px;
      margin-bottom: 20px;
      &:hover .icon-name{
        @include hover;
      }
    }
    .icon-box{
      display: inline-block;
      width: 100%;
      height: 120px;
      text-align: center;
      line-height: 120px;
      color: #fff;
      .iconfont{
        font-size: 60px;
        color:#fff;
      }
    }
    .icon-name{
      display: block;
      font-size: 14px;
      text-align: center;
      color: #000;
      padding: 10px;
    }
}
.dropdown-menu{
  width: 250px;
  height: 700px;
}
.button-box{
  width: 100%;
  height: 80px;
}
</style>
