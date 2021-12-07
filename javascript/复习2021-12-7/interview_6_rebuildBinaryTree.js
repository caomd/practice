/*
 * @Author: caomd 
 * @Date: 2021-12-07 21:17:47 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-07 22:51:18
 */
// input binaryTree preOrder and inOrder result rebuild this binaryTree
//idear from preOrder can get root node and inOrder get left tree and right tree
var rebuildBinaryTree = function (preOrder, inOrder, length) {
    if (preOrder === null || inOrder === null || length <= 0) {
        return false
    }
    rebuild(preOrder, inOrder, length)
}
var rebuild = function (preOrder, inOrder, length) {
    var root = preOrder[0], leftTree, rightTree
    for (var i = 0; i < length; i++) {
        if (inOrder[i] === root) {
            leftTree = inOrder.slice(0, i)
            rightTree = inOrder.slice(i + 1, length)
            break
        }
    }
    var bPreOrder = preOrder.slice(1, leftTree.length + 1)
    var aPreOrder = preOrder.slice(leftTree.length + 1, length)
    if (leftTree.length > 1) {
        rebuild(bPreOrder, leftTree, leftTree.length)
    }
    if (rightTree.length > 1) {
        rebuild(aPreOrder, rightTree, rightTree.length)
    }
    return merge(leftTree, rightTree, root)

}
var merge = function (left, right, root) {
    var leftNode = left.length ? left.slice(0, left.length) : null, rightNode = right.length ? right.slice(0, right.length) : null
    console.log('root: ' + root + '  leftNode: ' + leftNode + '  rightNode: ' + rightNode)
}
rebuildBinaryTree([1, 2, 4, 7, 3, 5, 6, 8], [4, 7, 2, 1, 5, 3, 8, 6], 8)
