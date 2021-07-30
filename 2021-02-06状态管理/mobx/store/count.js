import { observable, computed, action, autorun, makeObservable } from 'mobx'
class Counter {
    constructor() {
        makeObservable(this)
    }
    @observable count = 0
    @action.bound add() {
        this.count += 1;
    }
    @computed get total() {
        return this.count * 100
    }
}
const countStore = new Counter()
export default countStore