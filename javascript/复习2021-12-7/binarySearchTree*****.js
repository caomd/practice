/*
 * @Author: caomd
 * @Date: 2021-12-07 10:15:33
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-07 11:49:23
 */
//binarySearchTree  left <root<right
var BinarySearchTree = function () {
    var Node = function (element) {
        this.key = element
        this.left = null
        this.right = null
    }
    var root = null, size = 0
    this.insert = function (element) {
        var node = new Node(element)
        if (!root) {
            root = node
            return size++
        }
        insertNode(root, node)
        return size++
    }
    this.size = function () {
        return size
    }
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root, callback, size)
    }
    var preOrderTraverseNode = function (node, callback, size) {
        if (node !== null) {
            callback(node.key, size)
            preOrderTraverseNode(node.left, callback, size)
            preOrderTraverseNode(node.right, callback, size)
        }
    }
    var insertNode = function (node, newNode) {
        if (node !== null) {
            //judge node.key and newNode.keys
            if (node.key > newNode.key) {
                //insert left tree
                if (node.left === null) {
                    node.left = newNode
                } else {
                    insertNode(node.left, newNode)
                }
            } else {
                if (node.right === null) {
                    node.right = newNode
                } else {
                    insertNode(node.right, newNode)
                }
            }
        }
    }
    this.max = function () {
        if (root !== null) {
            return maxNode(root)
        }
    }
    var maxNode = function (node) {
        while (node.right) {
            node = node.right
        }
        return node.key
    }
    this.min = function () {
        if (root !== null) {
            return minNode(root)
        }
    }
    var minNode = function (node) {
        while (node.left) {
            node = node.left
        }
        return node.key
    }
    this.search = function (element) {
        if (root !== null) {
            return searchNode(root, element)
        }
    }
    var searchNode = function (node, element) {
        if (node !== null) {
            if (node.key > element) {
                //search from left tree
                return searchNode(node.left, element)
            } else if (node.key < element) {
                return searchNode(node.right, element)
            } else {
                return node
            }
        } else {
            throw new Error('not found the node')
        }
    }
    this.remove = function (element) {
        if (root !== null) {
            size--
            return root = removeNode(root, element)
        }
    }
    var removeNode = function (node, element) {
        if (node !== null) {
            if (node.key > element) {
                node.left = removeNode(node.left, element)
            } else if (node.key < element) {
                node.right = removeNode(node.right, element)
            } else {
                // judge whether has left or right tree
                if (node.left === null && node.right === null) {
                    node = null
                } else if (node.left === null) {
                    node = node.right
                } else if (node.right === null) {
                    node = node.left
                } else {
                    //left right all exist
                    //select right tree minNode replace remove node
                    //find minNode
                    var minNode = findMin(node.right)
                    node.key = minNode.key
                    //delete from node.right 
                    node.right = removeNode(node.right, minNode.key)
                }
            }
            return node
        } else {
            throw new Error('not found the remove element')
        }
    }
    var findMin = function (node) {
        while (node.left) {
            node = node.left
        }
        return node
    }
}
var print = (
    function () {
        var cache = []
        return function (val, size) {
            cache.push(val)
            if (cache.length === size) {
                console.log(cache.join('  '))
                cache = []
            }
        }
    }
)()
var tree = new BinarySearchTree()
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(40);
tree.insert(10);
tree.insert(35);
console.log(tree.size())
tree.preOrderTraverse(print)
console.log('最大节点值为：', tree.max())
console.log('最小节点值为：', tree.min())
var searchNode = 90
// console.log('是否查找到该元素' + searchNode, tree.search(searchNode));
console.log('是否查找到该元素35', tree.search(35));
console.log('是否成功删除元素30', tree.remove(30))
console.log('删除元素：40,返回size', tree.remove(40))
console.log('删除元素：70,返回size', tree.remove(70))
console.log(tree.size())
tree.preOrderTraverse(print)