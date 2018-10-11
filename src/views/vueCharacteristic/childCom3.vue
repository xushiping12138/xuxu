<template>
  <div>
    <p>coo: {{ coo }}</p>
    <p>attrs: {{ $attrs }}</p>
  </div>
</template>
<script>
export default {
  props: ['coo'], // foo作为props属性绑定
  inheritAttrs: false,
  created() {
    console.log('childCom3', this.$attrs) // { coo: 'Hello Vue', doo: 'Last' }
    this.$emit('test2')
  }
}
</script>