var LinkedList = function () {
    this.length = 0
    var Node = function (element) {
        this.element = element
        this.next = null
    }
    var head
    this.append = function (element) {
        let node = new Node(element)
        var current = head
        if (head) {
            while (current.next) {
                current = current.next
            }
            current.next = node
        } else {
            head = node
        }
        this.length++
    }
    this.getHead = function () {
        return head
    }
    this.isEmpty = function () {
        return this.length === 0
    }
    this.remove = function (element) {
        var current = head, previous
        if (head.element === element) {
            head = current.next
            this.length--
        } else {
            while (current.next) {
                //易出错地方
                previous = current
                current = current.next
                if (current.element === element) {
                    this.length--
                    return previous.next = current.next
                }
            }
        }

    }
    this.print = function () {
        var current = head, i = 0
        while (current.next) {
            console.log(current.element)
        }
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
    //使用djb2HashCode 解决冲突
    this.put = function (key, val) {
        var position = djb2HashCode(key)
        console.log(position + '-' + key)
        table[position] = val
    }
    //分离链接重写put方法，解决冲突
    this.put = function (key, val) {
        let position = djb2HashCode(key)
        //没有值，初始化一个LinkedList类实例
        if (table[position] === undefined) {
            table[position] = new LinkedList()
        }
        //element 是一个ValuePair的实例，包含key和val两个属性
        table[position].append(new ValuePair(key, val))
    }
    // this.get = function (key) {
    //     return table[loseloseHashCode(key)]
    // }
    //使用djb2HashCode
    // this.get = function (key) {
    //     return table[djb2HashCode(key)]
    // }
    //分离链接 重写get方法  
    this.get = function (key) {
        let position = djb2HashCode(key)
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
    //使用djb2HashCode
    // this.remove = function (key) {
    //     table[djb2HashCode(key)] = undefined
    // }
    //分离链接 重写remove 
    this.remove = function (key) {
        let position = djb2HashCode(key)
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
                var linkedList = table[i]
                //遍历链表
                var current = linkedList.getHead()
                while (current.next) {
                    console.log(current.element.toString())
                    current = current.next
                }
                console.log(current.element.toString())
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
    //比loselose更好的散列函数djb2
    var djb2HashCode = function (key) {
        var hash = 5381
        for (var i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i)
        }
        return hash % 1013
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

//处理冲突 还有问题*********************
var hashT = new HashTable()
hashT.put('Grandalf', 'gandalf@email.com')
hashT.put('John', 'john@email.com')
hashT.put('Tyrion', 'tyrion@email.com')
hashT.put('Aaron', 'aaron@email.com')
hashT.put('Ana', 'ana@email.com')
hashT.put('Jonathan', 'jonathan@email.com')
hashT.put('Jamie', 'jamie@email.com')
hashT.put('Sue', 'sue@email.com')
hashT.put('Mindy', 'mindy@email.com')
hashT.put('Paul', 'paul@email.com')
hashT.put('Nathan', 'nathan@email.com')
hashT.put('Donnie', 'donnie@email.com')
hashT.print()
console.log(hashT.get('Sue'))
console.log(hashT.remove('Sue'))
hashT.print()
console.log(hashT.remove('Nathan'))
hashT.print()