/*
 * @Author: caomd
 * @Date: 2021-12-15 15:56:59
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-15 16:38:46
 */
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
        this.root = insertNode(this.root, key)
        return this.size++
    }
    var insertNode = function (node, key) {
        var newNode = new Node(key)
        if (node === null) {
            node = newNode
        } else {
            if (node.key > key) {
                node.left = insertNode(node.left, key)
            }
            else {
                node.right = insertNode(node.right, key)
            }
        }
        return node
    }
    this.find = function (key) {
        return findNode(this.root, key)
    }
    var findNode = function (node, key) {
        //no recursion
        if (node === null) {
            return false
        }
        var stack = []
        while (node !== null || stack.length) {
            if (node) {
                stack.push(node)
                node = node.left
            } else {
                var t = stack.pop()
                if (t.key === key) {
                    return true
                }
                node = t.right
            }
        }

        return false
    }
    var findMinRight = function (node) {
        if (node !== null) {
            var current = node
            while (current.right) {
                current = current.left
            }
            return current
        }
    }
    this.delete = function (key) {
        this.root = deleteNode(this.root, key)
        return this.size--
    }
    var deleteNode = function (node, key) {
        var stack = []
        while (node !== null || stack.length) {
            if (node) {
                stack.push(node)
                node = node.left
            } else {
                var t = stack.pop()
                if (t.key === key) {
                    //left right null judge
                    if (t.left === null && t.right === null) {
                        t = null
                    }
                    else if (t.left === null && t.right !== null) {
                        t = t.right
                    } else if (t.right === null && t.left !== null) {
                        t = t.left
                    } else {
                        //find minRightNode
                        var minRight = findMinRight(t.right)
                        t.key = minRight.key
                        t.right = deleteNode(t.right, minRight)
                    }
                    return node = t
                }
                node = t.right
            }
        }
        return node
    }
    this.preOrderTraverse = function (callback) {
        preOrderNoRecursion(this.root, callback, this.size)
    }
    var preOrderNoRecursion = function (node, callback, size) {
        console.log('PreOrderTraverse:')
        var statck = []
        while (node !== null || statck.length) {
            if (node) {
                statck.push(node)
                callback(node.key, size)
                node = node.left
            } else {
                var t = statck.pop()
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
var tree1 = new BinarySearchTree()
tree1.insert(10);
tree1.insert(50);
tree1.insert(30);
tree1.insert(70);
tree1.insert(40);
tree1.insert(35);
tree1.preOrderTraverse(print)
console.log(tree1.find(90))
tree1.delete(40)
tree1.preOrderTraverse(print)