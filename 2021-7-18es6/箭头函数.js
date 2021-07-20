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
// console.log(obj.getTeacher())//yunyin
// console.log(obj.getLeader())//undefined 箭头函数this

function test(name, age) {
    console.log('arguments', arguments)
}

const arg = (name = 'yunyin', age = 18) => {
    console.log('箭头函数arguments', arguments)
}

//  test('yunyin', 12)
// arg()//没有argument

//为何箭头函数无法get到this属性
//1。dom场景 callback
//<button id='btn'></button>
// const btn = document.querySelector('#btn');
// btn.addEventListener('click', function () {
//     this.style.width = '100%';
//     //此时的this指向btn dom元素
//     //换做箭头函数指向window
// })

//2箭头函数无法构造类
function Obj(teacher, leader) {
    this.teacher = teacher;
    this.leader = leader;
}
const Obj2 = (teacher, leader) => {
    this.teacher = teacher;
    this.leader = leader;
}

const o1 = new Obj('云隐', 'huangxiaoyang');
console.log(o1)

// const o2 = new Obj2('云隐', 'huangxiaoyang');//Obj2 is not a constructor
// console.log(o2)

//箭头函数能否构造原型上方法 无法
Obj.prototype.course = function () {
    console.log(`${this.teacher} & ${this.leader}`);
}
Obj.prototype.course2 = () => {
    console.log(`${this.teacher} & ${this.leader}`);
}
o1.course();//云隐 & huangxiaoyang
o1.course2()//undefined & undefined
