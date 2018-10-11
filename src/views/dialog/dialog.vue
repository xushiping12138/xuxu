<template>
  <div>
    <el-dialog :visible.sync="dialogVisibles" class="theme1" @close="$emit('update:show', false)">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane :label="item.label" :name="'first'+index" v-for="(item,index) in panes" :key="index">
          <div class="el-tab-pane-box" :style="'height:'+height+'px;'">
            <slot name="pane" :data="index+1">{{item.label}}</slot>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>
  
<script>

export default {
  name: 'dialogTheme',
  components: {

  },

  props: {
    panes: {
      type: Array,
      default: () => ([])
    },
    height: {
      type: Number,
      default: 300
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeName: 'first0',
      dialogVisibles: this.show
    }
  },

  created() {

  },

  mounted() {

  },

  methods: {
    handleClick(item) {
      this.$emit('tab-click', item)
    }
  },
  watch: {
    show() {
      this.dialogVisibles = this.show
    }
  }

}
</script>