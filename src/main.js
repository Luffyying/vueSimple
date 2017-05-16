/*应用入口文件，可以在这里干什么：
配置路由vue-router
引入路由子组件
引入状态管理store(注入所有子组件) vuex:状态管理库 用于管理组件的公共状态，一般大型项目会用到
应用于动态申请数据
实例化Vue
引入公共样式等
*/
import Vue from 'vue'
//引入路由及相应组件
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);//应用于动态申请数据

//创建一个路由器实例，且配置路由规则
// const router = new VueRouter({
// 	mode:'history',
// 	base:__dirname,
// 	routes:[
// 		{
// 			path:'/',
// 			component:Home
// 		},
// 		{
// 			path:'/first',
// 			component:First
// 		},
// 		{
// 			path:'/second',
// 			component:secondComponent
// 		}
// 	]
// });
new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
