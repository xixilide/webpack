# git 初步

### 学习 Github/Git 的学习目标

- 知道 git 是版本控制工具
- 每个同学要有一个 github 仓库
- 已经添加 ssh key 互信，也就是可以从本地仓库推送内容（ git push ）到 github 仓库
- 可以在本地仓库中任意添加，删除，修改文件，并作成版本

这样，github/git 的初级使用我们就有能力完成了。但是，作为成熟开发者，github 上面会发 push request ，本地 git 会开启新分支，都是必备知识。暂时我们先不涉及。

### 承前启后

课程进行到现在，程序员三大基本工具，我们就介绍完毕。

- 编辑器 atom
- 命令行 Linux
- 版本控制 Git/Github

其实呢，这三个工具的学习都不能一蹴而就，都是在实际写代码过程中逐步完善的。有三门课程可以推荐：

- (Atom 爱上 JS)[http://haoqicat.com/atom-love-js]
- (驾驭命令行怪兽)[http://haoqicat.com/ride-cli-monster]
- (Git 北京)[http://haoqicat.com/gitbeijing]

### 进入 Nodejs 的世界

在 Nodejs 官网 上可以看到，Nodejs 是

``一个可以安装到本地机器上的 Javascript 运行环境
其实，传统上 Javascript 只能运行在浏览器里，也就是说 Javascript 唯一的运行环境就是浏览器。但是 Nodejs 出现以后，就可以在本地机器上执行 Javascript 了。这个特点带来了 Web 开发的革命。``

来解释一下。比如，我们有一个 main.js 文件，里面写一个

```js
console.log('hello world');
```
那么在几年前，想要执行这个 main.js 唯一的方法就是把它放到浏览器里执行。

但是，现在，我们本地安装好 nodejs 之后，就可以这样来执行 main.js 了：

node main.js
其实，nodejs 就是一个剥了皮的 Chrome 浏览器。

Nodejs 诞生的巨大意义

``一个 web 项目，都有前台代码和后台组成，前台代码都是用 html+css+js 来写的，但是传统上由于本地机器不能运行 JS ，所以后台代码是不能用 JS 来写的，于是我们还要学另外一种语言才能写 Web 程序，通常用来写 Web 后台程序的语言有：PHP , Java ，C# ，Python ，Ruby ，Go ...``

所以 Nodejs 的意义就在于，现在开发者终于只用学一种语言，就可以同时进行前台和后台的开发了。

### Linux 安装 Nodejs

具体步骤可以参考 《 Nodejs 乐高》课程的第二小结

### ES6 介绍

前面我们已经学的两周的 JS ，底层的技术规范是 ES5 ，ES5 语法的 JS 的特点就是 可以直接在浏览器里执行 。但是，当前成熟的工程师更多的是采用 ES6 规范的 JS （ 简称为 ES6 ）。

ES6 的特点，简单来说：

- 语法更完善，例如不推荐使用 var ，而是使用 let const 来声明变量
- 功能更强大，引入了 class 关键字，从此 JS 有了面向对象的特性
- 语法更简单，这一点从 class 与 prototype 的使用区别上可以看到
所以，我们课程后续会采用 ES6 来写程序。

但是，ES6 目前的一个问题就是：很多 ES6 语法，浏览器还不支持。这个需要通过预处理来解决。所谓预处理，就是把 ES6 编译成 ES5 。那么这个编译器就是 Babel 。

### Babel 简介

Babel 的官网在：http://babeljs.io/ 。官网上对它的描述是：

一个 Javascript 的编译器
到 Babel 官网，点击 try it out ，可以进入 Babel 的在线试用环境，左侧如果我们输入 ES6 语句，例如

let i = 1;
那么右侧会自动输出 ES5 语法的编译结果。

var i = 1;
### Webpack + Babel 来编译 ES6

使用 Babel 的在线编译环境，实际项目中没有办法使用，因为比较麻烦。实际中，我们是试用命令行工具，来自动化的完成编辑工作的。具体涉及到工具就是 Webpack 和 Babel 。
