var LinkedList = function () {
    var Node = function (element) {
        this.element = element
        this.next = null
    }
    var head, length = 0
    this.append = function (element) {
        let node = new Node(element)
        var current = head
        if (head) {
            node.next = current
            head = node
        } else {
            head = node
        }
        length++
    }
    this.getHead = function () {
        return head
    }
    this.isEmpty = function () {
        return length === 0
    }
}
//创建散列表
var HashTable = function () {
    var table = []
    //添加方法
    // this.put = function (key, val) {
    //     var position = loseloseHashCode(key)
    //     console.log(position + '-' + key)
    //     table[position] = val
    // }
    //分离链接重写put方法，解决冲突
    this.put = function (key, val) {
        let position = loseloseHashCode(key)
        //没有值，添加链表头部
        if (table[position] === undefined) {
            table[position] = new LinkedList()
            //element 是一个ValuePair的实例，包含key和val两个属性
            table[position].append(new ValuePair(key, val))
        }
    }
    // this.get = function (key) {
    //     return table[loseloseHashCode(key)]
    // }
    //分离链接 重写get方法  
    this.get = function (key) {
        let position = loseloseHashCode(key)
        if (table[position] !== undefined) {
            //遍历链表得到键值
            var current = table[position].getHead()
            //存在下一个节点
            while (current.next) {
                if (current.element.key === key) {
                    return current.element.val
                }
                current = current.next
            }
            //不存在下个节点 即顶点或尾部节点
            if (current.element.key === key) {
                return current.element.val
            }
        }
        return undefined
    }
    // this.remove = function (key) {
    //     table[loseloseHashCode(key)] = undefined
    // }
    //分离链接 重写remove 
    this.remove = function (key) {
        let position = loseloseHashCode(key)
        if (table[position] !== undefined) {
            //获取头部
            var current = table[position].getHead()
            //遍历
            while (current.next) {
                if (current.element.key === key) {
                    table[position].remove(current.element)
                    if (table[position].isEmpty()) {
                        table[position] = undefined
                    }
                    return true
                }
                current = current.next
            }
            //检查是否为第一个或最后一个元素
            if (current.element.key === key) {
                table[position].remove(current.element);
                if (table[position].isEmpty()) {
                    table[position] = undefined
                }
                return true
            }
        }
        return false
    }
    this.print = function () {
        for (var i = 0; i < table.length; i++) {
            if (table[i] !== undefined) {
                console.log(i + ':' + table[i])
            }
        }
    }
    var ValuePair = function (key, val) {
        this.key = key
        this.val = val
        //重写了toString方法，方便在浏览器控制台输出
        this.toString = function () {
            return '[' + this.key + '-' + this.val + ']'
        }
    }

    //HashTable 类中一个私有方法 key所对应的位置
    var loseloseHashCode = function (key) {
        var hash = 0
        for (var i = 0; i < key.length; i++) {
            //得到ASCII码值的和得到一个数字
            hash += key.charCodeAt(i)
        }
        return hash % 37 //为了得到比较小的数值 使用hash值和任意数除法的余数
    }
}

//测试
var hash = new HashTable()
hash.put('Gandalf', 'gandalf.email.com')
hash.put('John', 'john.email.com')
hash.put('Tyrion', 'tyrion.email.com')
//get
console.log(hash.get('Gandalf'))
console.log(hash.get('Loiane')) //undefined

//处理冲突
var hashT = new HashTable()
hash.put('Grandalf', 'gandalf@email.com')
hash.put('John', 'john@email.com')
hash.put('Tyrion', 'tyrion@email.com')
hash.put('Aaron', 'aaron@email.com')
hash.put('Donnie', 'donnie@email.com')
hash.put('Ana', 'ana@email.com')
hash.put('Jonathan', 'jonathan@email.com')
hash.put('Jamie', 'jamie@email.com')
hash.put('Sue', 'sue@email.com')
hash.put('Mindy', 'mindy@email.com')
hash.put('Paul', 'paul@email.com')
hash.put('Nathan', 'nathan@email.com')
hash.print()