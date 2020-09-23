// function test (a,b){
//     console.log(a,b);
// }
// test (10,20);

// let fn = function(a,b){
//     console.log(a,b);
// }
// fn(10,10);

let test = new Function(console.log("111"));
test();