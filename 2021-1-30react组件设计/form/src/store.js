import { createStore } from './createStore.js'
// import { combineReducers } from 'redux'
import { combineReducers } from './combineReducer.js'
const initState = {
    count: 10,
    color: 'black'
}
function reducer(state = initState, action) {
    switch (action.type) {
        case 'incement':
            return { ...state, count: state.count + 1 }
        case 'decrement':
            return { ...state, count: state.count - 1 }
        case 'changeColor':
            return { ...state, color: action.color }
        default:
            return state
    }
}
function reducer2(state = initState, action) {
    switch (action.type) {
        case 'changeColor':
            return { ...state, color: action.color }
        default:
            return state
    }
}
// console.log(combineReducers({ countReducer: reducer, colorReducer: reducer2 }))
export const store = createStore(combineReducers({ countReducer: reducer, colorReducer: reducer2 }))