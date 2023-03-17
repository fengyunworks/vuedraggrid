import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUI);
Vue.directive('title', {//单个修改标题
  inserted: function (el, binding) {
    document.title = 'VITE+VUE2+可拖拽部件布局'
  }
})
new Vue({
  el: '#app',
  render: h => h(App)
})
