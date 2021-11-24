var Dictionary = function () { }
Dictionary.prototype.set = function (v, value) {
    return this[v] = value
}
Dictionary.prototype.get = function (v) {
    return this[v]
}
var Graph = function () {
    var vertieces = []
    var adjList = new Dictionary()
    this.addVertex = function (v) {
        vertieces.push(v)
        adjList.set(v, [])
    }
    this.addEdage = function (v, w, d) {
        adjList.get(v).push({ w: d })

    }
    var graph = [
        [0, 2, 4, 0, 0, 0],
        [0, 0, 1, 4, 2, 0],
        [0, 0, 0, 0, 3, 0],
        [0, 0, 0, 0, 0, 2],
        [0, 0, 0, 3, 0, 2],
        [0, 0, 0, 0, 0, 0]
    ]
    var INF = Number.MAX_SAFE_INTEGER
    //迪杰斯特拉 贪心算法
    this.dijkstra = function (src) {
        var dist = [], visited = [], length = graph.length
        for (var i = 0; i < length; i++) {
            dist[i] = graph[src][i] || INF//所有距离初始化为无限大 INF=Number.MAX_SAFE_INTEGER 
            //将visited 初始化为false
            visited[i] = false
        }
        dist[src] = 0 //源顶点到自己的距离设置为0
        visited[src] = true //已访问
        for (var i = 0; i < length - 1; i++) {
            //找出到其余顶点的最短路径
            var u = minDistance(dist, visited)
            visited[u] = true
            for (var v = 0; v < length; v++) {
                if (!visited[v] && graph[u][v] !== 0 && dist[u] !== INF && dist[u] + graph[u][v] < dist[v]) {
                    dist[v] = dist[u] + graph[u][v]
                }
            }
        }
        return dist;
    }
    //到其他点最小路径
    var minDistance = function (dist, visited) {
        var min = INF, minIndex = -1
        for (var v = 0; v < dist.length; v++) {
            if (visited[v] == false && dist[v] <= min) {
                min = dist[v]
                minIndex = v
            }
        }
        return minIndex
    }
}
var graph = new Graph()
console.log(graph.dijkstra(0))