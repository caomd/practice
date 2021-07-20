// function Person() {
//     this.name = 1
//     return {}
// }
// var person = new Person()
// //person是一个空对象
// console.log('person', person)//{}
// console.log('name', person.name)//undefined 因为返回的对象

// function Person(){
//     this.name = 1
// }
// Person.prototype = {
//     show:function(){ 
//         console.log('name is',this.name )
//     }
// }
// var person = new Person()
// person.show()//name is 1

// function Person(){
//     this.name = 1
// }
// Person.prototype = {
//     name:2,
//     show: function(){
//         console.log('name is', this.name)
//     }
// }
// var person = new Person()
// Person.prototype.show = function(){
//     console.log('new show')
// }
// person.show()// new show

// function Person() {
//     this.name = 1
// }
// Person.prototype = {
//     name: 2,
//     show: function () {
//         console.log('name is', this.name)
//     }
// }
// var person = new Person()
// var person2 = new Person()
// person.show = function () {
//     console.log('new show')
// }
// person2.show()// name is 1
// person.show()// new show

function Person() {
    this.name = 1
}
Person.prototype = {
    name: 2,
    show: function () {
        console.log('name is', this.name)
    }
}
Person.prototype.show();//name is 2
(new Person()).show();//name is 1