<template>
  <div>
   <p>boo: {{ boo }}</p>
   <p>attrs: {{ $attrs }}</p>
   <hr>
   <child-com3 v-bind="$attrs" v-on="$listeners"></child-com3>
  </div>
</template>

<script>
const childCom3 = () => import('./childCom3.vue').then(m => m.default)
// 组件的异步写法
export default {
  components: {
    childCom3
  },
  props: ['boo'], // boo作为props属性绑定
  inheritAttrs: false,
  created() {
    console.log('childCom2', this.$attrs) // { coo: 'Hello Vue', doo: 'Last' }
    this.$emit('test')
  }

}
</script>