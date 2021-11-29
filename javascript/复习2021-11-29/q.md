堆排序 堆结构构建好之后如何退出？边界条件是什么？ 然后进行根节点和最后一位的交换
 //交换最大值和最后一位交换位置 while 不然执行一次就结束了
        while (heapSize > 1) {
            heapSize--
            swap(arr, heapSize, 0)
            //破会了堆结构重新构建
            heapify(arr, heapSize, 0)
        }
         //必须加这个限定条件left < size 不然已经排序正确的会再次参与排序
    if (arr[left] > arr[largest] && left < size) {
        largest = left
    }
    if (arr[right] > arr[largest] && right < size) {
        largest = right
    }

    ES6版本的队列 一定要把里面的类return出去，不然不是一个构造函数

    bind 函数 返回一个新的函数 参数合并

    new 
     //继承 即对象的隐性属性__proto__指向构造器的原型对象
    obj.__proto__ = constructor.prototype
    //将剩余参数转为数组
    var args = Array.prototype.slice.call(arguments)
    //这个参数是传给构造器的
    var ret = constructor.apply(obj, args) //undefined
    return typeof ret === 'object' ? ret : obj

    var playTwo = createFactory(Play, { type: 'Object' })

    //函数节流
     window.onresize = throttle(clgFn, 1000)
    window.onresize 执行的是throttle返回函数，每次触发就会执行返回函数
     //函数表达式要提前声明
      var throttle =
            // (
            function (fn, interval) {
                var timer, firstTime = true, self = this
                return function () {
                    //初次执行
                    if (firstTime) {
                        fn.apply(this, arguments)
                        return firstTime = false
                    }
                    //正在执行
                    if (timer) {
                        return false
                    }
                    timer = setTimeout(function () {
                        timer = null
                        clearTimeout(timer)
                        //执行函数
                        fn.apply(this, arguments)
                    }, interval || 1000)
                }
            }
        // )()
        //函数表达式要提前声明
        var createDom = (
            function () {
                var dom
                return function (time) {
                    if (!dom) {
                        dom = document.createElement('div')
                    }
                    dom.innerHTML += time + '</br>'
                    document.body.appendChild(dom)
                }
            }
        )()
        var clgFn = (
            function () {
                var now = new Date()
                console.log('now is ' + now)
                createDom(now)
                return function () {
                    var current = new Date()
                    console.log('current is ' + current)
                    createDom(current)
                    console.log(current.getTime())
                    current = typeof current === 'number' ? current : current.getTime()
                    now = typeof now === 'number' ? now : now.getTime()
                    var sub = current - now
                    console.log('throttle interval ' + sub)
                    createDom(sub)
                }
            }
        )()
快速排序 判断左侧有小数组和右侧有大数组的边界 即返回值
    var index = partition(arr, left, right)
    if (left < index - 1) {
        quick(arr, left, index - 1)
    }
    if (right > index) {
        quick(arr, index, right)
    }
    //交换arr[i]和arr[j]的位置,交换了位置，符合左边小于中间值，右边大于中间值 做相应的加加减减
        if (i <= j) {
            swap(arr, i, j)
            i++
            j--
        }