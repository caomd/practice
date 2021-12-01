/*
 * @Author: caomd
 * @Date: 2021-12-01 05:30:38
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-01 07:24:56
 */
//迪杰斯特拉 最短路径 单源到所有点的最短路径 贪心算法
var Grap = function () {
    var graph = [
        [0, 2, 4, 0, 0, 0],
        [0, 0, 1, 4, 2, 0],
        [0, 0, 0, 0, 3, 0],
        [0, 0, 0, 0, 0, 2],
        [0, 0, 0, 3, 0, 2],
        [0, 0, 0, 0, 0, 0]
    ]
    var INF = Number.MAX_SAFE_INTEGER//无穷大
    this.dijkstra = function (src) {
        var dist = [], visited = []
        //初始化 
        // for (var i = 0; i < graph.length; i++) {
        //     dist[i] = []
        //     for (var j = 0; j < graph.length; j++) {
        //         if (i !== j) {
        //             //有路径就赋值，没有就是无穷大
        //             dist[i][j] = graph[i][j] ? graph[i][j] : INF
        //         } else {
        //             dist[i][j] = graph[i][j]
        //         }
        //         visited[i] = false
        //     }
        // }
        //优化 只指定源顶点到其他点，不用管其他点相互的路径
        for (var i = 0; i < graph.length; i++) {
            dist[i] = graph[src][j] || INF
            visited[i] = false
        }
        dist[src] = 0 //自己到自己距离0
        //设置源点visited为true
        visited[src] = true
        //找到到其他点的最短路径 除去自己的轮数
        for (var i = 0; i < dist.length - 1; i++) {
            //找到下一个最短路径的顶点
            var u = findShortPath(src, visited, dist)
            //通过中转 更新源点到其他顶点的距离
            visited[u] = true
            for (var v = 0; v < graph.length; v++) {
                if (!visited[v] && graph[u][v] && (dist[u] + graph[u][v] < dist[v])) {
                    dist[v] = dist[u] + graph[u][v]
                }
            }
        }
        console.log(dist[src])
    }
    function findShortPath(src, visited, dist) {
        var min = INF, next = -1
        for (var i = 0; i < graph.length; i++) {
            if (!visited[i] && dist[i] && dist[i] < min) {
                min = dist[i]
                next = i
            }
        }
        return next
    }
}
var grap = new Grap()
grap.dijkstra(0)