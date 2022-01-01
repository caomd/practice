/*
 * @Author: caomd 
 * @Date: 2022-01-01 08:12:18 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-01 20:34:41
 */
var Linked = function () {
    var Node = function (key) {
        this.key = key
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
        return this.size++
    }
    this.print = function () {
        if (this.head !== null) {
            var cur = this.head, str = ''
            while (cur.next) {
                str += cur.key + ' => '
                cur = cur.next
            }
            str += cur.key
            console.log(str)
        }
    }
    this.isEmpty = function () {
        return this.size === 0
    }
}
var Queue = function () {
    this.items = []
    var size = 0
    this.enqueue = function (key) {
        this.items.push(key)
        return size++
    }
    this.dequeue = function () {
        size--
        return this.items.shift()
    }
    this.isEmpty = function () {
        return size === 0
    }
    this.size = function () {
        return size
    }
}
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
        if (node === null) return newNode
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
        postOrderTraverseNode(this.root, callback, this.size)
    }
    var postOrderTraverseNode = function (node, callback, size) {
        var stack = [], stack2 = []
        while (node !== null || stack.length) {
            if (node !== null) {
                stack.push(node)
                stack2.push(node)
                node = node.right
            } else {
                var temp = stack.pop()
                node = temp.left
            }
        }
        while (stack2.length) {
            node = stack2.pop()
            callback(node.key, size)
        }
    }
}
var bstOrderLevel = function (root) {
    var s = new Queue()
    if (root !== null) s.enqueue(root)
    while (!s.isEmpty()) {
        var size = s.size()
        for (var i = 0; i < size; i++) {
            var cur = s.dequeue()
            console.log(cur.key)
            if (cur.left) {
                s.enqueue(cur.left)
            }
            if (cur.right) {
                s.enqueue(cur.right)
            }
        }
    }
}
var bstOrderLevel2 = function (root) {
    var curList = new Linked()
    if (root !== null) curList.insert(root)
    while (!curList.isEmpty()) {
        var cur = curList.head
        var nextList = new Linked()
        while (cur) {
            console.log(cur.key.key)
            if (cur.key.left) {
                nextList.insert(cur.key.left)
            }
            if (cur.key.right) {
                nextList.insert(cur.key.right)
            }
            cur = cur.next
        }
        curList = nextList
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
var bst = new bst()
bst.insert(10);
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(40);
bst.insert(35);
bst.insert(5);
bst.postOrderTraverse(print)
bstOrderLevel(bst.root)
var list = new Linked()
list.insert(1)
list.insert(2)
list.insert(3)
list.insert(4)
list.insert(5)
list.insert(6)
list.print()
console.log('Hi order level')
bstOrderLevel2(bst.root)