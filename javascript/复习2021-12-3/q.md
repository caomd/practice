/*
 * @Author: caomd 
 * @Date: 2021-12-03 07:07:43 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-03 09:59:10
 */

********二叉搜索树****** 
条件判断中 一个有return 那么其他的也要有return 不然会返回undefined
删除一个节点总是失败 返回值赋值问题
从左子树删除元素要node.left = removeNode(node.left,key)
从右子树删除元素要node.right = removeNode(node.right,key)
最后跳出所有条件判断要返回 node 