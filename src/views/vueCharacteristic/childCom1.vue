<template>
  <div>
    <p>foo: {{ foo }}</p>
    <p>attrs: {{ $attrs }}</p>
    <hr>
    <child-com2 v-bind="$attrs" v-on="$listeners"></child-com2>
  </div>
</template>
<script>
// 组件的异步写法
const childCom2 = () => import('./childCom2.vue').then(m => m.default)
export default {
  components: {
    childCom2
  },
  props: ['foo'], // foo作为props属性绑定
  inheritAttrs: false,
  created() {
    console.log('childCom1', this.$attrs) // { boo: 'Hello Javascript!', coo: 'Hello Vue', doo: 'Last' }
  }
}
</script>