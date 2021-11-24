var LinkedList = function () {
    var Node = function (element) {
        this.element = element
        this.next = null
    }
    var head, length = 0
    //首尾添加节点
    this.append = function (element) {
        let node = new Node(element)
        if (!head) {
            head = node
        } else {
            //向尾部添加 最后一个节点next为null
            var current = head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        length++
    }
    this.insert = function (element, position) {
        var node = new Node(element)
        if (position >= 0 && position < length) {
            var current = head, i = 0, previous
            if (position === 0) {
                head = node
                node.next = current
            } else {
                while (i++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = node
                node.next = current
            }
            length++
            return true
        } else {
            return false
        }
    }
    this.remove = function (position) {
        var current = head, i = 0, previous
        while (i++ < position) {
            previous = current
            current = current.next
        }
        previous.next = current.next
        length--
        return current
    }
    this.findIndex = function (element) {
        var current = head, i = 0, previous
        while (i++ < length) {
            previous = current
            current = current.next
            if (current.element === element) {
                return i
            }
        }
    }
    this.removeElement = function (element) {
        var index = this.findIndex(element)
        return this.remove(index)
    }
    this.isEmpty = function () {
        return this.length === 0
    }
    this.size = function () {
        return length
    }
    this.toString = function () {
        var s = '', current = head
        while (current) {
            s += current.element + ' -> '
            current = current.next
        }
        console.log(s)
    }
}
var nodeList = new LinkedList()
nodeList.append(1)
nodeList.append(2)
nodeList.append(3)
nodeList.insert(22, 2)
nodeList.insert(11, 0)
nodeList.remove(2)
nodeList.insert(22, 2)
nodeList.findIndex(22)
nodeList.removeElement(22)
nodeList.toString()
console.log(nodeList.isEmpty())
console.log(nodeList.size())