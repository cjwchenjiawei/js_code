let obj = {
    name:"张三",
    age:18,
    gender:"男",
    show:function() {
        console.log(this.name+" "+this.age+" "+this.score);
    }
}
obj.score = 99;
obj.show();