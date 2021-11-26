var Dictionary = function () {
    var items = {}
    this.set = function (key, val) {
        items[key] = val
    }
    this.delete = function (key) {
        if (this.has(key)) {
            delete items[key]
            return true
        }
        return false
    }
    this.has = function (key) {
        return key in items
    }
    this.get = function (key) {
        return this.has(key) ? items[key] : undefined
    }
    this.getItems = function () {
        return items
    }
    this.clear = function () { items = {} }
    this.size = function () {
        return Object.keys(items).length
    }
    this.keys = function () {
        // var keys = []
        // for (let i in items) {
        //     if (items.hasOwnProperty(i)) {
        //         keys.push(i)
        //     }
        // }
        // return keys
        return Object.keys(items)
    }
    this.values = function () {
        var values = []
        for (let key in items) {
            //判断key确实存在而非继承来的
            if (items.hasOwnProperty(key)) {
                values.push(items[key])
            }
        }
        return values
        // return Object.values(items)
    }
}
var dictionary = new Dictionary()
dictionary.set('Gandalf', 'gandalf@email.com')
dictionary.set('John', 'john@email.com')
dictionary.set('Tyrion', 'tyrion@email.com')
console.log(dictionary.has('Tyrion'))
console.log(dictionary.keys())
console.log(dictionary.values())
console.log(dictionary.get('Tyrion'))
console.log(dictionary.delete('John'))
console.log(dictionary.keys())
console.log(dictionary.values())
console.log(dictionary.getItems())