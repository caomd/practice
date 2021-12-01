/*
 * @Author: caomd
 * @Date: 2021-12-01 07:25:23
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-01 08:13:17
 */
//弗洛伊德算法 多源到多顶点最短路径
var Graph = function () {
    var graph = [
        [0, 2, 4, 0, 0, 0],
        [0, 0, 1, 4, 2, 0],
        [0, 0, 0, 0, 3, 0],
        [0, 0, 0, 0, 0, 2],
        [0, 0, 0, 3, 0, 2],
        [0, 0, 0, 0, 0, 0]
    ]
    var INF = Number.MAX_SAFE_INTEGER
    this.floydWarshall = function () {
        var dist = []
        //初始化
        for (var i = 0; i < graph.length; i++) {
            dist[i] = []
            for (var j = 0; j < graph.length; j++) {
                if (i === j) { //自己到自己的距离
                    dist[i][j] = graph[i][j]
                } else {
                    //距离为零表示无穷大 没有直达路径
                    dist[i][j] = graph[i][j] || INF
                }
            }
        }
        //多个顶点到多个顶点的距离，所以每个顶点都要遍历到其他点的距离，然后和有中转站的距离做比较 所以每个顶点都可以借用 k层嵌套表示中转站的点
        for (var k = 0; k < dist.length; k++) {
            for (var v = 0; v < dist.length; v++) {
                for (var w = 0; w < dist.length; w++) {
                    //排除自己距离自己 以及中转站为INF的情况
                    if (dist[v][k] + dist[k][w] < dist[v][w]) {
                        dist[v][w] = dist[v][k] + dist[k][w]
                    }
                }
            }
        }
        return this.print(dist)
    }
    this.print = function (dist) {
        var s = ''
        for (var v = 0; v < dist.length; v++) {
            for (var w = 0; w < dist.length; w++) {
                s += dist[v][w] === INF ? 'INF   ' : dist[v][w] + '     '
            }
            s += '\n'
        }
        return s
    }
}
var graphFloyd = new Graph()
console.log(graphFloyd.floydWarshall())