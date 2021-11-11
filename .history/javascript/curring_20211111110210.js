//curring
var costs = function () {
    var args = []
    return function () {
        if (arguments.length === 0) {
            var money = 0;
            for (var i = 0; i < args.length; i++) {
                money += args[i]
            }
            return money
        }
        // else {
        //     [].push.apply(args, arguments);
        // }
        [].push.apply(args, arguments);
        //指当前执行的函数
        return arguments.callee;

    }
}
//函数要手动执行，函数表达式自动执行
var cost = costs()//返回函数
cost(100)
cost(200)
cost(300)
console.log(cost())

//通用的function curring(){}
var curring = function (fn) {
    var args = []
    return function () {
        if (arguments.length === 0) {
            //去计算总的
            return fn.apply(this, args)
        } else {
            [].push.apply(args, arguments)
            //返回当前执行函数
            return arguments.callee;
        }
    }
}
var cost = (function () {
    var money = 0;
    return function () {
        for (var i = 0; i < arguments.length; i++) {
            money += arguments[i]
        }
        return money
    }
})();
var cost = curring(cost)
cost(100)
cost(200)
cost(300)
console.log(cost());
//uncurring
Function.prototype.uncurring = function () {
    var self = this;//此时self是Array.prototype.push
    return function () {
        var obj = Array.prototype.shift.call(arguments)
        return self.apply(obj, arguments)
    }
}
var push = Array.prototype.push.uncurring();
(function () {
    push(arguments, 4);
    console.log(arguments)
})(1, 2, 3);