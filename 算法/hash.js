//面试题3 哈希-快速匹配
/**
 * 字符    数值
 * I        1
 * V        5
 * IV       4//只有4是小的
 * VI       6
 * X        10
*/

const romanToInt = function (str) {
    const MAP = {
        'I': 1,
        'V': 5,
        'X': 10
    }
    let len = str.length;
    let max = 0;
    let ret = 0;
    while (len--) {
        let num = MAP[str[len]];
        if (max > num) {
            ret -= num;
            continue;
        }
        max = num;
        ret += max;
    }
    return ret;
}
console.log(romanToNum('VIXVIV'))//13