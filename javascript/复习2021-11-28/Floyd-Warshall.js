/*
 * @Author: caomengdie 
 * @Date: 2021-11-28 06:07:26 
 * @Last Modified by:   caomengdie 
 * @Last Modified time: 2021-11-28 07:28:26 
 */

//弗洛伊德算法 所有源到所有点的最短路径 动态规划思想
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
        //初始化图各顶点距离
        for (var i = 0; i < graph.length; i++) {
            dist[i] = []
            for (var j = 0; j < graph.length; j++) {
                dist[i][j] = graph[i][j] || i === j ? graph[i][j] : INF
            }
        }
        //寻找所有源到所有点的最短路径 所有点都可以做中转站
        //所以最外层为中转站 
        for (var k = 0; k < dist.length; k++) {
            for (var i = 0; i < dist.length; i++) {
                for (var j = 0; j < dist.length; j++) {
                    if (dist[i][k] + dist[k][j] < dist[i][j] && i !== j) {
                        dist[i][j] = dist[i][k] + dist[k][j]
                    }
                }
            }
        }
        this.toString(dist)
    }
    this.toString = function (dist) {
        var s = ''
        for (var i = 0; i < dist.length; i++) {
            for (var j = 0; j < dist.length; j++) {
                s += dist[i][j] === INF ? 'INF  ' : dist[i][j] + '    '
            }
            s += '\n'
        }
        console.log(s)
    }
}
var graph = new Graph()
graph.floydWarshall()

0    2    3    6    4    6    
INF  0    1    4    2    4    
INF  INF  0    6    3    5    
INF  INF  INF  0    INF  2    
INF  INF  INF  3    0    2    
INF  INF  INF  INF  INF  0 