# 搭建简单的webpack环境

### 编译es6用webpack 和babel 两个模块

### 1. webpack

```js
"scripts": {
  "test":"node -v",
  "build":"./node_modules/.bin/webpack"　//可以运行npm run build
},
```
### 2. babel 用于把es5转化为es6

  - 安装babel

  ```
  $ npm install --save-dev babel-cli babel-preset-latest
  ```

  - Create a .babelrc file in your project (or use your package.json)

  ```
  {
    "presets": ["latest"]　//最新版本的
  }
  ```

### 3. 配置文件

```js
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
      // path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',//输出文件的代码浏览器可以原生支持的
  },
  module: {
  loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ]
},
  devServer: {
    publicPath: "/static/",
    stats: { colors: true },
    port: 3000,
    inline: true
  }
};
```

### 4. 手写输入文件　index.js


### 5. 运行node_modules/.bin/webpack

命令运行后没有错误即可运行webpack 环境，
