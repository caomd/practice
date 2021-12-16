//非递归查找
var BinarySearchTree = function () {
    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }
    this.root = null
    this.size = 0
    this.insert = function (key) {
        this.root = insetNode(this.root, key)
        return this.size++
    }
    var insetNode = function (node, key) {
        var newNode = new Node(key)
        if (node === null) {
            node = newNode
        } else {
            if (node.key > key) {
                node.left = insetNode(node.left, key)
            } else {
                node.right = insetNode(node.right, key)
            }
        }
        return node
    }
    this.find = function (key) {

    }
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(this.root, callback, this.size)
    }
    //not recursion
    var postOrderTraverseNode = function (node, callback, size) {
        var stack = [], stack2 = []
        while (node !== null || stack.length) {
            if (node !== null) {
                stack.push(node)
                stack2.push(node)
                node = node.right
            } else {
                var t = stack.pop()
                node = t.left
            }
        }
        while (stack2.length) {
            node = stack2.pop()
            callback(node.key, size)
        }
    }
}
var print = (
    function () {
        var cache = []
        return function (val, size) {
            cache.push(val)
            console.log(val)
            if (cache.length === size) {
                console.log(cache.join(' => '))
                cache = []
            }
        }
    }
)()
var tree = new BinarySearchTree()
tree.insert(10);
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(40);
tree.insert(35);
tree.insert(4);
tree.insert(6);
tree.postOrderTraverse(print)