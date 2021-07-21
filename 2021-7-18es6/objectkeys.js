const obj = {
    a: 1,
    b: 2
};
const obj2 = {
    a: 1,
    b: 2
}
console.log(obj === obj2)//false
console.log(Object.is(obj, obj2));//false
function getObjectkeys(obj) {
    const ret = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            ret.push(key)
        }
    }
    return ret;
}
console.log(getObjectkeys(obj))//[ 'a', 'b' ]
console.log(Object.values(obj))//[ 1, 2 ]