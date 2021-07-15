function exectFunction() {
    console.log(person)//undefined
    var person = 'xiaoxiao'//变量提升

    // console.log(person)//报错，person initialization
    // let person = 'enen'//let 没有变量提升
}
exectFunction()