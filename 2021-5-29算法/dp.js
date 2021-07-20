//动态规划
//斐波那契数列 F(0)=1,F(1)=1
//F(n)=F(n-1)+F(n-2),n>1
const fib = function (n) {
    //停止条件
    if (n < 2) {
        return 1;
    }
    let pre = 1;
    let next = 1;
    let res = 1;

    for (let i = 2; i <= n; i++) {
        pre = next;
        next = res;
        res = pre + next;
    }
    return res;
}

const fib2 = function (n) {
    if (n < 2) {
        return 1;
    }
    return fib2(n - 1) + fib2(n - 2)
}

const res = fib(8)
console.log(res)

const res2 = fib2(8)
console.log(res2)
