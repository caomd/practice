//经典面试题
//输出结果
console.log(["1", "2", "3"].map(parseInt))//[ 1, NaN, NaN ]
// 分析与讲解
// 因为map的callback函数有三个参数，正在遍历的元素, 元素索引(index), 原数组本身(array)。parseInt有两个参数，string和radix(进制)，注意第二个参数进制当为0或者没有参数的时候，parseInt()会根据string来判断数字的基数。当忽略参数 radix , JavaScript 默认数字的基数如下:
// 如果 string 以 "0x" 开头，parseInt() 会把 string 的其余部分解析为十六进制的整数。
// 如果 string 以 0 开头，那么 ECMAScript v3 允许 parseInt() 的一个实现把其后的字符解析为八进制或十六进制的数字。
// 如果 string 以 1 ~ 9 的数字开头，parseInt() 将把它解析为十进制的整数。
parseInt("1", 0);//上面说过第二个参数为进制，所以"1"，radix为0上面提到过，会忽略，根据string 以 1 ~ 9 的数字开头，parseInt() 将把它解析为十进制的整数1。
parseInt("2", 1);//此时将2转为1进制数，由于超过进制数1，所以返回NaN。
parseInt("3", 2);//此时将3转为2进制数，由于超过进制数1，所以返回NaN。
// 那么如果想要得到[1,2,3]该怎么写。
console.log(
    ["1", "2", "3"].map(x => {
        return parseInt(x)
    })
);//[ 1, 2, 3 ]
//koala
const arr = [0, 1, 2, 3, 4];
let sum = arr.reduce((accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
}, 10);//初始值
console.log(sum);
// 20
console.log(arr);
// [0, 1, 2, 3, 4]

//数组去重
// 1.不使用高阶函数 //返回一个新数组
const arr1 = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
const arr2 = [];
for (let i = 0; i < arr1.length; i++) {
    if (arr1.indexOf(arr1[i]) === i) {
        arr2.push(arr1[i]);
    }
}
console.log(arr2);
// [1, 2, 3, 5, 4]
console.log(arr1);
// [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4]

//使用高阶函数filter
const arr1 = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
const arr2 = arr1.filter((element, index, self) => {
    return self.indexOf(element) === index;
});
console.log(arr2);
// [1, 2, 3, 5, 4]
console.log(arr1);
// [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4]