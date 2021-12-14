/*
 * @Author: caomd 
 * @Date: 2021-12-14 10:46:07 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-14 12:04:43
 */
************check error
Once have exception or error first check the param right or not
************judge isValidBST *****
left and right has boundary
************BST traverse frame
var BST = function(root,target){
    if(root === null) return false
    if(root.key === target){
        //todo something
    }
    if(root.key > target){
        return BST(root.left,target)
    }
    if(root.key < target){
        return BST(root.right,target)
    }
}
**************bst insert opitimizing version *****
if (root.key === key) return root
if (root === null) {
        tree.size++ //only insert new node size++
        return new Node(key)
    }