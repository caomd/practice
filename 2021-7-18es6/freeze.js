// 嵌套遍历逐层freeze
function deepFreeze(obj) {
    Object.freeze(obj);
    //判断是否是数组或对象
    const values = Object.prototype.toString.call(obj) === '[object Array]' ? obj : Object.keys(obj);
    (values || []).forEach((key, index, array) => {
        const objCo = Object.prototype.toString.call(obj) === '[object Array]' ? key : values[key];
        if (typeof objCo === 'object') {
            deepFreeze(objCo);
        }
    })

}
const obj = ['yunyin', 'huang', 'bubu', { 'a': 'fuhe' }, { 'c': [1, 2, 4] }]
obj[3].a = 'fuhede';
obj[0] = 'yunyin2'
delete obj.a;
// console.log(obj);//[ 'yunyin2', 'huang', 'bubu', { a: 'fuhede' }, { c: [ 1, 2, 4 ] } ]

const obj2 = ['yunyin', 'huang', 'bubu', { 'a': 'fuhe' }, { 'c': [1, 2, 4] }]
Object.freeze(obj2);
obj2[3].a = 'fuhede';
obj2[0] = 'yunyin2';
// console.log(obj2);//[ 'yunyin', 'huang', 'bubu', { a: 'fuhede' }, { c: [ 1, 2, 4 ] } ]

//深层freeze
const obj3 = ['yunyin', 'huang', 'bubu', { 'a': 'fuhe' }, { 'c': [1, 2, 4] }]
deepFreeze(obj3);
obj3[3].a = 'fuhede';
obj3[0] = 'yunyin2';
console.log(obj3);//[ 'yunyin', 'huang', 'bubu', { a: 'fuhe' }, { c: [ 1, 2, 4 ] } ]

