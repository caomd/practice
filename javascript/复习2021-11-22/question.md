for循环中使用setTimeout函数要用闭包，不用给setTimeout传参数，而用function接收传参
for(var i=0;i<a.length;i++){
    (
        function(i){
            setTimeout(function(){
                console.log(i)
            },2000)
        }
    )(i)
}

 var Coffee = function () { }
        //等于实例化对象的原型，这样就不会因为别的子类修改了原型上方法而覆盖其他子类上继承的方法
        /*
         Coffee.prototype = Beverage
         Tea.prototype = Beverage
         这样写Coffee的方法会被Tea的方法覆盖
        */
        Coffee.prototype = new Beverage()