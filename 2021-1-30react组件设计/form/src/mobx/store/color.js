import { observable, computed, action, autorun, makeObservable } from 'mobx'
class Color {
    constructor() {
        makeObservable(this)
    }
    @observable color = `rgb(0,0,0)`
    @action.bound changeColor() {
        const a = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
        const c = Math.floor(Math.random() * 255)
        this.color = `rgb(${a},${b},${c})`
    }
    @computed get total() {
        return this.count * 100
    }
}
const colorStore = new Color()
export default colorStore