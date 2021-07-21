// const arr = [1, 2, [3]];
// console.log(arr.flat())//[ 1, 2, 3 ]
const arr2 = [1, 2, [3, [4, 5]]];
// console.log(arr2.flat(1))//[ 1, 2, 3, [ 4, 5 ] ]
// // 全部打平
// console.log(arr2.flat(Infinity))//[ 1, 2, 3, 4, 5 ]
//实现
function flatDeep(arr, d = 1) {
    if (d > 0) {
        return arr.reduce((res, val) => {
            // console.log(res, val);
            if (Array.isArray(val)) {
                res = res.concat(flatDeep(val, d - 1))
            } else {
                res = res.concat(val)
            }
            return res;
        }, []);
    } else {
        return arr.slice();
    }
}
console.log(flatDeep(arr2, Infinity))//[ 1, 2, 3, 4, 5 ]
