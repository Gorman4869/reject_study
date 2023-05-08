# 学习笔记

## 简介

一个React项目中，默认会安装：

- react：React框架核心。
- react-dom：React视图渲染的核心（基于React构建WebApp（HTML页面））
- react-native：构建和渲染App的
- react-scripts就是脚手架为了项目目录看起来干净一些，把webpack打包的规则以及相关插件、loader等都隐藏到了node_modules目录下，





```js
  "scripts": {
    "start": "react-scripts start", 开发环境：在本地启动web服务器，预览打包内容
    "build": "react-scripts build",生产环境：打包部署，打包的内容输出到dist目录
    "test": "react-scripts test",单元测试
    "eject": "react-scripts eject"暴露webpack配置规则，提供修改默认配置入口。
  },
      
      
    "browserslist": { 基于browserslist规范，设置浏览器的兼容情况
    "production": [   postcss-loader + autoprefixer会给CSS3设置相关的前缀
      ">0.2%", 使用率超过0.2%的浏览器		  babel-loader会把ES6编译为ES5
      "not dead",不考虑IE
      "not op_mini all"不考虑open浏览器
    ],
    "development": [
      "last 1 chrome version",默认配置不考虑低版本IE浏览器
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
```

