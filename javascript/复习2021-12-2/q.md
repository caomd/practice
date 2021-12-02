//私有变量 callback size访问不到 提前声明函数表达式
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
