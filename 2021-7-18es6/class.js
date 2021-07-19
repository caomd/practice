class Course {
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
        if (val) {
            this._teacher = val
        }
    }
}
const course = new Course('yunyin', 'es6')

const course2 = new Course('yunyin2', 'es6')

console.log(course, course2)
course2.getCourse()
console.log(course.teacher)
course.teacher = 'YY'
console.log(course.teacher)
console.log(typeof Course)//function
console.log(Course.prototype)//Course{}
console.log(course.hasOwnProperty('teacher'))//true