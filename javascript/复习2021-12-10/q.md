/*
 * @Author: caomd 
 * @Date: 2021-12-10 09:30:10 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-10 22:52:27
 */
**************interview_17
//return order Node 无所谓赋值给head1 还是head2
            head1 = mergeLinked(head1, head2, link1)
            return link1
//只有在link1后插入才size++ 不然有重复
var mergeLinked = function (h1, h2, link1) {
    var orderHead = null
    if (h1.key <= h2.key) {
        orderHead = h1
        if (h1.next) {
            //只有在link1后插入才size++ 不然有重复
            link1.setSize()
            orderHead.next = mergeLinked(h1.next, h2, link1)
        } else {
            //只有在link1后插入才size++
            link1.setSize()
            h1.next = h2
        }
    } else {
        orderHead = h2
        if (h2.next) {
            orderHead.next = mergeLinked(h1, h2.next, link1)
        } else {
            h2.next = h1
        }
    }
    console.log(link1.size())
    return orderHead
}
var print = function (node) {
    var current = node, s = ''
    while (current.next) {
        s += current.key + '  '
        current = current.next
    }
    s += current.key + '  '
    console.log('orderNode  ' + s)
}
*******************自平衡树
rotationRL(node){
    //左插值 失衡 
    node.right = rotationLL(node.right)
    retun rotationRR(node)
}
rotationLR(node){
    //右插值 失衡 给左边赋值
    node.left = rotationRR(node.left)
    retun rotationLL(node)
}
rotationRR(node){
    //右失衡 
    var temp = node.right
    node.right = temp.left
    temp.left = node
    return temp  
}
rotationLL(node){
    //左失衡 
    var temp = node.left
    node.left = temp.right
    temp.right = node
    return temp  
}
******************* dijstra 贪心算法 从源点到其他顶点的最小距离
//这里要用dist[u] 因为总是更新这个是变化的 而graph[src][u]是不变的
            if (!visited[v] && graph[u][v] && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v]
            }