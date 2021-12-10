/*
 * @Author: caomd
 * @Date: 2021-12-10 22:19:36
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-10 22:51:10
 */
//迪杰斯卡尔 源点到其他顶点最小路径 贪心算法
var graph = [
    [0, 2, 4, 0, 0, 0],
    [0, 0, 1, 4, 2, 0],
    [0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 3, 0, 2],
    [0, 0, 0, 0, 0, 0]
]
var INF = Number.MAX_SAFE_INTEGER
var dijstra = function (src) {
    //initalize
    var dist = [], visited = []
    for (var i = 0; i < graph.length; i++) {
        dist[i] = graph[src][i] || INF
        visited[i] = false
    }
    dist[src] = 0
    visited[src] = true
    //通过中转站点更新源点到各顶点距离 不用计算到自己的，轮数减一
    for (var i = 0; i < dist.length - 1; i++) {
        //find the min edge
        var u = findMinEdge(dist, src, visited)
        visited[u] = true
        for (var v = 0; v < dist.length; v++) {
            //这里要用dist[u] 因为总是更新这个是变化的 而graph[src][u]是不变的
            if (!visited[v] && graph[u][v] && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v]
            }
        }
    }
    print(dist)
}
var print = function (dist) {
    var s = ''
    for (var i = 0; i < dist.length; i++) {
        s += dist[i] === INF ? '   INF   ' : dist[i] + '   '
    }
    console.log(s)
}
var findMinEdge = function (dist, src, visited) {
    var min = INF, next = -1
    for (var i = 0; i < dist.length; i++) {
        if (!visited[i] && dist[i] <= min) {
            min = dist[i]
            next = i
        }
    }
    return next
}
dijstra(0)