/*
 * @Author: caomd 
 * @Date: 2022-01-08 15:14:43 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-08 19:26:33
 */
var Stack = function () {
    this.items = []
    var size = 0
    this.push = function (key) {
        this.items.push(key)
        return size++
    }
    this.pop = function () {
        size--
        return this.items.pop()
    }
    this.isEmpty = function () {
        return size === 0
    }
}
var avlTree = function () {
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
        var s = new Stack()
        while (node !== null) {
            s.push(node)
            if (node.key > key) {
                node = node.left
            } else {
                node = node.right
            }
        }
        node = newNode
        while (!s.isEmpty()) {
            var parent = s.pop()
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
    this.remove = function (key) {
        if (this.root !== null) {
            this.root = removeNode(this.root, key)
        }
    }
    var removeNode = function (node, key) {
        var s = new Stack()
        while (node !== null) {
            s.push(node)
            if (node.key > key) {
                node = node.left
            } else if (node.key < key) {
                node = node.right
            } else {
                //node.key === key
                //judge left children or right children
                if (node.left === null && node.right === null) {
                    node = null
                } else if (node.left === null && node.right !== null) {
                    node = node.right
                } else if (node.right === null && node.left !== null) {
                    node = node.left
                } else {
                    //node.left and node.right all not equals null
                    //find right tree min node
                    var minRightNode = findRightMin(node.right)
                    //change key
                    node.key = minRightNode.key
                    //remove node.right min
                    node.right = removeNode(node.right, minRightNode.key)
                    var parent
                    while (!s.isEmpty()) {
                        parent = s.pop()
                    }
                    return parent
                }
                while (!s.isEmpty()) {
                    var parent = s.pop()
                    if (parent.key > key) {
                        parent.left = node
                        node = parent
                    } else if (parent.key < key) {
                        parent.right = node
                        node = parent
                    } else {
                        parent = node
                    }
                }
                return parent
            }
        }
    }
    this.findNode = function (key) {
        findNodeNoRecursion(this.root, key)
    }
    var findNodeNoRecursion = function (node, key) {
        //preOrder search
        var s = new Stack()
        while (node !== null) {
            if (node.key > key) {
                node = node.left
            } else if (node.key < key) {
                node = node.right
            } else {
                console.log(node)
                return node
            }
        }
        throw new Error('not found node')
    }
    var findRightMin = function (node) {
        while (node.left !== null) {
            node = node.left
        }
        return node
    }
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(this.root, callback, size)
    }
    var postOrderTraverseNode = function (node, callback, sizes) {
        if (node !== null) {
            var st = new Stack(), st2 = new Stack()
            while (node !== null || !st.isEmpty()) {
                if (node !== null) {
                    st.push(node)
                    st2.push(node)
                    node = node.right
                } else {
                    var t = st.pop()
                    node = t.left
                }
            }
            while (!st2.isEmpty()) {
                var node = st2.pop()
                callback(node.key)
            }
        }
    }
}
var printTree = (
    function () {
        var cache = []
        return function (val, size) {
            console.log(val)
            cache.push(val)
            if (cache.length === size) {
                console.log(cache.join(' -> '))
                cache = []
            }
        }
    }
)()
var avl = new avlTree()
avl.insert(50);
avl.insert(30);
avl.insert(70);
avl.insert(40);
avl.insert(10);
avl.insert(35);
avl.postOrderTraverse(printTree)
avl.remove(30)
console.log('remove node 30')
avl.postOrderTraverse(printTree)
avl.findNode(90)