console.log('两数之和逆序')
var addTwoNumbers = function (l1, l2) {
    const tl1 = JSON.parse(JSON.stringify(l1.reverse()));//逆序
    const tl2 = JSON.parse(JSON.stringify(l2.reverse()));
    let flag = 0;
    const val = [];
    const len1 = l1.length;
    const len2 = l2.length;
    const com = len1 >= len2 ? len1 : len2;
    for (let i = 0; i < com; i++) {
        if (com === l1.length) {
            add(tl2, tl1);
        } else {
            add(tl1, tl2);
        }
    }
    function add(tl1, tl2) {
        if (tl1.length !== 0) {
            let n = tl1.pop();
            let m = tl2.pop();
            let sum = n + m + flag;
            if (sum >= 10) {
                flag = 1;
                val.push(sum % 10)
            } else {
                flag = 0;
                val.push(sum)
            }
        } else {
            let sum = tl2.pop() + flag;
            if (sum >= 10) {
                flag = 1;
                val.push(sum % 10)
            } else {
                flag = 0;
                val.push(sum)
            }
        }
    }
    if (flag !== 0) {
        val.push(flag)
    }
    return val;
};
// const l1 = [2, 4, 3]; const l2 = [5, 6, 4, 8]
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]))
// console.log(addTwoNumbers(l1, l2))