********bubbleSort
outer loop 0-length
inner loop 0-length-1-i current and second last compare length - 1,-i one already in right place
*************two sort arr one has enough capacity to insert another one and sort the bigger one
//save behind current index element splice delete param (startIndex,deletecount)
var behind = arr1.splice(i + 1, arr1.length - i - 1)
arr1.splice(i + 1, 1, arr2[j])
arr1.push(...behind)
**************binarySearchTree remove return null remove all nodes
answer: last return node
**************mergeSort
merge(mergeSort(left),mergeSort(right))[1,3,5] right [1]  ?????
answer: declare variables not add betweent ,
var mid = Math.floor(arr.length / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid, arr.length)
***************quickSort 
return index quick(index,right) right = index =2?????
quick() method master not well two if not if else if
var quick = function (arr, left, right) {
    var index = partition(arr, left, right)
    if (index - 1 > left) {
        quick(arr, left, index - 1)
    }
    if (index < right) {
        quick(arr, index, right)
    }
}
*****************recursion 
recursion is stack
//binarySearch final condition while(low<=high)

//macro command return object also closure