<template>
	<div>
		<router-link to='/time-entries/log-time'>
			<button v-if="$route.path !=='/time-entries/log-time'" class="btn btn-primary">创建
			</button>
		</router-link>
		<div v-if="$route.path ==='/time-entries/log-time'">
			<h3>创建</h3>
		</div>
		<hr>
		<!-- 下一级视图 -->
		<router-view v-on:timeUpdate="timeUpdate"></router-view>
		<div class="time-entries">
			<p v-if="!timeEntries.length">
				<strong>还没有任何任务</strong>
			</p>
			<!-- 循环渲染 -->
			<a class="list-group-item" v-for="timeEntry in timeEntries" href="javascript:void(0)">
				<div class="row">
					<div class="col-sm-2 user-details">
						<img :src="timeEntry.user.image" class="avatar img-circle img-responsive" />
						<p class="text-center">
							<strong>
								{{timeEntry.user.name}}
							</strong>
						</p>
					</div>
					<div class="col-sm-2 text-center time-block">
						<h3 class="list-group-item-text total-time">
							<i class="glyphicon glyphicon-time">
								{{timeEntry.totalTime}}
							</i>
						</h3>
						<p class="label label-primary text-center">
							<i class="glyphicon glyphicon-calendar">
								{{timeEntry.data}}
							</i>
						</p>
					</div>
					<div class="col-sm-7 comment-section">
						<p>{{timeEntry.comment}}</p>
					</div>
					<div class="col-sm-1">
						<button class="btn btn-xs btn-danger delete-button" @click="deleteTimeEntry(timeEntry)">X
						</button>
					</div>
				</div>
			</a>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			//模拟一个假数据
			let existingEntry ={
				user:{
					name:'小路',
					email:'luffy@outlook.com',
					image:'https://sfault-avatar.b0.upaiyun.com/888/223/888223038-5646dbc28d530_huge256'
				},
				comment:'我的一个备注',
				totalTime:1.5,
				data:'2017-05-18'
			};
			return {
				timeEntries:[existingEntry]
			}
		},
		methods:{
			deleteTimeEntry(timeEntry){
				let index = this.timeEntries.indexOf(timeEntry);
				if(window.confirm('are you sure to delete?')){
					this.timeEntries.splice(index,1);
					//派发到父组件上，执行父组件的events里的deleteTime方法,这是vue1.0里的方法，已被弃用
					//this.$dispatch('deleteTime',timeEntry);
					this.$emit('deleteTime',timeEntry);
				}
			},
			
			timeUpdate(timeEntry){
				this.timeEntries.push(timeEntry);
				//继续向上派发
				this.$emit('timeUpdate',timeEntry);
				// return true;
			}
			
		}
	}
</script>
<style>
	.avatar { 
		height: 75px; 
		margin: 0 auto; 
		margin-top: 10px; 
		margin-bottom: 10px; 
		} 
	.user-details { 
		background-color: #f5f5f5; 
		border-right: 1px solid #ddd; 
		margin: -10px 0; 
		} 
	.time-block { 
		padding: 10px; 
	} 
	.comment-section { 
		padding: 20px; 
	}
</style>