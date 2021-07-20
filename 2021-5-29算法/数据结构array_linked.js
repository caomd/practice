//实现链表 head => node1 => node2 => node3 => ...=> null
class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null
    }
    //索引换元素
    getElementAt(position) {

    }
    //添加节点
    append(element) { }
    //插入节点
    insert(position, element) { }
    //删除节点
    removeAt(position) { }
    //定位索引
    indexOf() { }
}
getElementAt(position){
    if (position < 0 || position >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < position; i++) {
        current = current.next;
    }
    return current;
}
//组装辅助类
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
append(element){
    let node = new Node(element);
    // 链表为空时
    if (this.head === null) {
        this.head = node;
    } else {
        let current = getElementAt(this.length - 1);
        current.next = node;
    }
    this.length++;
}

inset(position, element){
    if (position < 0 || position >= this.length) return null;
    let node = new Node(element);
    if (position === 0) {
        node.next = this.head;
        this.head = node;
    } else {
        let previous = this.getElementAt(position - 1)
        node.next = previous.next;
        previous.next = node;
    }
    this.length++;
    return true;
}
removeAt(position){
    if (position < 0 || position >= this.length) return null;
    let current = this.head;
    //判断是否是头
    if (position === 0) {
        this.head = current.next;
    } else {
        let previous = this.getElementAt(position - 1);
        current = previous.next;
        previous.next = current.next;
    }
    this.length--;
    return current.element;
}

//双向链表 head<==>node1<==>node2