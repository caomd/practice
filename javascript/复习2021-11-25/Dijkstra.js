var Dictionary = function () { }
Dictionary.prototype.get = function (v) {
    return this[v]
}
Dictionary.prototype.set = function (v, value) {
    return this[v] = value
}
var Graph = function () {
    var vertex = [], adjList = new Dictionary()
    this.addVertecies = function (v) {
        vertex.push(v)
        adjList.set(v, [])
    }
    this.addEdage = function (v, w) {
        adjList.get(v).push(w)
        adjList.get(w).push(v)
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
    this.dijkstra = function (src) {
        var length = graph.length, dist = [], visited = []
        //初始化状态
        for (var i = 0; i < length; i++) {
            dist[i] = graph[src][i] || INF
            visited[i] = false
        }
        //源顶点距离自己为0 visited = true
        dist[src] = 0
        visited[src] = true
        //length-1 是其余顶点除了源顶点外个数
        for (var i = 0; i < length - 1; i++) {
            //寻找源顶点到其余顶点的最短路径顶点
            var u = minDistance(dist, visited)
            //将最小路径顶点放到已被确定集合S visited = true
            visited[u] = true
            //通过顶点u 更新其余到达源顶点的距离，查找最小路径
            for (var v = 0; v < length; v++) {
                //graph[u][v] !== 0判断是排除没有路径到达 0 ---> false
                if (!visited[v] && graph[u][v] && dist[v] > dist[u] + graph[u][v]) {
                    dist[v] = dist[u] + graph[u][v]
                }
            }
        }
        return dist
    }
    var minDistance = function (dist, visited) {
        var index = -1, min = INF
        for (var v = 0; v < dist.length; v++) {
            //如果当前顶点未被访问，且到达源顶点的距离小于无穷大，则替换最小路径下标和路径值
            if (!visited[v] && dist[v] <= min) {
                min = dist[v]
                index = v
            }
        }
        return index
    }
}
var graph = new Graph()
console.log(graph.dijkstra(0))