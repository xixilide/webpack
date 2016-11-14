/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// for (var i = 0; i < 3; i++) {
	//   console.log("out",i);
	//   for (let i = 0; i < 3; i++) {
	//    console.log("in",i);
	//   }
	// }
	//
	// //将所有参数相加的函数
	// function add(...x){
	//     return x.reduce((m,n)=>m+n);
	// }
	// //传递任意个数的参数
	// console.log(add(1,2,3));//输出：6
	// console.log(add(1,2,3,4,5));//输出：15

	// class Block {
	//   constructor(width,height) {
	//     this.width=width;
	//     this.height=height;
	//
	//   }
	//   area(){
	//     var num=this.width*this.height
	//       console.log(num);
	//   }
	// }
	// let block1 = new Block(1,2);
	// let block2 = new Block(4,3);
	// block1.area();
	// block2.area();

	//类的定义
	var Animal = function () {
	  //ES6中新型构造器
	  function Animal(name) {
	    _classCallCheck(this, Animal);

	    this.name = name;
	  }
	  //实例方法


	  _createClass(Animal, [{
	    key: 'sayName',
	    value: function sayName() {
	      console.log('My name is ' + this.name);
	    }
	  }]);

	  return Animal;
	}();
	//类的继承


	var Programmer = function (_Animal) {
	  _inherits(Programmer, _Animal);

	  function Programmer(name) {
	    _classCallCheck(this, Programmer);

	    //直接调用父类构造器进行初始化
	    return _possibleConstructorReturn(this, (Programmer.__proto__ || Object.getPrototypeOf(Programmer)).call(this, name));
	  }

	  _createClass(Programmer, [{
	    key: 'program',
	    value: function program() {
	      console.log("I'm coding...");
	    }
	  }]);

	  return Programmer;
	}(Animal);

	//测试我们的类


	var animal = new Animal('dummy'),
	    zf = new Programmer('zf');

	animal.sayName(); //输出 ‘My name is dummy’
	zf.sayName(); //输出 ‘My name is zf’
	zf.program(); //输出 ‘I'm coding...’

	var Person = function () {
	  function Person() {
	    _classCallCheck(this, Person);

	    this.name = name;
	  }

	  _createClass(Person, [{
	    key: 'gender',
	    value: function gender() {
	      console.log('myname is ' + this.name);
	    }
	  }]);

	  return Person;
	}();

	var gramer = function (_Person) {
	  _inherits(gramer, _Person);

	  function gramer(name) {
	    _classCallCheck(this, gramer);

	    return _possibleConstructorReturn(this, (gramer.__proto__ || Object.getPrototypeOf(gramer)).call(this, name));
	  }

	  _createClass(gramer, [{
	    key: 'Program',
	    value: function Program() {
	      console.log('coding');
	    }
	  }]);

	  return gramer;
	}(Person);

	var txt = new Person('xixilide');
	var js = new gramer('jiangrong');

	Person.gender();
	txt.gender();
	js.gender();
	js.Program();

/***/ }
/******/ ]);