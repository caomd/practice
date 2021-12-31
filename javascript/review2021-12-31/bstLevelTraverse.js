/*
 * @Author: caomd 
 * @Date: 2021-12-31 17:43:22 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-31 23:03:05
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
var List = function () {
    var Node = function (key) {
        this.key = key
        this.next = null
    }
    this.head = null
    this.size = 0
    this.append = function (key) {
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
    this.isEmpty = function () {
        return this.size === 0
    }
    this.print = function () {
        if (this.head !== null) {
            var cur = this.head
            while (cur.next) {
                console.log(cur.key)
                cur = cur.next
            }
            console.log(cur.key)
        }
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
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(this.root, callback)
    }
    var preOrderTraverseNode = function (node, callback) {
        var stack = []
        while (node !== null || stack.length) {
            if (node !== null) {
                stack.push(node)
                callback(node.key)
                node = node.left
            } else {
                var temp = stack.pop()
                node = temp.right
            }
        }
    }
}
var printNode = function (node) {
    console.log(node)
}
var bstLevelOrder = function (root) {
    var q = new Queue()
    if (root !== null) q.enqueue(root)
    while (!q.isEmpty()) {
        var size = q.size()
        for (var i = 0; i < size; i++) {
            var curNode = q.dequeue()
            console.log(curNode.key)
            if (curNode.left) {
                q.enqueue(curNode.left)
            }
            if (curNode.right) {
                q.enqueue(curNode.right)
            }
        }
    }
}
var bstLevelOrder2 = function (root) {
    var curLevel = new List()
    var ans = new List()
    if (root !== null) curLevel.append(root)
    while (!curLevel.isEmpty()) {
        var nextLevel = new List()
        var curResult = new List()
        var cur = curLevel.head
        while (cur) {
            console.log(cur.key.key)
            curResult.append(cur.key.key)
            if (cur.key.left !== null) {
                nextLevel.append(cur.key.left)
            }
            if (cur.key.right !== null) {
                nextLevel.append(cur.key.right)
            }
            cur = cur.next
        }
        curLevel = nextLevel
        ans.append(curResult)
    }
    return ans
}
var bst = new bst()
bst.insert(10);
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(40);
bst.insert(35);
bst.insert(5);
// bst.preOrderTraverse(printNode)
bstLevelOrder(bst.root)
var listN = new List()
listN.append(1)
listN.append(2)
listN.append(3)
listN.append(4)
listN.print()
bstLevelOrder2(bst.root)