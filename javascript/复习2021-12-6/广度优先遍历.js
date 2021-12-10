/*
 * @Author: caomd
 * @Date: 2021-12-06 10:09:04
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-10 18:33:00
 */
//广度优先遍历 BFS 由宽到深遍历 利用队列存储 遍历一层一层的
class Queue {
    constructor() {
        this.items = []
        this.size = 0
    }
    enqueue(element) {
        this.items.push(element)
        return this.size++
    }
    dequeue() {
        this.size--
        return this.items.shift()
    }
    isEmpty() {
        return this.size === 0
    }
}
var Dictionary = function () { }
Dictionary.prototype.set = function (v, val) {
    if (!this[v]) {
        this[v] = []
    }
    return this[v].push(val)
}
Dictionary.prototype.get = function (v) {
    return this[v]
}
var Graph = function () {
    var vertex = [],
        adjList = new Dictionary()//相邻列表
    this.addVertex = function (vertexies) {
        vertex.push(vertexies)
    }
    this.addEdge = function (v, w) {
        adjList.set(v, w)
        adjList.set(w, v)
    }
    this.toString = function () {
        //由一个点找到他的相邻点
        var g = ''
        for (var s = 0; s < vertex.length; s++) {
            g += vertex[s] + ' -> '
            var neibours = adjList.get(vertex[s])
            for (var n = 0; n < neibours.length; n++) {
                g += neibours[n] + '  '
            }
            g += '\n'
        }
        console.log(g)
    }
    var initializeColor = function () {
        var color = []
        for (var i = 0; i < vertex.length; i++) {
            color[vertex[i]] = 'white'
        }
        return color
    }
    this.bfs = function (src, callback) {
        //初始化一个队列 FIFO
        var queue = new Queue()
        //初始化未被访问color white
        var color = initializeColor()
        color[src] = 'grey'//only its adjpoint grey => it change black
        queue.enqueue(src)
        while (!queue.isEmpty(queue)) {
            var u = queue.dequeue()
            var neibours = adjList.get(u)
            //遍历相邻点 color white => grey
            for (var i = 0; i < neibours.length; i++) {
                if (color[neibours[i]] === 'white') {
                    queue.enqueue(neibours[i])
                    color[neibours[i]] = 'grey'
                }
            }
            color[u] = 'black'
            if (callback) {
                callback(u)
            }
        }
    }
    //广度优先遍历 最小路径
    this.BFS = function (v) {
        var d = [], pre = [],
            queue = new Queue(),
            color = initializeColor()
        color[v] = 'grey'
        queue.enqueue(v)
        //初始化各个点的距离及前溯点
        for (var i = 0; i < vertex.length; i++) {
            d[vertex[i]] = 0
            pre[vertex[i]] = null
        }
        while (!queue.isEmpty()) {
            //源点的相邻点
            var u = queue.dequeue()
            var neibours = adjList.get(u)
            for (var i = 0; i < neibours.length; i++) {
                if (color[neibours[i]] === 'white') {
                    queue.enqueue(neibours[i])
                    color[neibours[i]] = 'grey'
                    d[neibours[i]] = d[u] + 1
                    pre[neibours[i]] = u
                }
            }
        }
        return { distances: d, predecessors: pre }
    }
}
var printNode = function (v) {
    console.log('Vertices Visited' + v)
}
var graph = new Graph()
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i])
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
graph.bfs('B', printNode)

var shortestPath = graph.BFS(myVertices[0])
// console.log(shortestPath.distances, shortestPath.predecessors)
//打印源点到各个点的距离
