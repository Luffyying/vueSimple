<template>
	<div class="panel panel-default">
		<div class="panel-heading">
			<h3 class="text-center">已有时长</h3>
		</div>
		<div class="panel-body">
			<h3 class="text-center">{{time}}小时</h3>
		</div>
	</div>
</template>
<script>
	export default{
		// computed:{
		// 	time(){
		// 		return 6;//this.$store.state.totalTime
		// 	}
		// }
		name:'sidebar',
		props:['time']
	}
</script>