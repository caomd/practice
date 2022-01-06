/*
 * @Author: caomd 
 * @Date: 2022-01-06 13:41:13 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-06 14:10:42
 */
var rebuildBinaryTree = function (preOrder, inOrder, length) {
    if (length < 0 || preOrder === null || inOrder === null) return false
    var root = preOrder[0], index
    //find root from inOrder index
    for (var i = 0; i < inOrder.length; i++) {
        if (inOrder[i] === root) {
            index = i
            break
        }
    }
    var leftTree = inOrder.slice(0, index),
        rightTree = inOrder.slice(index + 1, length)
    console.log('root: ' + root + ' left tree: ' + leftTree + ' right Tree: ' + rightTree)
    if (leftTree.length > 0) {
        var leftPreOrder = preOrder.slice(1, leftTree.length + 1),
            leftInOrder = inOrder.slice(0, leftTree.length)
        rebuildBinaryTree(leftPreOrder, leftInOrder, leftTree.length)
    }
    if (rightTree.length > 0) {
        var rightPreOrder = preOrder.slice(leftTree.length + 1),
            rightInOrder = inOrder.slice(index + 1, length)
        rebuildBinaryTree(rightPreOrder, rightInOrder, rightTree.length)
    }

}
rebuildBinaryTree([1, 2, 4, 7, 3, 5, 6, 8], [4, 7, 2, 1, 5, 3, 8, 6], 8)