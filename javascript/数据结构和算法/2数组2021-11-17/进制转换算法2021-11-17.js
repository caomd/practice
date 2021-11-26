function baseConverter(decNumber,base) {
    var remStack = new Stack(),
    rem,
    baseString='',
    digits='0123456789ABCDEF'
    while (decNumber) {
        rem = Math.floor(decNumber%base)
        remStack.push(rem)
        decNumber = Math.floor(decNumber/base)
    }
    while(!remStack.isEmpty()){
        baseString += digits[remStack.pop()];
    }
    return baseString
}
//测试
console.log(baseConverter(100345,2))
console.log(baseConverter(100345,8))
console.log(baseConverter(100345,16))