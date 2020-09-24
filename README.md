# jiu-blog-service
koa+mysql

# koa学习
[Koa2进阶学习笔记](https://github.com/chenshenhai/koa2-note)

# 依赖
## nodemon
默认全局安装nodemon
## 关于import/export,require/module.exports
在`package.json`设置`"type": "module"`
## eslint
[参考文章](https://juejin.im/post/6844903859488292871)
### babel-eslint: 该依赖包允许你使用一些实验特性的时候，依然能够用上Eslint语法检查
### eslint-plugin-promise: promise规范写法检查插件，附带了一些校验规则
### eslint-plugin-standard: ESlint Rules for the Standard Linter

## koa
### koa-convert: generator 中间件在koa2中需要用koa-convert封装一下才能使用
### koa-body: 处理post请求数据处理
[解析post数据中间件选择](https://juejin.im/post/6844903944628502542)

## mysql
### mysql: node.js的mysql模块
每次连接数据库都是很费时的操作，所以利用连接池管理与mysql的连接
[参考](https://www.npmjs.com/package/mysql#pooling-connections)
[设计mysql表](https://juejin.im/post/6844903805482434568)

## babel
[参考babel选择](https://juejin.im/post/6844903858632654856#heading-8)
### babel-cli: Babel提供babel-cli工具，用于命令行转码
### babel-core: 如果某些代码需要调用Babel的API进行转码，就要使用babel-core模块
### @babel/preset-env: babel推出了babel-env预设，这是一个智能预设，只要安装这一个preset，就会根据你设置的目标浏览器，自动将代码中的新特性转换成目标浏览器支持的代码
### @babel/plugin-transform-runtime: 用babel编译时，有些功能需要一些工具函数来辅助实现，比如class的编译
### babel-preset-es2015: Babel 把 ES2015（最新版本的 JavaScript 标准，也叫做 ES6）编译成 ES5