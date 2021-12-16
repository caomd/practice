/*
 * @Author: caomd 
 * @Date: 2021-12-16 17:03:32 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-16 17:05:39
 */
********
//interview13_deleteNode O(1)
keywords:   param(head,deleteNode) param2 is part of param 1 and get deleteNode next node   and then delete next node like this. important code
deleteNode.key = next.key
deleteNode.next = next.next
next = null