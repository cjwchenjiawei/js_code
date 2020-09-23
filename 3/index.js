// function test (a,b){
//     console.log(a,b);
// }
// test (10,20);

// let fn = function(a,b){
//     console.log(a,b);
// }
// fn(10,10);

// let test = new Function(console.log("111"));
// test();

// const fn = function(a,...b){
//     console.log(a);
//     console.log(b);
// }
// fn(1,2,3,4,5);

// const fn = function (a=10,b=10) {
//     console.log(a+b);
// }
// fn();

// const rl = require("readline-sync");
// const fn = function (n) {
//     let m = [];
//     for(let i = 0; i < n;i++){
//         m[i] = rl.question("请输入一个数字：");
//     }
//     return m
// }
// let a = fn(5);
// console.log(a);

// let fn = function () {
//     for(let index = 0; index < arguments.length; index++){
//         console.log(arguments[index]);
//     }
// }
// fn(1,2,3,5,4);

// const fn = function () {
//     return function () {
//         return 20;
//     }
// }

// let n = fn();
// let m = n();
// console.log(m);