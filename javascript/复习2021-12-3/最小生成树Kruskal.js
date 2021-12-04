/*
 * @Author: caomd
 * @Date: 2021-12-03 22:56:49
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-04 14:54:34
 */
//最小生成树 kruskal.js 克鲁斯卡尔
//加边法 找到最小边 将顶点加到确认集合中，要check父顶点是否是一个 不要形成闭环
var graph = [
    [0, 2, 4, 0, 0, 0],
    [2, 0, 2, 4, 2, 0],
    [4, 2, 0, 0, 3, 0],
    [0, 4, 0, 0, 3, 2],
    [0, 2, 3, 3, 0, 2],
    [0, 0, 0, 2, 2, 0]
]
var INF = Number.MAX_SAFE_INTEGER
var kruskal = function (src) {
    //初始化
    var dist = copyGraph(graph), result = [],
        visited = [], parent = []
    for (var i = 0; i < dist.length; i++) {
        //初始化各个顶点false 未被加入确认集合
        visited[i] = false
    }
    //给边排序 
    var dege = dist.length
    while (dege > -1) {
        var { order, parent } = orderEdge(dist, parent)
        //找到最小路径的点 添加到确认集合中 并没有形成闭环 将它们加到确认结合中
        var { v, w, result, flag } = findMinEdge(order, visited, parent, result)
        //找最小边
        //利用已经确认点更新其他点之间的距离
        if (flag) {
            for (var j = 0; j < dist.length; j++) {
                if (v !== j && dist[v][j] > dist[v][w] + dist[w][j]) {
                    dist[v][j] = dist[v][w] + dist[w][j]
                }
            }
        }
        dege--
    }
    console.log(result)
    print(dist)

}
var findMinEdge = function (order, visited, parent, result) {
    var count = 0
    if (order.length > 0 && count <= 5) {
        var path = order[0], w, v
        for (var i in parent[0]) {
            w = i
            v = parent[0][i]
        }
        //确认父顶点
        v = find(v, parent, visited)
        w = find(w, parent, visited)
        //判断是否形成闭环
        if (v !== w) {
            var map = {}
            map[v + '-->' + w] = path
            result.push(map)
            visited[v] = true
            visited[w] = true
            //删除此条路径 以及对应父顶点
            order.shift()
            parent.shift()
            return { v, w, result, flag: true }
        } else {
            //删除此条路径 以及对应父顶点
            order.shift()
            parent.shift()
            for (var i = 0; i < visited.length; i++) {
                if (visited[i]) {
                    count++
                }
            }
            if (count === 6) {
                return { flag: false, result }
            }
            return findMinEdge(order, visited, parent, result)
        }
    } else {
        return { flag: false }
    }
}
var find = function (v, parent, visited) {
    for (var i = 0; i < parent.length; i++) {
        while (parent[i][v] && visited[parent[i][v]]) {
            v = parent[i][v]
        }
    }
    return Number(v)
}
//查找父节点
var findParentNode = function (parent, i, j) {
    var pi = parent[i], pj = parent[j]
    while (pi) {
        return pi = findParentNode(parent, parent[i], j)
    }
    // return pi === pj
}
//复制原图 避免影响数据
var copyGraph = function (inital) {
    var dist = []
    for (var i = 0; i < inital.length; i++) {
        dist[i] = []
        for (var j = 0; j < inital.length; j++) {
            if (i !== j) {
                dist[i][j] = graph[i][j] ? graph[i][j] : INF
            } else {
                dist[i][j] = graph[i][j]
            }
        }
    }
    return dist
}
var print = function (graph) {
    var s = ''
    for (var i = 0; i < graph.length; i++) {
        for (var j = 0; j < graph.length; j++) {
            s += graph[i][j] === INF ? 'INF   ' : graph[i][j] + '     '
        }
        s += '\n'
    }
    console.log(s)
}
//给边排序
var orderEdge = function (dist, parent) {
    var order = [], min = INF
    parent = []
    for (var v = 0; v < dist.length; v++) {
        for (var w = 0; w < dist.length; w++) {
            if (v !== w && dist[v][w] !== INF) {
                var map = {}
                map[w] = v
                parent.push(map)
                console.log(map)
                console.log(v, w)
                order.push(dist[v][w])
            }
        }
    }
    //快速排序
    // quickSort(order)
    //插入排序
    insertionSort(order)
    return { order, parent }
}
var quickSort = function (arr) {
    quick(arr, 0, arr.length - 1)
    console.log(arr)
}
var quick = function (arr, left, right) {
    var index = partition(arr, left, right)
    if (left < index - 1) {
        quick(arr, left, index - 1)
    }
    if (right > index) {
        quick(arr, index, right)
    }
}
var partition = function (arr, left, right) {
    var pivot = arr[Math.floor((left + right) / 2)],
        il = 0, ir = right
    while (il <= ir) {
        while (il < arr.length && arr[il] < pivot) {
            il++
        }
        while (ir < arr.length && arr[ir] > pivot) {
            ir--
        }
        //交换il,ir
        if (il <= ir) {
            swap(arr, il, ir)
            il++
            ir--
        }
    }
    return il
}
//插入排序 
var insertionSort = function (arr) {
    for (var i = 1; i < arr.length; i++) {
        var j = i
        while (j > -1 && arr[j] < arr[j - 1]) {
            swap(arr, j, j - 1)
            j--
        }
    }
}
var swap = function (arr, i, j) {
    var t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}
kruskal(0)
var arr = [3, 5, 1, 6, 4, 7, 2]
// insertionSort(arr)