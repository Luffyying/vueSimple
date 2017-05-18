1.webpack2.0之后就不支持loader简写了。

当报错的时候，有时需要重新运行一下，npm run dev

2.对于一个小型demo项目来说，组件的运用注意的两点（作为参考）：

（1）结构级别

可以在App.vue中布局主页，其实App.vue就是一个最父级的组件，其他模块都是嵌套在它里面。你可以通过vue-router来控制页面的变化和加载。

（2）数据级别
.....后续完善

3.路由及子路由的配置全部都在main.js中进行 ，且<router-link>对应于<router-view>

4.$dispatch ,$broadcast已经从vue2.0中移除,可以使用 $emit, $on, $off 分别来分发、监听、取消监听事件,举个项目中的栗子：

在父组件中:App.vue

	 <nav class="navbar navbar-default">
      <div class="container">
        <a href="#" class="navbar-brand">
          <i class="glyphicon glyphicon-time"></i>计划板
        </a>
        <ul class="nav navbar-nav">
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/time-entries">计划列表</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
        <sidebar :time="totalTime"></sidebar>
      </div>
      <div class="col-sm-9">
        <router-view v-on:deleteTime="deleteTime" v-on:timeUpdate="timeUpdate"></router-view>
      </div>
    </div>
    methods:{
		deleteTime(a){

		},
		timeUpdate(b){}
	}



在子组件中：

	<div class="col-sm-1">
		<button class="btn btn-xs btn-danger delete-button" @click="deleteTimeEntry(timeEntry)">X
				</button>
	</div>
	methods:{
		deleteTimeEntry(timeEntry){
			let index = this.timeEntries.indexOf(timeEntry);
			if(window.confirm('are you sure to delete?')){
				this.timeEntries.splice(index,1);
				this.$emit('deleteTime',timeEntry);
			}
		},
			
		timeUpdate(timeEntry){
			this.timeEntries.push(timeEntry);
			this.$emit('timeUpdate',timeEntry);
		}
			
	}

子组件中通过$emit方法，执行父组件中的方法，同时进行数据一类的更新，这样，就实现了父组件和子组件之间数据的传递。



