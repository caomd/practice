function DoublyLinkedList() {
    let Node = function (element) {
        this.element = element
        this.next = null
        this.prev = null //新增
    }
    let length = 0
    let head = null
    let tail = null //新增
    //任意位置插入新元素
    this.insert = function (position, element) {
        //检查越界
        if (position >= 0 && position <= length) {
            let node = new Node(element),
                current = head,
                previoius,
                index = 0;
            //在头部添加
            if (position === 0) {
                //没有节点元素
                if (!head) {
                    head = node
                    tail = node
                } else {
                    node.next = current
                    current.perv = node
                    head = node
                }
            }
            // console.log(index++ === length)
            //尾部
            else if (position === length) {
                current = tail
                current.next = node
                node.prev = current
                tail = node
            }// 中间位置
            else {
                //while循环 问题解决
                while (index++ < position) {
                    previoius = current
                    current = current.next
                }
                previoius.next = node
                node.next = current
                node.prev = previoius
                current.prev = node
            }
            length++
            return true
        } else {
            return false
        }
    }
    this.removeAt = function (position) {
        var current = head, index = 0, previous;
        //检查边界
        if (position >= 0 && position < length) {
            //remove 第一个节点
            if (position === 0) {
                head = current.next
                if (length === 1) {
                    tail = null
                } else {
                    head.prev = null
                }
            } else if (position === length - 1) {
                current = tail
                tail = current.prev
                tail.next = null
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
                current.next.prev = previous
            }
            length--
            return current.element
        } else {
            return false
        }
    }
}
//测试
var doubleList = new DoublyLinkedList()
//有问题 已解决 2021-11-17
doubleList.insert(0, 23)
doubleList.insert(1, 32)
doubleList.insert(2, 33)
doubleList.insert(3, 34)
doubleList.insert(4, 35)
doubleList.insert(5, 36)
console.log(doubleList)
console.log(doubleList.removeAt(4))