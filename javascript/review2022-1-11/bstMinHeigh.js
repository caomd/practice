/*
 * @Author: caomd 
 * @Date: 2022-01-10 20:57:19 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-11 20:48:26
 */
var bst = function () {
    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }
    this.root = null, size = 0
    this.insert = function (key) {
        this.root = insertNode(this.root, key)
        return size++
    }
    var insertNode = function (node, key) {
        var newNode = new Node(key)
        if (node === null) return node = newNode
        var stack = []
        while (node !== null) {
            stack.push(node)
            if (node.key > key) {
                node = node.left
            } else {
                node = node.right
            }
        }
        node = newNode
        while (stack.length) {
            var parent = stack.pop()
            if (parent.key > key) {
                parent.left = node
                node = parent
            } else {
                parent.right = node
                node = parent
            }
        }
        return node
    }
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(this.root, callback, size)
    }
    var postOrderTraverseNode = function (node, callback, size) {
        var stack = [], stack2 = []
        while (node !== null || stack.length) {
            if (node) {
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
            console.log(val)
            cache.push(val)
            if (cache.length === size) {
                console.log(cache.join(' -> '))
            }
        }
    }
)()
var Queue = function () {
    var items = [], size = 0
    this.enqueue = function (key) {
        items.push(key)
        return size++
    }
    this.dequeue = function () {
        size--
        return items.shift()
    }
    this.isEmpty = function () {
        return size === 0
    }
    this.size = function () {
        return size
    }
}
//thought dfs from width to deep use queue
var bstMinHeight = function (root) {
    var height = 0, q = new Queue()
    if (root !== null) {
        height++
        q.enqueue(root)
    }
    while (!q.isEmpty()) {
        var size = q.size()
        for (var i = 0; i < size; i++) {
            var cur = q.dequeue()
            if (cur.left === null && cur.right === null) return height
            if (cur.left) {
                q.enqueue(cur.left)
            }
            if (cur.right) {
                q.enqueue(cur.right)
            }
        }
        height++
    }
    return height

}
var tree = new bst()
tree.insert(10);
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(40);
tree.insert(35);
tree.insert(5);
tree.postOrderTraverse(print)
console.log(bstMinHeight(tree.root))