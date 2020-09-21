//javascript 是弱类型的语言，值是什么类型，变量就是什么类型
//var num = 10;
//typeof关键字可以识别数据类型
//console.log(typeof(num)); //number

//可以直接赋值
//num = 3.5;
//console.log(typeof(num)); //浮点类型同样是number类型

//可以直接赋值字符串
//num = "我是大帅哥";
//console.log(typeof num); //字符串类型string

// 上面是通过javascript1.5的旧版本的声明方式var
// ECMAscript6 建议使用let 和 const声明变量

// var和let最大的一个区别在全局变量中不能出现同名的标识符
// 下面同名的标识符在var里面不会出错，但是在let中有错误
// var n = 10;
// var n = 20;
// console.log(n);

// const 实际就是声明常量
// 下面的常量不能重新赋值
// const n = 10;
// n = "aaa";
// console.log(n);

//javascript的数据类型 ECMA6分为了6中数据类型
//string symbol number boolean undefined null
//复杂的数据类型就是Object

//number 就是指数字无论是整型还是浮点类型
//string 字符串
//boolean 布尔
//undefined
//null

//let n = null;
//null类型通过typeof 打印出来是object类型
//console.log(typeof n);


// 不用给let或者var也会自动加上
// a = 5;
// console.log(a);

//但是如果a从来没有出现过就直接使用，那么就会报错
// console.log(a);


//作用域 var 声明的变量 没有块级作用域，都是全局的
// let 什么的变量有 块级作用域
// if(true){
//     var test = "aaa";
//     let test2 = "bbb";
// }
// console.log(test);
// console.log(test2);

// 面试题
// 变量的提升
// let a;

// console.log(a);
//这种写法会打印undefined，这里会进行变量的提升
// let a = 10;
//下面的写法会直接报错 a is not defined
// a = 10;


// 数据类型
// undefined 一般是声明变量，但是没有给值，就是undefined
// null 直接赋值=null，但是注意null 的typeof 给出来的类型是object

//null和undefined比较为true;
// if(null == undefined){
//     console.log(true);
// }

// if(undefined == undefined){
//     console.log(true);
// }

// boolean 类型

// 在javascript中任意的类型都能转换为boolean类型

// console.log(Boolean(1));
// console.log(Boolean(20));
// console.log(Boolean("aaa"));
// console.log(Boolean(undefined));

// boolean类型转化你的时候，下面的9个值为false，其他都为true
// ""
// ''
// ``
// -0
// 0
// NaN
// false
// null
// undefined

// let a;
// 这种写法在javascript中很常见，因为if语句中需要boolean的值
// 其实就发生了类型的自动转换
// if(a){
//     console.log("true");
// }

// 可以赋值不同的进制
// 0b 二进制 0或者0o八进制 0x十六进制
// let x = 0b101;
// console.log(x);

// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_VALUE);

// isNaN 是不是 不是一个数字？
// console.log(isNaN("123abc"));

// Number 可以转换数值类型，但是要求参数中只能是可以被转换的数值类型
// console.log(Number("123a") + 1);
// parseInt 转换数值类型，如果说参数中第一个字符就不是可以转换的数值，那就是直接是NaN
// 但是如果是后面才出现了不能转换的情况，那么就只是转换到可以转换的位置为止
// console.log(parseInt("1a2a3aaa") + 1);

// let num = 2.566;

//表示自动的小数点后保留两位，并且四舍五入
// num = num.toFixed(2);
// console.log(num);


// let a = 10,b = true,c = null,d; 
// console.log(typeof a.toString()); 
// console.log(typeof b.toString()); 
// console.log(typeof c.toString()); 
// console.log(typeof d.toString());

// 字符串模板
// let str = `<div>
//         sdfdsfdsfds
//     </div>`;

// console.log(str);


// 传统字符串拼接

// let name = "张三";
// let str = "我的名字是：" + name;
// console.log(str);

// 使用模板字符串
// let name = "张三";
// let str = `我的名字是：${name}`;
// console.log(str);




// js的隐式转换
// 隐式转换，实际就是自动的使用Number进行转换
// let a = 2;
// let b = true;

// let c = a + b;

// console.log(c);

//!!两个取反，其实就是得到数据类型真正的boolean值
// 相当于Boolean(x)
let a = !!"a"; 
console.log(a);





