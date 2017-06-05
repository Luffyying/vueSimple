<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a href="#" class="navbar-brand">
          <i class="glyphicon glyphicon-time"></i>计划板
        </a>
        <ul class="nav navbar-nav">
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/time-entries">计划列表</router-link></li>
          <li><router-link to="/day-learn">今天学了啥</router-link></li>
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
  </div>
</template>
<script>
import sidebar from './component/sideBar.vue'
export default {
  name: 'app',
  data () {
    return {
      selected:[],
      show:true,
      msg: 'Hello World',
      totalTime:2
    }
  },
  //components:{timeEntries,home,sidebar}
  components:{sidebar},
  mounted:function(){
    console.log(this.$store.state.count);
  },
  methods:{
    sh:function(){
      console.log(this);
    },
    deleteTime(timeEntry){
      this.totalTime -=parseFloat(timeEntry.totalTime);
    },
    timeUpdate(timeEntry){
      this.totalTime +=parseFloat(timeEntry.totalTime);
    },
    //如下是一些实现vue的组件过渡的钩子函数(再次强调一下，钩子函数可以简单理解为特定事件下所做的事情(约定好的))
    beforeEnter:function(){

    }
  }
  
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active, .fade-leave-active{
  transition: all 0.5s ease     
}
.fade-enter, .fade-leave-active{
  opacity: 0;color:pink
}
</style>
