/*
 * @Author: caomd 
 * @Date: 2021-11-28 10:45:00 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-28 10:45:49
 */
//一定判断越界问题
//优化遍历，如果大于length/2 从尾部遍历 双向链表的优势
     var mid
            var node = new Node(element)
            mid = Math.floor(length / 2)
            var paramObj = {
                mid,
                index,
                head,
                tail,
                node,
                length
            }
            //优化遍历，如果大于length/2 从尾部遍历 双向链表的优势
            compareMidPos(paramObj)
        }
        length++
        index = index === 0 ? '头部' : index
        console.log('在' + index + '位置插入新节点' + element + ',长度为' + length)
        this.toString(head)
    }
    var compareMidPos = function (param) {
        var { mid,
            index,
            head,
            tail,
            node,
            length } = param
        var current, previoius, i
        if (mid > index) { //从头部遍历
            current = head, i = 0
            while (i++ < index) {
                previous = current
                current = current.next
            }
            previous.next = node
            node.pre = previous
            node.next = current
            current.pre = node
        } else {
            //从尾部遍历添加元素，在后半部分
            current = tail, i = length - 1
            while (i-- > index) {
                current = current.pre
                previoius = current.pre
            }
            previoius = current.pre
            node.pre = previoius
            previoius.next = node
            node.next = current
            current.pre = node
        }
    }