使用vue-cli可以很快速的搭建一个vue+webpack项目，可以为了接触更多底层的东西，可以不使用这类脚手架，从最基础的开始，逐渐了解这些工具的内部。这个过程有些漫长，你还是得慢慢来。


1. 首先，假设我们做一个个人网站，我们先搭一个空壳子，起码能跑起来，看到效果，为了让你的东西不丢，或者分享记录下来，把它存放在github上，在github上新建一个仓库，获得远程仓库的地址，把它和本地仓库连接起来，同时，在本地创建一个文件夹test3,通过一系列操作:
	

	     git init
    
    	 git add a.js 
    
    	 git commit -u "initial"
    
    	 git remote add origin git@github.com:xx/xxx.git
    
    	 git push -u origin master

这样就建立起了连接

2.接下来看主角 
进入test3文件夹，进行如下操作，初始化环境

npm init -y

npm install webpack --save-dev

...需要安装用到的各种插件，如果安装过程中遇到些小问题，可以直接在dependencies中先定义好用到的东西，再npm install,就会自动检索下载了。最后得到的package.json是这样的：

    	


   	{
      "name": "test3",
      "version": "1.0.0",
      "description": "...",
      "main": "index.js",
      "scripts":{
   			 "dev": "cross-env NODE_ENV=development webpack-dev-server --open --hot",
    	"build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
      },
      "dependencies": {
   		 "vue": "^2.2.1",
    	 "vue-resource": "^1.2.1",
    	 "vue-router": "^2.3.0",
    	 "vux": "^2.1.1-rc.5"
      },
      "devDependencies": {
	    "babel-core": "^6.24.1",
	    "babel-loader": "^7.0.0",
	    "babel-preset-latest": "^6.24.1",
	    "cross-env": "^5.0.0",
	    "css-loader": "^0.28.1",
	    "file-loader": "^0.11.1",
	    "node-sass": "^4.5.2",
	    "sass-loader": "^6.0.5",
	    "style-loader": "^0.17.0",
	    "vue-loader": "^12.0.4",
	    "vue-template-compiler": "^2.3.3",
	    "webpack": "^2.5.1",
	    "webpack-dev-server": "^2.4.5"
      },
      "keywords": [],
      "author": "",
      "license": "ISC"
    }

scripts中的内容是执行npm的相关指令，如npm run dev等。

3.其他目录构建

node_modules是npm下载的默认安装包，我们创建一个src的文件夹，里面可以存放业务逻辑代码，App.vue（中心组件，祖先级组件）,main.js（入口文件）及组件，在根目录下创建index.html(入口页面),还有最重要的配置文件，webpack.config.js,这里声明webpack的配置，也就是打包的配置。

4.成功到达这步以后，启动本地服务器，可以跑通了。（待续...）
    
 
