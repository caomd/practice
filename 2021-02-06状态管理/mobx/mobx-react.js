import { autorun } from './observable'
var ReactMixin = {
    componentWillMount: function () {
        autorun(() => {
            this.render()
            this.forceUpdate()
        })
    }
}
export function observer(target) {
    const targetCWM = target.prototype.componentWillMount;
    target.prototype.componentWillMount = function () {
        targetCWM && targetCWM.call(this);
        ReactMixin.componentWillMount.call(this);
    }
}
