/*
 * @Author: caomd 
 * @Date: 2021-12-16 09:03:36 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-16 09:17:09
 */
var clone = function (object) {
    function F() { }
    F.prototype = object
    return new F
}
var CompoundObject = {
    string1: 'default value',
    childObject: {
        bool: true,
        num: 10
    }
}
//bad approach changes the value of Compound.childObject.num
var compoundObjectClone = clone(CompoundObject)
// compoundObjectClone.childObject.num = 5
// console.log(CompoundObject.childObject.num)
//better create a new object,but compoundObject must know the structure
compoundObjectClone.childObject = {
    bool: true,
    num: 5
}
console.log(CompoundObject.childObject.num)//10
console.log(compoundObjectClone.childObject.num)//5

//best approach uses a method to create a new object with the same structure and defauts as the original
var Compound = {}
Compound.string1 = 'default value'
Compound.createChildObject = function () {
    return {
        bool: true,
        num: 10
    }
}
Compound.childObject = Compound.createChildObject()
Compound.childObject.num = 5
console.log(Compound.childObject.num)//5
