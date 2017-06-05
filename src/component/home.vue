<template>
	<div class="jumbotron">
		<h2>任务追踪</h2>
		<!-- <h3 @click="search">look</h3> -->
		<p>
			<strong>
				<a href='/time-entries'>创建一个任务</a>
			</strong>
		</p>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				msg:typeof this
			}
		},
		mounted:function(){
			this.$store.commit('test',8);
			console.log(this.$store.state.data);
		},
		methods:{
			search:function(){
				console.log(this.$el);
			}
		}
	}
</script>