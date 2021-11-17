function LinkedList() {
    var head = null,
        length = 0;
    var Node = function (element) {
        this.element = element
        this.next = null
    }
    //头部或尾部插入节点
    this.append = function (element) {
        var node = new Node(element)
        var current = head
        //头部
        if (!head) {
            head = node
        } else {
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        length++
    }
    //任意位置插入节点
    this.insert = function (position, element) {
        var current = head, previoius, index = 0
        var node = new Node(element)
        //检测边界
        if (position > -1 && position <= length) {
            //头部
            if (position === 0) {
                node.next = current
                head = node
            } else {
                //非头部任意位置
                while (index++ < position) {
                    previoius = current
                    current = current.next
                }
                previoius.next = node
                node.next = current
            }
            length++
        } else {
            return false
        }
    }
    //含某值删除第一个
    this.remove = function (element) {
        var current = head, index = -1, previous
        if (head.element === element) {
            head = current.next
        } else {
            while (current.next) {
                previous = current
                current = current.next
                if (current.element === element) {
                    previous.next = current.next
                    current = current.next
                    length--
                    return element
                }
            }
        }
    }
}
//测试
var list = new LinkedList()
list.append(10)
list.append(11)
list.append(12)
list.append(13)

//插入任意位置节点
list.insert(3, 9)
//删除含有元素第一个
list.remove(9)