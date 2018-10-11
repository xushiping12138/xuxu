import Clickoutside from './clickoutside'

const install = function(Vue) {
  Vue.directive('Clickoutside', Clickoutside)
}

if (window.Vue) {
  window.Clickoutside = Clickoutside
  Vue.use(install); // eslint-disable-line
}

Clickoutside.install = install
export default Clickoutside
/*
用法
1.先引用，注册指令
import Clickoutside from '@/pages/dma/directives'
export default {
  directives: { Clickoutside },
}
2.v-clickoutside 在A上绑定指令，点击当前元素外部触发
<div style="width:700px;height:700px;border:solid;" >
  <div style="width:300px;height:300px;background:red;margin:20px;" v-clickoutside="handleClose">A</div>
</div>

3.用法升级（点击A和B的外部才触发，点击A和B不触发）在A和B上添加相同类，在父级元素绑定指令，并加上相同类
<div style="width:700px;height:700px;border:solid;" v-clickoutside:exactAreaClassName="handleClose">
  <div style="width:300px;height:300px;background:red;margin:20px;" class="exactAreaClassName">A</div>
  <div style="width:300px;height:300px;background:red;margin:20px;" class="exactAreaClassName">B</div>
</div>
*/
