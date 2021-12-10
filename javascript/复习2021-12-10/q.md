/*
 * @Author: caomd 
 * @Date: 2021-12-10 09:30:10 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-10 09:30:43
 */
**************interview_17
//return order Node 无所谓赋值给head1 还是head2
            head1 = mergeLinked(head1, head2, link1)
            return link1
//只有在link1后插入才size++ 不然有重复
var mergeLinked = function (h1, h2, link1) {
    var orderHead = null
    if (h1.key <= h2.key) {
        orderHead = h1
        if (h1.next) {
            //只有在link1后插入才size++ 不然有重复
            link1.setSize()
            orderHead.next = mergeLinked(h1.next, h2, link1)
        } else {
            //只有在link1后插入才size++
            link1.setSize()
            h1.next = h2
        }
    } else {
        orderHead = h2
        if (h2.next) {
            orderHead.next = mergeLinked(h1, h2.next, link1)
        } else {
            h2.next = h1
        }
    }
    console.log(link1.size())
    return orderHead
}
var print = function (node) {
    var current = node, s = ''
    while (current.next) {
        s += current.key + '  '
        current = current.next
    }
    s += current.key + '  '
    console.log('orderNode  ' + s)
}