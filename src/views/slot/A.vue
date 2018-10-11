<template>
  <div>
    A组件
    <div>
      <Bi>
        <span slot="pane">
          我是外部组件
        </span>
      </Bi>
    </div>
  </div>
</template>
<script>
import Bi from './B'
export default {
  name: 'Ai',
  components: {
    Bi
  }
}
</script>