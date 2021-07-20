//算法复杂度 -时间复杂度 空间复杂度

//时间复杂度
//1.循环次数最多的代码块
//2.最多原则：多个并列循环时，总复杂度就等于最大块的代码复杂度
//3.乘法原则：镶嵌代码块中，复杂度等于内外代码块的乘积

//大O法
function total(n) {
    let sum = 0;                  //t
    for (let i = 0; i < n; i++) { //nt
        sum += i;                 //nt
    }
    return sum;                    //t
}
//执行了 t+nt+nt+t ==>2(n+1)t     //n接近无穷大==》n   O(n)

//
function total(n) {
    let sum = 0;                  //t
    for (let i = 0; i < n; i++) { //nt
        for (let j = 0; j < n; j++) {     //n*n*t
            sum += i + j;           //n*n*t  
        }
    }
    return sum;                    //t
}
//执行了 t+nt+2n*n*t+t===>2t+nt+2n*n*t ==>(2+2n*n)t ==> O(n^2)

//O(1)常数 O(logn)对数 O(n^2),O(n^k)

//1
const sum_plus = function () {
    let i = 1;
    let j = 2;
    i++;
    j++;
    return i + j;
}//O(1)

//2
const foo2 = function () {
    let sum = 0;
    for (let=0; i < n; i++) {
        sum += i;
    }
    return sum;
}//O(n)

//3
const foo3 = function () {
    let i = 1;
    while (i < n) {
        i = i * 2;
    }
}
//i等比变化 2，4，8 2的x次方等于n ==> x=logn ==> O(logn)

//4

const foo4 = function () {
    for (let=0; i < n; i++) {
        let i = 1;
        while (i < n) {
            i = i * 2;
        }
    }
}//O(nlogn)

//空间复杂度
//常量 O(1)
let j = 0;
for (let i = 0; i < n; i++) {
    i++;
}//O(1)

//线性增长
let j = [];
for (let i = 0; i < n; i++) {
    j.push(i);
}//O(n)