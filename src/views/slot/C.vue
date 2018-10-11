<template>
  <div>
    C这是子组件
    <div>
      <slot name="pane">我是c组件,外部没传值我才显示</slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'C'

}
</script>