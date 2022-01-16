/*
 * @Author: caomd 
 * @Date: 2022-01-14 20:20:09 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-14 21:10:48
 */

//最小生成树Prim
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
    var dist = [], parent = [], visited = []
    //initialize 
    for (var i = 0; i < graph.length; i++) {
        dist[i] = graph[src][i] || INF
        visited[i] = false
    }
    //src
    dist[src] = 0
    parent[src] = -1
    visited[src] = true
    //find first min Edge vertex
    var u = findMinEdge(dist, visited)
    parent[u] = src
    //update other edges
    for (var k = 0; k < dist.length - 1; k++) {
        var v = findMinEdge(dist, visited)
        visited[v] = true
        for (var w = 0; w < dist.length; w++) {
            if (!visited[w] && graph[v][w] && graph[v][w] < dist[w]) {
                dist[w] = graph[v][w]
                parent[w] = v
            }
        }
    }
    return { dist, parent }
}
var findMinEdge = function (dist, visited) {
    var min = INF, index = -1
    for (var i = 0; i < dist.length; i++) {
        if (!visited[i] && dist[i] <= min) {
            min = dist[i]
            index = i
        }
    }
    return index
}
Prim(0)