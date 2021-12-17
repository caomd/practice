var LinkedList = function () {
    var Node = function (key) {
        this.key = key
        this.next = null
    }
    this.head = null
    this.size = 0
    this.append = function (key) {
        this.head = insertNode(this.head, key)
        this.size++
    }
    var insertNode = function (node, key) {
        var newNode = new Node(key)
        if (node === null) return newNode
        var current = node
        while (current.next) {
            current = current.next
        }
        current.next = newNode
        return node
    }
    this.print = function () {
        if (this.head !== null) {
            var current = this.head, str = ''
            while (current.next) {
                str += current.key + ' -> '
                current = current.next
            }
            str += current.key
            console.log(str)
        }
    }
}
var mergeOrderLinked = function (l1, l2) {
    if (l1 === null && l2 === null) {
        return null
    } else if (l1 === null && l2 !== null) {
        return l2
    } else if (l2 === null && l1 !== null) {
        return l1
    } else {
        head1 = l1.head
        head2 = l2.head
        var newHead = mergeOrderLinkedNode(head1, head2)
        l1.head = newHead
        return l1
        console.log(newHead)
    }
}

function mergeOrderLinkedNode(h1, h2) {
    if (h1 !== null && h2 !== null) {
        var newHead = null
        if (h1.key <= h2.key) {
            newHead = h1
            newHead.next = mergeOrderLinkedNode(h1.next, h2)
            return newHead
        } else {
            newHead = h2
            newHead.next = mergeOrderLinkedNode(h1, h2.next)
            return newHead
        }
    } else if (h1 !== null && h2 === null) {
        return h1
    } else if (h1 === null && h2 !== null) {
        return h2
    } else {
        return null
    }
}

var linked = new LinkedList()
linked.append(1)
linked.append(2)
linked.append(3)
linked.append(4)
linked.append(4)
linked.append(6)
linked.print()
// linked.append(7)
// linked.toString()
var linked2 = new LinkedList()
linked2.append(3)
linked2.append(3)
linked2.append(4)
linked2.append(5)
linked2.append(6)
linked2.append(8)
linked2.print()
var l = mergeOrderLinked(linked, linked2)
l.print()