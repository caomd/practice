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