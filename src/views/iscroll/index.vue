<template>
  <div class="app-container">
    <div id="wrapper" ref="wrapper">
    <div id="scroller">
      <ul>
        <li class="row">Pretty row 1</li>
        <li class="row">Pretty row 2</li>
        <li class="row">Pretty row 3</li>
        <li class="row">Pretty row 4</li>
        <li class="row">Pretty row 5</li>
        <li class="row">Pretty row 6</li>
        <li class="row">Pretty row 7</li>
        <li class="row">Pretty row 8</li>
        <li class="row">Pretty row 9</li>
        <li class="row">Pretty row 10</li>
        <li class="row">Pretty row 11</li>
        <li class="row">Pretty row 12</li>
        <li class="row">Pretty row 13</li>
        <li class="row">Pretty row 14</li>
        <li class="row">Pretty row 15</li>
        <li class="row">Pretty row 16</li>
        <li class="row">Pretty row 17</li>
        <li class="row">Pretty row 18</li>
        <li class="row">Pretty row 19</li>
        <li class="row">Pretty row 20</li>
      </ul>
    </div>
</div> 
  </div>
</template>
  
<script>
import Iscroll from 'iscroll'
export default{
  name: '',
  data() {
    return {
      iscroll: null
    }
  },
  methods: {
    iscrollConf(iscroll) {
      console.log('iscroll')
    },
    initScroll() {
      this.iscroll = new Iscroll(this.$refs.wrapper, {
        scrollbars: true,
        mouseWheel: true,
        infiniteElements: '#scroller .row',
        dataset: this.requestData,
        dataFiller: this.updateContent,
        cacheSize: 1000
      })
    },
    requestData(start, count) {
      console.log('start', start, 'count', count)
      const data = this.getAjax(count)
      this.iscroll.updateContent(start, data)
    },
    updateContent(el, data) {
      el.innerHTML = data
    },
    getAjax(count) {
      let data = 1
      for (let i = 0; i < 100; i++) {
        data += count
      }
      return data
    }
  },
  mounted() {
    this.initScroll()
  }
}
</script>
  
<style lang="scss" scoped>
.app-container{
  position: relative;
}
#wrapper {
	position: absolute;
	z-index: 1;
	top: 45px;
	bottom: 48px;
	left: 0;
	width: 100%;
	background: #ccc;
	overflow: hidden;
}

#scroller {
	position: absolute;
	z-index: 1;
	-webkit-tap-highlight-color: rgba(0,0,0,0);
	width: 100%;
	-webkit-transform: translateZ(0);
	-moz-transform: translateZ(0);
	-ms-transform: translateZ(0);
	-o-transform: translateZ(0);
	transform: translateZ(0);
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	-webkit-text-size-adjust: none;
	-moz-text-size-adjust: none;
	-ms-text-size-adjust: none;
	-o-text-size-adjust: none;
	text-size-adjust: none;
}

#scroller ul {
	list-style: none;
	padding: 0;
	margin: 0;
	width: 100%;
	text-align: left;
}

#scroller li {
	padding: 0 10px;
	height: 40px;
	line-height: 40px;
	border-bottom: 1px solid #ccc;
	border-top: 1px solid #fff;
	background-color: #fafafa;
	font-size: 14px;
}
</style>