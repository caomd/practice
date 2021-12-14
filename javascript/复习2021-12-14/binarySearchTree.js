/*
 * @Author: caomd 
 * @Date: 2021-12-14 09:46:18 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-14 16:02:57
 */
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
        }
        else {
            if (node.key > key) {
                //left
                node.left = insertNode(node.left, key)
            } else {
                node.right = insertNode(node.right, key)
            }
        }
        return node
    }
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNodeWithoutRecursivily(this.root, callback, this.size)
    }
    //push right left root ==> FILO
    var postOrderTraverseNodeWithoutRecursivily = function (node, callback, size) {
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
        console.log('postOrderTraverse:')
        while (stack2.length) {
            node = stack2.pop()
            callback(node.key, size)
        }
    }

    //all nodes plus one
    this.plus = function (num) {
        // assistant fun
        plusNum(this.root, num)
    }
    var plusNum = function (node, num) {
        if (node === null) {
            return
        }
        node.key += num
        plusNum(node.left, num)
        plusNum(node.right, num)
    }
}
var OrdinaryTree = function () {
    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }
    this.root = null
    this.size = 0
    this.insert = function (key) {
        var newNode = new Node(key)
        if (this.root === null) {
            this.root = newNode
        } else {
            if (this.root.left === null) {
                this.root.left = newNode
            } else if (this.root.right === null) {
                this.root.right = newNode
            } else if (this.root.left && this.root.right) {
                if (this.root.right.left === null) {
                    this.root.right.left = newNode
                } else if (this.root.right.right === null) {
                    this.root.right.right = newNode
                }
            }
        }
        return this.size++
    }
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNodeWithoutRecursion(this.root, callback, this.size)
    }
    var preOrderTraverseNodeWithoutRecursion = function (node, callback, size) {
        var statck = []
        while (node !== null || statck.length) {
            if (node) {
                callback(node.key, size)
                statck.push(node)
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
                console.log(cache.join(' -> '))
                cache = []
            }
        }
    }
)()
var isSameTree = function (root1, root2) {
    if (root1 === null && root2 === null) return true
    if (root1 === null || root2 === null) return false
    if (root1.key !== root2.key) return false
    //all roots situation compare childnodes start
    return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)
}
var isValidBST = function (root) {
    //version 1 always return true although the tree is not bst
    // if (root === null) return true
    // if (root.left !== null && root.left.key >= root.key) return false
    // if (root.right !== null && root.right.key <= root.key) return false
    // return isValidBST(root.left) && isValidBST(root.right)

    //version 2 add assistant fun 
    return isValidBSTAss(root, null, null)
}
var isValidBSTAss = function (node, min, max) {
    if (node === null) return true
    if (min !== null && min.key >= node.key) return false
    if (max !== null && max.key <= node.key) return false
    return isValidBSTAss(node.left, min, node) && isValidBSTAss(node.right, node, max)
}
var isInBST = function (root, target) {
    //base case 
    if (root === null) return false
    if (root.key === target) return true
    return isInBST(root.left, target) || isInBST(root.right, target)
}
var isInBSTUseLeftSmallAndRightBig = function (root, target) {
    if (root === null) return false
    if (root.key === target) return true
    if (root.key > target) {
        return isInBSTUseLeftSmallAndRightBig(root.left, target)
    }
    if (root.key < target) {
        return isInBSTUseLeftSmallAndRightBig(root.right, target)
    }
}
var Node = function (key) {
    this.key = key
    this.left = null
    this.right = null
}
var insertAlgorithmVersion = function (root, key, tree) {
    if (root === null) {
        tree.size++
        return new Node(key)
    }
    if (root.key === key) return root
    if (root.key > key) {
        root.left = insertAlgorithmVersion(root.left, key, tree)
    }
    if (root.key < key) {
        root.right = insertAlgorithmVersion(root.right, key, tree)
    }
    return root
}
var countNodes = function (root) {
    if (root === null) return 0
    return 1 + countNodes(root.left) + countNodes(root.right)
}
//perfect tree sum nodes 2^h-1
var countNodesHeight = function (root) {
    var h = 0
    //count tree height
    while (root !== null) {
        root = root.left
        h++
    }
    //sum nodes 2^h-1
    return Math.pow(2, h) - 1
}
var judgeCounts = function (root) {
    if (root === null) return 0
    var hl = 0, hr = 0, rl = root, rr = root
    while (rl) {
        rl = rl.left
        hl++
    }
    while (rr) {
        rr = rr.right
        hr++
    }
    if (hl === hr) {
        return Math.pow(2, hl) - 1
    }
    return 1 + judgeCounts(root.left) + judgeCounts(root.right)
}
//bst serialize to string
var serilizeStr = ''
var serialize = function (root) {
    //preOrderTraverse
    if (root === null) return serilizeStr += ' -1 '
    serilizeStr += root.key + '  '
    serialize(root.left)
    serialize(root.right)
    return serilizeStr
}

var Linked = function () {
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
            var current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
        return this.size++
    }
    this.isEmpty = function () {
        return this.size === 0
    }
    this.removeFirst = function () {
        if (this.head !== null) {
            var current = this.head
            this.head = current.next
            current.next = null
            this.size--
            return current.key
        }
    }
    this.removeLast = function () {
        if (this.head !== null) {
            var current = this.head, last, pre
            while (current.next) {
                pre = current
                current = current.next
            }
            last = current
            if (pre) {
                pre.next = null
            }
            this.size--
            return last.key
        }
    }
}
function strSplitList(str) {
    var list = new Linked()
    for (var i = 0; i < str.length; i++) {
        list.append(str[i])
    }
    return list
}
//preOrderTraverse deserialize
var deserialize = function (list) {
    if (list.isEmpty()) return null
    //first get root
    var first = list.removeFirst()
    if (first === '#') return null
    var root = new Node(first)
    root.left = deserialize(list)
    root.right = deserialize(list)
    return root
}
var postOrderTraverseDeserialize = function (list) {
    if (list.isEmpty()) return null
    var first = list.removeLast()
    if (first === '#') return null
    var root = new Node(first)
    //right tree first
    root.right = postOrderTraverseDeserialize(list)
    root.left = postOrderTraverseDeserialize(list)
    return root
}
var s = ''
var printNode = function (root) {
    if (root !== null) {
        s += root.key + ' '
        printNode(root.left)
        printNode(root.right)
        return s
    } else {
        s += '#'
    }
}
var tree = new BinarySearchTree()
tree.insert(10);
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(40);
tree.insert(35);
// tree.postOrderTraverse(print)
// console.log('all nodes plus num:')
// tree.plus(5)
// tree.postOrderTraverse(print)
var tree1 = new BinarySearchTree()
tree1.insert(10);
tree1.insert(50);
tree1.insert(30);
tree1.insert(70);
tree1.insert(40);
tree1.insert(35);
// tree1.postOrderTraverse(print)
console.log('isSameTree: ', isSameTree(tree.root, tree1.root))
var validBST = new OrdinaryTree()
validBST.insert(10)
validBST.insert(5)
validBST.insert(15)
validBST.insert(6)
validBST.insert(20)
// validBST.preOrderTraverse(print)
console.log('isValidBST', isValidBST(validBST.root))
console.log('target 35 is in BST: ' + isInBST(tree.root, 35))
console.log('target 90 is in BST: ' + isInBST(tree.root, 90))
console.log('use left small and right bit to compare target:')
console.log(isInBSTUseLeftSmallAndRightBig(tree.root, 35))
console.log('optimizing bst insert : ')
insertAlgorithmVersion(tree.root, 6, tree)
insertAlgorithmVersion(tree.root, 10, tree)
insertAlgorithmVersion(tree.root, 1, tree)
tree.postOrderTraverse(print)
console.log(countNodes(tree.root))
//not a perfect tree return 7 wrong actually 8
console.log(countNodesHeight(tree.root))
console.log(judgeCounts(tree.root))
var treeSerialize = new BinarySearchTree()
treeSerialize.insert(6)
treeSerialize.insert(2)
treeSerialize.insert(1)
treeSerialize.insert(18)
treeSerialize.insert(10)
//string deserialize to bst
var str = '1,2,#,4,#,#,3,#,#'
var post = '#,#,#,4,2,#,#,3,1'
var strArr = str.split(',')
var strPost = post.split(',')
console.log(serialize(treeSerialize.root))
// var de = deserialize(list)
// console.log(printNode(de))
var listpost = strSplitList(strPost)
var postDe = postOrderTraverseDeserialize(listpost)
console.log(printNode(postDe))