var graph = [
    [0, 2, 4, 0, 0, 0],
    [0, 0, 1, 4, 2, 0],
    [0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 3, 0, 2],
    [0, 0, 0, 0, 0, 0]
]
var INF = Number.MAX_SAFE_INTEGER
//min path add vertexes way from src
var dijkstra = function (src) {
    var dist = [], visited = []
    //step init
    for (var i = 0; i < graph.length; i++) {
        dist[i] = graph[src][i] || INF
        visited[i] = false
    }
    dist[src] = 0
    visited[src] = true
    //find src to other min path
    //update other vertexes to src distance by transfer station except itself 
    for (var j = 0; j < dist.length - 1; j++) {
        var u = findMinPath(dist, visited, src)
        visited[u] = true
        for (var v = 0; v < graph.length; v++) {
            if (!visited[v] && graph[u][v] && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v]
            }
        }
    }
    console.log(dist)
}
var findMinPath = function (dist, visited, src) {
    var min = INF, v = -1
    for (var i = 0; i < dist.length; i++) {
        if (!visited[i] && dist[i] < min) {
            min = dist[i]
            v = i
        }
    }
    return v
}
dijkstra(0)