<template>
  <div>
      <button class="pan-btn blue-btn" @click="add()">点击子组件</button>
      <button class="pan-btn blue-btn" @click="rest()">复原</button>
  </div>
</template>
  
<script>
  
export default {
    name: 'sync',
    data() {
      return {
  
      }
    },
    methods: {
      add() {
        this.$emit('update:show', '子组件传值')
      },
      rest() {
        this.$emit('update:show', '父组件')
      }
    }
}
</script>
  
<style lang="scss" scoped>
  
</style>