/*
 * @Author: caomd
 * @Date: 2021-12-16 17:28:40
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-16 17:42:24
 */
//linded end Kth
//thought end Kth front Index =>length-k uses two point when first point to k-1 the second point start move and then they differ k-1th when first point to end and then the second point equals the end kth 
var kthNodeFromEnd = function (arr, k) {
    //base case
    if (arr.length > 0) {
        var i = 0, j = 0
        while (j < arr.length) {
            //i from 0 differ k to j when i ===1 j===k-1
            while (j < k) {
                j++
            }
            i++
            j++
        }
        console.log(arr[i])
    }
}
kthNodeFromEnd([1, 2, 3, 4, 5], 3)