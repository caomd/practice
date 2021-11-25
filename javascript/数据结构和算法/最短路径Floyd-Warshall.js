//弗洛伊德算法
var Graph = function () {
    var graph = [
        [0, 2, 4, 0, 0, 0],
        [0, 0, 1, 4, 2, 0],
        [0, 0, 0, 0, 3, 0],
        [0, 0, 0, 0, 0, 2],
        [0, 0, 0, 3, 0, 2],
        [0, 0, 0, 0, 0, 0]
    ]
    var INF = Number.MAX_SAFE_INTEGER //无穷大
    this.floydWarshall = function () {
        var dist = [], length = graph.length
        for (var i = 0; i < length; i++) {
            dist[i] = []
            for (var j = 0; j < length; j++) {
                if (i === j) {
                    dist[i][j] = 0
                } else {
                    dist[i][j] = graph[i][j] || INF
                }
            }
        }
        //规律 dist1-2 dist[1-0]+dist[0-2] dist[3-4] = dist[3]
        for (var k = 0; k < length; k++) {
            for (var i = 0; i < length; i++) {
                for (var j = 0; j < length; j++) {
                    if (dist[i][k] + dist[k][j] < dist[i][j]) {
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