function LinkedList() {
    let Node = function (element) {
        this.element = element
        this.next = null
    };
    let length = 0
    let head = null
    this.append = function (element) {
        //新建一个节点
        let node = new Node(element), current
        //当列表为空时，添加元素即为第一个节点
        if (head === null) {
            head = node
        }
        //当列表不为空时，找到最后一个节点，最后一个节点的next = null,然后令next = node
        else {
            current = head //只有第一个元素的引用
            while (current.next) {
                current = current.next
            }
            //找到最后一项current.next===null 下一个node元素会自动称为null
            current.next = node
            //列表最后一个节点的下一个元素始终为null 递增列表的长度
        }
        length++
    }
    //在任意位置插入元素 1.头部 2.除了头部任意位置
    this.insert = function (position, element) {
        var previoius, current = head, index = 0;
        //新建节点
        let node = new Node(element)
        //检查边界
        if (position > -1 && position < length) {
            //1.头部
            if (position === 0) {
                node.next = current
                head = node
            } else {
                while (index++ < position) {
                    previoius = current
                    current = current.next
                }
                node.next = current
                previoius.next = node
            }
            length++
            return true
        } else {
            return false
        }
    }
    this.removeAt = function (position) {
        //检查越界值
        if (position > -1 && position < length) {
            let current = head, previous, index = 0;
            //移除第一项,head指向第二个元素
            if (position === 0) {
                head = current.next
            } else {
                //除第一项以外的
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                //将previous和current的下一项链接起来，跳过current从而移除它
                //当前元素会被遗弃在计算机内存中，等着被垃圾回收器清除
                previous.next = current.next
            }
            length--
            return current.element
        } else {
            return null
        }
    }
    //根据元素的值
    this.remove = function (element) {
        var current = head, previous, index = 0;
        if (head.element === element) {
            head = current.next
        } else {
            while (index++ < length) {
                previous = current
                current = current.next
                if (current.element === element) {
                    previous.next = current.next
                    length--
                    return current.element
                }
            }
        }
    }
    //根据元素的值第二种 indexOf
    function remove2 = function(element) {
        var index = this.indexOf(element)
        return this.removeAt(index)
    }
    this.indexOf = function (element) {
        var current = head, index = 0;
        while (current) {
            if (element === current.element) {
                return index
            }
            index++
            current = current.next
        }
        return -1
    } //返回元素在列表中的索引
    //...... 2021 - 11 - 15 
    this.isEmpty = function () {
        return length === 0
    }
    this.size = function () {
        return length
    }
    this.getHead = function () {
        return head
    }
    //由于列表项使用了Node类，就需要重写继承自javaScript对象默认的toString方法，让其只输出元素的值
    this.toString = function () {
        let current = head
        let string = ''
        while (current) {
            string += current.element + (current.next ? 'n' : '');
            current = current.next
        }
        return string
    }
    this.print = function () { }
}
//测试append
let list = new LinkedList();
list.append(15)
list.append(10)
list.append(9)
list.append(19)
list.append(39)
console.log('list', list)

//测试removeAt
// console.log(list.removeAt(3))
// console.log(list.remove(39))
console.log(list.insert(4, 90))
console.log(list.toString())
console.log(list.indexOf(99))
