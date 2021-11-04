//AOP
Function.prototype.before = function (beforefn) {
    //保存原函数的引用
    var _self = this;
    console.log(this, 'wai')//[Function:func]
    //返回包含了原函数和新函数的“代理”函数
    return function () {
        // console.log(this, 'this....')//Object [globl]
        beforefn.apply(this, arguments);
        // console.log(_self.apply(this, arguments), '0')//undefined
        return _self.apply(this, arguments)
    }
}
Function.prototype.after = function (afterfn) {
    var _self = this;
    return function () {
        var ret = _self.apply(this, arguments);
        afterfn.apply(this, arguments);
        // console.log('ret...', ret)//undefined
        return ret
    }
}
var func = function () {
    console.log(1)
}
func = func.before(function () {
    console.log(2)
}).after(function () {
    console.log(3)
})
func()
//2 1 3

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
console.log(cost())
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
})(1, 2, 3)

//函数节流代码实现
var throttle = function (fn, interval) {
    var _self = fn,//保存需要被延迟的函数引用
        timer,//定时器
        firstTime = true;//是否第一次调用
    return function () {
        var args = arguments,
            __me = this;
        if (firstTime) {//第一次执行，不需要延迟
            _self.apply(__me, args);
            return firstTime = false;//非第一次执行
        }
        if (timer) {//如果定时器还在，说明延迟执行还没有完成
            return false;
        }
        timer = setTimeout(function () {
            clearTimeout(timer);
            timer = null;
            _self.apply(__me, args)
        },
            interval || 500);
    }
}
window.onresize = throttle(function () {
    console.log(1);
}, 500)

