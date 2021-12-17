/*
 * @Author: caomd 
 * @Date: 2021-12-17 15:55:10 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-17 16:59:16
 */

var avlTree = function () {
    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }
    this.root = null
    this.size = 0

    this.insert = function (key) {
        this.root = insertNode(this.root, key)
        this.root = balanceTree(this.root, key)
        return this.size++
    }
    var balanceTree = function (node, key) {
        //balance factor
        if (node !== null) {
            if (node.key > key) {
                //insert left tree
                if (node.left !== null) {
                    var differ = heightNode(node.left) - heightNode(node.right)
                    //left left
                    if (differ > 1) {
                        if (node.left.key > key) {
                            //rotation tree
                            node = rotationLL(node)
                        } else {
                            node = rotationLR(node)
                        }
                    }
                }
            } else {
                if (node.right !== null) {
                    //right left
                    var differ = heightNode(node.right) - heightNode(node.left)
                    if (differ > 1) {
                        if (node.right.key > key) {
                            //rotation tree
                            node = rotationRL(node)
                        } else {
                            node = rotationRR(node)
                        }
                    }
                }
            }
        }
        return node
    }
    var insertNode = function (node, key) {
        var newNode = new Node(key)
        if (node === null) return newNode
        var stack = []
        while (node !== null) {
            if (node !== null) {
                stack.push(node)
                if (node.key > key) {
                    node = node.left
                } else {
                    node = node.right
                }
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
    var rotationRR = function (node) {
        //rigth not balance
        var temp = node.right
        node.right = temp.left
        temp.left = node
        return temp
    }
    var rotationRL = function (node) {
        node.right = rotationLL(node.right)
        return rotationRR(node)
    }
    var rotationLL = function (node) {
        var temp = node.left
        node.left = temp.right
        temp.right = node
        return temp
    }
    var rotationLR = function (node) {
        node.left = rotationRR(node.left)
        return rotationLL(node)
    }
    var heightNode = function (node) {
        if (node === null) {
            return -1
        } else {
            return Math.max(heightNode(node.left), heightNode(node.right)) + 1
        }
    }
    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(this.root, callback, this.size)
    }
    var inOrderTraverseNode = function (node, callback, size) {
        var stack = []
        while (node !== null || stack.length) {
            if (node !== null) {
                stack.push(node)
                node = node.left
            } else {
                var t = stack.pop()
                callback(t.key, size)
                node = t.right
            }
        }
    }
}
var print = (
    function () {
        var cache = []
        return function (val, size) {
            cache.push(val)
            if (cache.length === size) {
                console.log(cache.join(' => '))
                cache = []
            }
        }
    }
)()
var bst = new avlTree()
// bst.insert(50);
// bst.insert(30);
// bst.insert(70);
// bst.insert(40);
// bst.insert(10);
// bst.insert(35);
// bst.insert(39);
// bst.insert(9);
// bst.insert(65)
// bst.insert(60)
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(40);
bst.insert(10);
bst.insert(35);
bst.inOrderTraverse(print)