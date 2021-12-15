/*
 * @Author: caomd 
 * @Date: 2021-12-15 13:10:08 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-15 15:53:27
 */

************reverseList 
base case
if(head === null || head.next === null){
    return head
}
current node do it should to do and then recursion its childnode or nextNode
reverse_all  return firstNode
find firstNode = reverseAll(head.next)
//switch head and next
head.next.next = head
head.next = null
return firstNode
****************reverseFrontN
successor 继承者 作为 global variable in fun can be used and save the value
if(node === null || k===1){
    successor = node.next
    return node
}
var newHead = reverseFrntN(node.next,k-1)
when switch pre and next 
node.next.next = node
node.next = successor
return newHead
**************reverseBetween*****
node.next = newNode
**************reverseByGroup
traverse k 
reverse front k
not exist k return head 
node.next = newHead
