# 这是一个基于react-16.3.0, redux, react-router-4, babel-7, webpack-4基础架构Demo

A React + Redux application without server render.

### 启动方式

```
$ npm install
$ make run
// 端口默认`3000`
```

### 代码编译

```
$ make build
```

### 涉及到的技术栈

  * react 16.3.0
  * redux  
  * webpack 4.0.0
  * react-router >=4.0.0

### 做出的改变

  * 抛开node端，只是一个spa前端开发环境，打包编译文件分为js,html
  * 采用最新技术架构版本，styled-component为样式方案
  * 加入redux数据结构管理
  * 采用makefile作为构建工具，让package.json更纯粹
  * code split 自己实现的异步加载方法
  * 自己实现的react-redux
