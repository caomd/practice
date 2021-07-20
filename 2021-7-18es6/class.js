//助力js更加面向对象
class Course {
    constructor(teacher, name) {
        this._teacher = teacher;
        this.name = name;
    }
    getCourse() {
        console.log(this.teacher, this.name)
    }
    //没有set就是只读
    get teacher() {
        return this._teacher
    }
}
const course = new Course('yunyin', 'es6')
console.log('-----------js建立只读变量，修改只读变量，不会报错，无法修改')
console.log(course.teacher, '555修改之前')//yunyin
course.teacher = 'YY'
console.log(course.teacher, '修改之后')//yunyin
console.log(typeof Course)//function
console.log(Course.prototype)//Course{}
console.log(course.hasOwnProperty('_teacher'))//true
class Course2 {
    constructor(teacher, name) {
        this._teacher = teacher;
        this.name = name;
    }
    getCourse() {
        console.log(this.teacher, this.name)
    }
    get teacher() {
        return this._teacher
    }
    set teacher(val) {
        this._teacher = val
    }
}
const course2 = new Course2('yunyin2', 'es6')
console.log('----------------courese2,可以赋值')
console.log(course, course2)
course2.getCourse()
console.log(typeof Course2)//function
console.log(Course2.prototype)//Course{}
console.log(course2.hasOwnProperty('_teacher'))//true
console.log(course2.teacher, '修改之前')//yunyin2
course2.teacher = 'YY'
console.log(course2.teacher, '修改之后')//YY

console.log('----------使用闭包私有化');
class Course3 {
    constructor(teacher, name) {
        this._teacher = teacher;
        this.name = name;
        let _course = name;
        this.getCourse = () => {
            console.log(this.teacher, this.name)
            return _course;
        }
    }

    get teacher() {
        return this._teacher
    }
    set teacher(val) {
        this._teacher = val
    }
}
const course3 = new Course3('yunyin3', 'es6');
console.log(course3.hasOwnProperty('_teacher'))//true
console.log('修改之前')
console.log(course3.getCourse())//es6
course3._course = 'YY'
console.log('修改之后')
console.log(course3.getCourse())//es6

class Course4 {
    #course = 'es6';//#加变量==》私有属性
    constructor(teacher, name) {
        this._teacher = teacher;
    }

    get course() {
        return `${course}~`
    }
    //删掉set 变成只读
    set course(val) {
        if (val) {//值有效
            this.#course = val;
        }
    }
}
const course4 = new Course4('yunyin4', 'es5');
console.log('-----------#私有属性')
console.log(course4.course, 'xiugaqian')
course4.course = 'es9';
console.log(course4.course, '修改后');

//封装核心 适配器模式
// class Utils {
//     constructor(core) {
//         this._main = core;
//         this._name = 'Myname';
//     }
//     get name() {
//         ${...this._main.name },
//         name:${ this._name }//用自己的覆盖原接口的
//     }
//     set name(val) {
//         this._name = val;
//     }
// }

//静态方法 直接挂载，无需实例化
function Course1(name, teacher) {
    this.name = name;
    this.teacher = teacher;
}
Course1.call = function () {
    console.log('calling')
}

//Es6
class Course22 {
    constructor(name, teacher) {
        this.name = name;
        this.teacher = teacher;
    }
    static call() {
        console.log('calling')
    }
    send() {
        console.log('sengding')
    }
}
//继承
class Child extends Course22 {
    constructor() {
        super('yunyinchild', 'es6')
    }
    start() {
        console.log('starting')
    }
}
console.log('----------------class继承functon的语法糖')
const pare = new Course22('huang', 'haha');
const chiod = new Child();
const chiod2 = new Child();
console.log(pare, chiod)
pare.send();
Course22.call();
chiod.start();
chiod.send();//sending
Child.call();//calling
console.log(chiod === chiod2)//false
console.log(chiod.send === chiod2.send)//true