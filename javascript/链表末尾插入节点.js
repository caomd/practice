var ListNode = function (key) {
    this.next = null
    this.key = key
}
var List = function () {
    var head = null
    var length = 0
    var self = this
    var createNode = function (key) {
        return new ListNode(key)
    }
    return {
        //往头部插值
        insert: function (node) {
            if (head) { //头部有值
                node.next = head
            } else {
                node.next = null
            }
            head = node
            length++
        }
        //往末尾插值
        insertTail: function () {
            if (head) {
                while (length) {

                }
            } else {

            }
        }

    }
}