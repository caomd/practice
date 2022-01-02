/*
 * @Author: caomd 
 * @Date: 2022-01-02 09:20:54 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-02 10:25:44
 */

var bst = function () {
    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }
    this.root = null
    this.size = 0
    this.insert = function (key) {
        this.root = insertNode(this.root, key)
        return this.size++
    }
    var insertNode = function (node, key) {
        var newNode = new Node(key)
        if (node === null) node = newNode
        else {
            if (node.key > key) {
                node.left = insertNode(node.left, key)
            } else {
                node.right = insertNode(node.right, key)
            }
        }
        return node
    }
    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(this.root, callback, this.size)
    }
    var inOrderTraverseNode = function (node, callback, size) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback, size)
            callback(node.key, size)
            inOrderTraverseNode(node.right, callback, size)
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
var Linked = function () {
    var Node = function (key) {
        this.val = key
        this.next = null
    }
    this.head = null
    this.size = 0
    this.insert = function (key) {
        var newNode = new Node(key)
        if (this.head === null) {
            this.head = newNode
        } else {
            var cur = this.head
            while (cur.next) {
                cur = cur.next
            }
            cur.next = newNode
        }
        this.size++
    }
}
var bstOrderLevel = function (root) {
    var q = new Queue()
    if (root !== null) {
        q.enqueue(root)
    }
    while (!q.isEmpty()) {
        var size = q.size()
        for (var i = 0; i < size; i++) {
            var cur = q.dequeue()
            console.log(cur.key)
            if (cur.left) {
                q.enqueue(cur.left)
            }
            if (cur.right) {
                q.enqueue(cur.right)
            }
        }
    }
}
var bstOrderLevelLinked = function (root) {
    var curLinked = new Linked()
    if (root !== null) curLinked.insert(root)
    while (curLinked.size) {
        var nextLinked = new Linked()
        var cur = curLinked.head
        while (cur) {
            console.log(cur.val.key)
            if (cur.val.left) {
                nextLinked.insert(cur.val.left)
            }
            if (cur.val.right) {
                nextLinked.insert(cur.val.right)
            }
            cur = cur.next
        }
        curLinked = nextLinked
    }
}
var bst = new bst()
bst.insert(10);
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(40);
bst.insert(35);
bst.insert(5);
console.log('----------inOrderTraverse--------')
bst.inOrderTraverse(print)
console.log('------------OrderLevel-----------')
bstOrderLevel(bst.root)
console.log('-----------Linked----------------')
bstOrderLevelLinked(bst.root)