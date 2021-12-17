/*
 * @Author: caomd
 * @Date: 2021-12-10 17:41:11
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-17 21:00:33
 */
var Queue = function () {
    var Node = function (key) {
        this.key = key
        this.next = null
    }
    var head = null, size = 0
    this.enqueue = function (key) {
        var node = new Node(key)
        if (head === null) {
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
    this.dequeue = function () {
        if (head !== null) {
            var current = head
            head = head.next
            current.next = null
            size--
            return current.key
        }
    }
    this.isEmpty = function () {
        return size === 0
    }
    this.size = function () {
        console.log(size)
    }
    this.print = function () {
        var s = ''
        if (head !== null) {
            var current = head
            while (current.next) {
                s += current.key + ' -> '
                current = current.next
            }
            s += current.key
        }
        console.log(s)
    }
}
var Dictionary = function () { }
Dictionary.prototype.get = function (v) {
    return this[v]
}
Dictionary.prototype.set = function (v, w) {
    if (!this[v]) {
        this[v] = []
    }
    this[v].push(w)
}
//bfs 广度优先遍历 from width to deep use queue
var Graph = function () {
    var vertexes = [],
        adjList = new Dictionary()
    this.addVertexes = function (v) {
        vertexes.push(v)
    }
    this.addEdge = function (v, w) {
        adjList.set(v, w)
        adjList.set(w, v)
    }
    this.toString = function () {
        var s = ''
        //vertexes
        for (var i = 0; i < vertexes.length; i++) {
            s += vertexes[i] + ' -> '
            var neighbours = adjList.get(vertexes[i])
            //adjoin vertex
            for (var j = 0; j < neighbours.length; j++) {
                var adjoin = neighbours[j]
                s += adjoin + '  '
            }
            s += '\n'
        }
        console.log(s)
    }
    var initalizeColor = function (vertexes) {
        var color = {}
        for (var i = 0; i < vertexes.length; i++) {
            color[vertexes[i]] = 'white'
        }
        return color
    }
    this.bfs = function (src, callback) {
        var queue = new Queue()
        //src start
        //initalColor 
        var color = initalizeColor(vertexes)
        queue.enqueue(src)
        color[src] = 'grey'
        var traverse = src + ' -> '
        while (!queue.isEmpty()) {
            //traverse adjoin
            var v = queue.dequeue()
            var neighbours = adjList.get(v)
            for (var i = 0; i < neighbours.length; i++) {
                var u = neighbours[i]
                if (color[u] === 'white') {
                    queue.enqueue(u)
                    color[u] = 'grey'
                    traverse += u + '  '
                }
            }
            if (callback) {
                callback(v)
            }
            color[v] = 'black'
        }
        console.log('bfs is ', traverse)
    }
    //shortPath
    this.BFS = function (src) {
        var d = [], pre = []
        queue = new Queue()
        var color = initalizeColor(vertexes)
        d[src] = 0
        pre[src] = null
        color[src] = 'grey'
        queue.enqueue(src)
        while (!queue.isEmpty()) {
            var u = queue.dequeue(),
                neighbours = adjList.get(u)
            for (var i = 0; i < neighbours.length; i++) {
                var v = neighbours[i]
                if (color[v] === 'white') {
                    d[v] = d[u] + 1
                    color[v] = 'grey'
                    pre[v] = u
                    queue.enqueue(v)
                }
            }
            color[u] = 'black'
        }
        console.log('shortPath', d, pre)
        return { d, pre }
    }
}
var visited = function (val) {
    console.log('visited Vertices' + val)
}
var graph = new Graph()
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (var i = 0; i < myVertices.length; i++) {
    graph.addVertexes(myVertices[i])
}
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')
graph.toString()
graph.bfs('B', visited)
var { d, pre } = graph.BFS('A')
console.log(d, pre)

//print 溯源点到其他顶点的距离
var fromVertex = myVertices[0], stack = []
for (var i = 0; i < myVertices.length; i++) {
    var toVertext = myVertices[i]
    for (var v = toVertext; v !== fromVertex; v = pre[v]) {//直到前一个结点为null
        stack.push(v)
    }
    stack.push(fromVertex)
    var path = stack.pop()
    while (stack.length) {
        path += ' -> ' + stack.pop()
    }
    console.log(path)
}
//Queue
// var queue = new Queue()
// queue.push(1)
// queue.push(2)
// queue.push(3)
// queue.print()
// console.log(queue.pop())
// console.log(queue.isEmpty())
// queue.size()