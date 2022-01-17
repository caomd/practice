/*
 * @Author: caomd 
 * @Date: 2022-01-11 21:14:55 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-18 09:35:33
 */

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
//thought root is black and then insert a node is red
// rotation situation two red nodes 
// change color 
var RedBlackTree = function () {
    var Node = function (key, color, size) {
        this.key = key
        this.left = null
        this.right = null
        this.color = color
        this.size = size
    }
    this.root = null
    var isRed = function (node) {
        return node.color === 'RED'
    }
    var size = function (node) {
        return node.size
    }
    var flipColor = function (node) {
        if (node !== null) {
            node.color = 'RED'
            node.left.color = 'BLACK'
            node.right.color = 'BLACK'
        }
    }
    this.insert = function (key) {
        this.root = insertNode(this.root, key)
        this.root.color = 'BLACK'
    }
    var insertNode = function (node, key) {
        var newNode = new Node(key, 'RED', 1)
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
            //judge whether rotation or change color
            if (node.left && isRed(node.left) && node.right && isRed(node.right)) {
                node = rotationLeft(node)
            }
            if (node.left && isRed(node.left) && (node.left.left) && isRed(node.left.left)) {
                node = rotationRight(node)
            }
            if (node.left && isRed(node.left) && node.right && isRed(node.right)) {
                flipColor(node)
            }
            node.size = (node.left && size(node.left)) + (node.right && size(node.right)) + 1
        }
        return node
    }
    var rotationLeft = function (node) {
        var temp = node.right
        node.right = temp.left
        temp.left = node
        temp.color = node.color
        temp.size = node.size
        node.color = 'RED'
        node.size = (node.left && size(node.left)) + (node.right && size(node.right)) + 1
        return temp
    }
    var rotationRight = function (node) {
        var temp = node.left
        node.left = temp.right
        temp.right = node
        temp.color = node.color
        temp.size = node.size
        node.color = 'RED'
        node.size = (node.left && size(node.left)) + (node.right && size(node.right)) + 1
        return temp
    }
    this.orderTraverse = function (callback) {
        orderTraverseNode(this.root, callback, size(this.root))
    }
    var orderTraverseNode = function (node, callback, sizes) {
        var q = new Queue()
        if (node !== null) {
            q.enqueue(node)
        }
        while (!q.isEmpty()) {
            var size = q.size()
            for (var i = 0; i < size; i++) {
                var cur = q.dequeue()
                callback(cur.key, sizes)
                if (cur.left) {
                    q.enqueue(cur.left)
                }
                if (cur.right) {
                    q.enqueue(cur.right)
                }
            }
        }
    }
}
var print = (
    function () {
        var caches = []
        return function (val, size) {
            caches.push(val)
            console.log(val)
            if (caches.length === size) {
                console.log(caches.join('->'))
            }
        }
    }
)()
var tree = new RedBlackTree()
tree.insert(10);
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(40);
tree.insert(35);
tree.insert(5);
tree.orderTraverse(print)