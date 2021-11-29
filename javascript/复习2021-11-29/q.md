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
