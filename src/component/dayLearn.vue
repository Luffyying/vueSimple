<template>
	<div>
		<ul>
			<a href=""><li class="learn-item" v-for="item in items">
				<div>{{item.time}}</div>
				<label for="">{{item.title}}</label>
			</li></a>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				items:[{title:"sdfsdf",time:"2017-04-04"},{title:"ssss",time:"2017-04-04"},{title:"sdfsdf",time:"2017-04-04"},{title:"ssss",time:"2017-04-04"}]
			}
		}
	}
	/*box-sizing:border-box 元素的border padding算进到元素的宽高
	box-sizing:content-box 仅仅内容算入到元素的宽高里面
	*/
</script>
<style lang="scss">
	.learn-item{
		color:#fff;
		padding:30px;
		background:#38404e;//#E6E6FA;
		margin:10px;
		border-radius:5px;
	}
	ul{
		list-style: none;
	}
	ul li{
		box-sizing:border-box;
	}
</style>