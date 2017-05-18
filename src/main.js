/*我们使用webpack为我们的模块打包，预处理，热加载，在.vue格式的文件中，浏览器是不认识其中的html ,style的，使用
webpack去解析.vue文件*/
/*应用入口文件，可以在这里干什么：
配置路由vue-router
引入路由子组件
引入状态管理store(注入所有子组件) vuex:状态管理库 用于管理组件的公共状态，一般大型项目会用到
应用于动态申请数据
实例化Vue
引入公共样式等
*/
/*关于import的事*/
/*各种Loader的作用就是将各种形式的资源都作为资源视为模块，css,sass,json等*/
import Vue from 'vue'
//引入路由及相应组件
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
import home from './component/home.vue'
import timeEntries from './component/timeEntries.vue'
import logTime from './component/logTime.vue'
// import load from '../static/bootstrap/c.scss'
// import load from '../static/bootstrap'
// require('../static/bootstrap/bootstrap.min.css');
import store from '../vuex/store'//引入vuex的store
Vue.use(VueRouter);//注册vue-router
Vue.use(VueResource);//应用于动态申请数据

//创建一个路由器实例，且配置路由规则
const router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		{
			path:'/',
			component:home
		},
		{
			path:'/home',
			component:home
		},
		{
			path:'/time-entries',
			component:timeEntries,
			children:[
				{
					//当/time-entries/log-time匹配成功的时候，logTime.vue会被渲染在timeEntries中的<router-view>中
					path:'log-time',
					component:logTime
				}
			]
		}

	]
});
new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
