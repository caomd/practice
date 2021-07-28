export function createStore(reducer) {
    let initState;
    const eventListener = []
    function getState() {
        return initState
    }
    function dispatch(action) {
        //将返回在state赋值给当前在initState
        initState = reducer(initState, action)
        //更新数据之后执行
        eventListener.forEach((fn) => fn && fn())
    }
    //可以定义多个
    function subscribe(fun) {
        //放到事件池中
        eventListener.push(fun)
        return (fn) => {
            eventListener.filter(item => item === fn)
        }
    }
    dispatch({})
    return {
        getState,
        dispatch,
        subscribe
    }
}