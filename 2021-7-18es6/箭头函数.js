const obj = {
    teacher: 'yunyin',
    leader: 'huangxiaoyang',
    zhuawa: ['bubu', 'xiaoke'],
    getTeacher: function () {
        return this.teacher
    },
    getLeader: () => {
        return this.leader
    }
}
console.log(obj.getTeacher())//yunyin
console.log(obj.getLeader())//undefined 箭头函数this

function test(name, age) {
    console.log('arguments', arguments)
}

const arg = (name = 'yunyin', age = 18) => {
    console.log('箭头函数arguments', arguments)
}

test('yunyin', 12)
arg()//没有argument