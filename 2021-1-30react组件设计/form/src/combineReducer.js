export function combineReducers(obj = {}) {
    console.log(obj)
    return function (state={}, action) {
        Object.keys(obj).forEach(key => {
            state[key] = obj[key](state[key], action)
        })
        return state
    }
}