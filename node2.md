1.webpack2.0之后就不支持loader简写了。

当报错的时候，有时需要重新运行一下，npm run dev

2.对于一个小型demo项目来说，组件的运用注意的两点（作为参考）：

（1）结构级别

可以在App.vue中布局主页，其实App.vue就是一个最父级的组件，其他模块都是嵌套在它里面。你可以通过vue-router来控制页面的变化和加载。

（2）数据级别
.....后续完善

3.路由及子路由的配置全部都在main.js中进行 ，且<router-link>对应于<router-view>

4.$dispatch ,$broadcast已经从vue2.0中移除,可以使用 $emit, $on, $off 分别来分发、监听、取消监听事件：

