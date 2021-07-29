import dependenceManager from './manage'
//绑定依赖触发依赖 哪个变量变了
let counter = 1
class Observable {
    Id = 0
    constructor(v) {
        this.Id = `ob-${++counter}`;
        this.value = v;
    }
    get() {
        dependenceManager.collect()
        return this.value
    }
    set(v) {
        this.value = v
        this.trigger(this.Id)
    }
    //触发依赖执行
    trigger(Id) {
        dependenceManager.trigger(Id)
    }

}
export const observable = (target, key, descriptor) => {
    console.log(descriptor.initializer)
    const v = descriptor.initializer.call(this)
    const observable = new Observable()
    return {
        get() {
            return observable.get()
        },
        set(val) {
            return observable.set(val)
        }
    }
}
//收集依赖函数
export const autorun = (handler) => {
    dependenceManager.beginCollect(handler)
    handler()
    dependenceManager.endCollect()
}