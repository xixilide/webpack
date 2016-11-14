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
class Animal {
    //ES6中新型构造器
    constructor(name) {
        this.name = name;
    }
    //实例方法
    sayName() {
        console.log('My name is '+this.name);
    }
}
//类的继承
class Programmer extends Animal {
  constructor(name) {
      //直接调用父类构造器进行初始化
    super(name);
  }
  program() {
    console.log("I'm coding...");
  }
}

//测试我们的类
var animal=new Animal('dummy'),
zf=new Programmer('zf');



animal.sayName();//输出 ‘My name is dummy’
zf.sayName();//输出 ‘My name is zf’
zf.program();//输出 ‘I'm coding...’

class Person {
  constructor() {
    this.name=name
  }
  gender(){
    console.log('myname is '+this.name);
  }
}
class gramer extends Person {
  constructor(name) {
    super(name)
  }
  Program(){
    console.log('coding');
  }
}
var txt = new Person('xixilide');
var js = new gramer('jiangrong');

Person.gender();
txt.gender();
js.gender();
js.Program();
