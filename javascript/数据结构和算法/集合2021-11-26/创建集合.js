function Set() {
    let items = {}

    this.add = function (val) {
        if (!this.has(val)) {
            items[val] = val
            return true
        }
        return false
    }
    this.remove = function (val) {
        if (this.has(val)) {
            delete items[val]
            return true
        }
        return false
    }
    this.has = function (val) {
        // return val in items
        //更好的实现方式 对象是否具有特定的属性布尔值
        return items.hasOwnProperty(val)
    }
    this.clear = function () { items = {} }
    this.size = function () {
        //第一种方法 每次add length ++ remove length-- 返回length
        //第二种 Object.keys().length 返回给定对象的所有属性的数组 浏览器IE9以上
        return Object.keys(items).length
    }
    //第三种 手动提取items对象的每个属性，记录属性个数并返回这个数字
    this.sizeLegacy = function () {
        let count = 0
        for (let key in items) {
            //检查它们是否是对象自身的属性，避免重复计数 因为对象原型继承了额外的属性
            if (items.hasOwnProperty(key)) {
                ++count
            }
        }
        return count
    }
    //现代浏览器运行
    this.values = function () {
        let values = []
        for (let i = 0, key; key = Object.keys(items)[i++];) {
            values.push(items[key])
        }
        return values
    }
    //所有浏览器
    this.valuesLegacy = function () {
        let values = []
        for (let key in items) {
            if (items.hasOwnProperty(key)) {
                values.push(items[key])
            }
        }
        return values
    }
    //并集 //返回一个新集合 包含所有元素
    this.union = function (otherSet) {
        let unionSet = new Set()
        let values = this.values()
        //遍历加入到新集合中
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }
        values = otherSet.values()
        //合并第二个集合元素
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }
        return unionSet
    }
    //交集
    this.intersection = function (otherSet) {

    }
}


//示例 Set
let set = new Set()
set.add(1)
set.add(2)
set.add(3)
console.log(set.values())
// set.remove(2)
console.log(set.size())//Set { 1, 2 }
console.log(set.valuesLegacy())
let setB = new Set()
setB.add(3)
setB.add(4)
setB.add(5)
setB.add(6)
let unionAB = set.union(setB)
console.log(unionAB.values())