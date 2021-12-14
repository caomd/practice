/*
 * @Author: caomd 
 * @Date: 2021-12-13 17:20:15 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-14 08:52:43
 */

************interview_19
not recursion complete
*************interview_20
use case only one column or one row or one number these situation
and think about column and row and startIndex relations

**************reverseList
successor is global variables when in reverseN function is closure
first find base case and then
find the new head
var last = recursionFn()
last is the first one
and then head.next.next = head  switch position 
head.next = null break joint or head.next = successor 