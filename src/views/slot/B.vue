<template>
  <div>
    B组件
    <div>
      <ci>

        <span slot="pane">
          <slot name="pane"></slot>
        </span>
      </ci>
    </div>
  </div>
</template>
<script>
import Ci from './C'
export default {
  name: 'Bi',
  components: {
    Ci
  }
}
</script>
