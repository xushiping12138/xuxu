<template>
  <div class="app-container">
    slot
    <ai></ai>
  </div>
</template>
<script>
import Ai from './A'
export default {
  name: 'INDEX',
  components: {
    Ai
  }

}
</script>