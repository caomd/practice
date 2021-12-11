/*
 * @Author: caomd 
 * @Date: 2021-12-02 12:16:11 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-11 11:06:08
 */

//中序遍历 callback is not a function 因为递归函数没有传参数
********删除不成功
 //从右子树中删除minNode 这样写没有删除成功 因为删除后节点没有重新赋值 
                    node.right = removeNode(node.right, minNode.key)
*******this 指向问题
//这里报错 this.min不是一个函数 因为this指向全局对象
// var minNode = this.min(node)
//改变this指向 顶部声明self=this 当前对象 构造函数
********当删除节点左右都有节点不为空时，要把右子树上的最小值赋给当前节点的值，只改变值，不改变节点这样才能保证它下面的子树之间的链接，不会发生变化 取右子树上的最小值，此时左子树依然小于根节点右子树大于根节点
*******//不能用min了因为是从root搜索，不带参数重新定义findMin函数
var minNode = self.findMin(node.right)
node.key = minNode.key
*******每次删除操作判断之后要返回当前节点 才能保证递归返回的是删除之后的节点
*******策略模式表单验证 在for循环中this.cache.push(一个函数)
在for循环中使用闭包，每次将rule传给闭包函数，作为私有变量 不能传rules[i]因为此时i已经执行完成，变成了2开始，会报错
//this.cache.push(strategy[rule])
            //rules 有：格式的
            //如果直接在for循环中push 会造成回调函数执行是变量for循环已经执行结束 i=2 如果传入rule[i]
            //应放入闭包中作为私有变量 
            for (var i = 0, rule; rule = rules[i++];) {
                (
                    function (rule) {
                        self.cache.push(
                            function () {
                                var args = rule.strategy.split(':')
                                var strategy = args.shift()
                                args.unshift(dom.value)
                                args.push(rule.msg)
                                //这里执行函数
                                return Strategy[strategy].apply(self, args)
                            }
                        )
                    }
                )(rule)
            }
