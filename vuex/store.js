export default{
	state:{
		count:0,
		data:4
	},
	mutations:{
		change(state){
			state.count++;
		},
		test(state,value){
			state.data = value;
		}

	}
}