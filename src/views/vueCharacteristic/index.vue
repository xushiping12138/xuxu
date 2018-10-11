<template>
  <div class="app-container">
    <h2>vue 2.4.0 新增特性</h2>
    <p>1.  :属性.sync可以代替props,子组件传值给父组件，并且可以在父组件更改属性值</p>
    <p class="marginT20">{{show}}</p>
    <SyncBtn :show.sync="show">
    </SyncBtn>
    <p class="marginT20">2.   interitAttrs -- 设置 interitAttrs 为 false，之后，不会应用到根元素上。设置为true，会应用到根元素上，并渲染。</p>
    <p class="marginT20">3.   $attrs -- 属性可以组件跨级传递属性，比如爷爷传给孙子</p>
    <p class="marginT20">4.   $listeners -- 事件可以组件跨级传递触发，比如孙子触发爷爷的事件</p>
    <hr/>
    <child-com :foo="foo":boo="boo":coo="coo":doo="doo" v-on:test="test" v-on:test2="test2"></child-com>
  </div>
</template>
<script>
const SyncBtn = () => import('./sync').then(m => m.default)
// 组件的异步写法
const childCom = () => import('./childCom1.vue').then(m => m.default)
export default {
  name: 'characteristic',
  data() {
    return {
      show: '父组件',
      foo: 'Hello World!',
      boo: 'Hello Javascript!',
      coo: 'Hello Vue',
      doo: 'Last'
    }
  },
  components: {
    SyncBtn,
    childCom
  },
  methods: {
    test() {
      console.log('test事件触发')
    },
    test2() {
      console.log('test2事件触发')
    }
  }

}
</script>
<style lang="scss" scoped>
.marginT20{
  margin-top: 20px;
}
</style>
