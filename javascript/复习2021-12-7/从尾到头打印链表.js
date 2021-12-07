/*
 * @Author: caomd
 * @Date: 2021-12-07 08:18:51
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-07 21:25:01
 */
//从尾到头打印链表 思路：使用栈，后进先出的方式 将链表项插入栈中，然后出栈
//step 1 创建栈
class Stack {
    constructor() {
        this.items = []
        this.size = 0
    }
    push(element) {
        this.items.push(element)
        return this.size++
    }
    pop() {
        this.size--
        return this.items.pop()
    }
    isEmpty() {
        return this.size === 0
    }
}
//create linkedlist
var LinkedList = function () {
    var Node = function (element) {
        this.key = element
        this.next = null
    }
    var head = null, size = 0
    //append head or tail
    this.append = function (element) {
        var node = new Node(element)
        //head judge
        if (!head) {
            head = node
        } else {
            var current = head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        return size++
    }
    //insert anywhere
    this.insert = function (position, element) {
        var node = new Node(element)
        //judge final conditions
        if (position >= 0 && position < size) {
            var current = head, previous
            if (position === 0) {
                //judge head exist
                node.next = head
                head = node
                return size++
            } else {
                i = 0
                while (i++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = node
                node.next = current
                return size++
            }
        } else {
            throw new Error('error position')
        }
    }
    this.toString = function () {
        var current = head,
            s = ''
        s += head.key + '  '
        while (current.next) {
            current = current.next
            s += current.key + '  '
        }
        console.log(s, 'size is ' + size)
    }
    this.printLinked = function () {
        var stack = new Stack(),
            current = head
        stack.push(head.key)
        while (current.next) {
            current = current.next
            stack.push(current.key)
        }
        var s = []
        while (!stack.isEmpty()) {
            s.push(stack.pop())
        }
        console.log(s.join('  '), '  size is ' + size)
    }
}
var linked = new LinkedList()
linked.append(1)
linked.append(2)
linked.append(3)
linked.append(4)
linked.insert(1, 6)
linked.toString()
console.log('from tail print the linded')
linked.printLinked()