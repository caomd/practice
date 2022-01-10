/*
 * @Author: caomd 
 * @Date: 2022-01-10 18:30:29 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-10 20:18:59
 */

//最小生成树Prim 加点法
var graph = [
    [0, 2, 4, 0, 0, 0],
    [2, 0, 2, 4, 2, 0],
    [4, 2, 0, 0, 3, 0],
    [0, 4, 0, 0, 3, 2],
    [0, 2, 3, 3, 0, 2],
    [0, 0, 0, 2, 2, 0]
]
var INF = Number.MAX_SAFE_INTEGER
var Prim = function (src) {
    var dist = [], visited = [], parent = []
    //initialize 
    for (var i = 0; i < graph.length; i++) {
        for (var j = 0; j < graph.length; j++) {
            dist[i] = graph[i][j] || INF
            visited[i] = false
        }
    }
    dist[src] = 0
    visited[src] = true
    parent[src] = -1
    //first min Vertex
    var u = findMin(dist, visited)
    parent[u] = src
    for (var i = 0; i < dist.length - 1; i++) {
        var u = findMin(dist, visited)
        visited[u] = true
        //update
        for (var v = 0; v < dist.length; v++) {
            if (!visited[v] && graph[u][v] && dist[v] > graph[u][v]) {
                dist[v] = graph[u][v]
                parent[v] = u
            }
        }
    }
    console.log(dist, parent)
    return { dist, parent }
}
var findMin = function (dist, visited) {
    var min = INF, index = -1
    for (var i = 0; i < dist.length; i++) {
        if (!visited[i] && dist[i] < min) {
            min = dist[i]
            index = i
        }
    }
    return index
}

console.log(Prim(0))
