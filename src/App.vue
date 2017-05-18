<!-- <template>
  <div id="app">
    <h1>{{msg}}</h1>
    <test-com></test-com>
     <ul>
      <li><router-link to="/first">点我到第一页</router-link></li>
      <li><router-link to="/first/article">点我到第一页（子路由）</router-link></li>
      <li><router-link to="/second">点我到第二页</router-link></li>
      <router-view class="view"></router-view>
    </ul>
  </div>
</template> -->

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
      msg: 'Hello World',
      totalTime:2
    }
  },
  //components:{timeEntries,home,sidebar}
  components:{sidebar},
  methods:{
    deleteTime(timeEntry){
      this.totalTime -=parseFloat(timeEntry.totalTime);
    },
    timeUpdate(timeEntry){
      this.totalTime +=parseFloat(timeEntry.totalTime);
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

</style>
