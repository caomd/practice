import React, { useReducer, useState, useEffect, useContext, useRef, useCallback, useMemo } from 'react'
// useState
// const Temp = () => {
//     //复合变量
//     const [counter, setValue] = useState(() => {
//         return {
//             name: 'xao',
//             age: 18
//         }
//     })
//     return <div>
//         {counter.name}{counter.age}
//         <button onClick={() => { setValue({ ...counter, age: counter.age + 1 }) }}>+</button >
//     </div >
// }
//useReducer
// const initState = {
//     name: 'haha',
//     age: 18
// }
// function reducer(initState, action) {
//     switch (action.type) {
//         case 'increment':
//             return { ...initState, age: initState.age + 1 }
//         case 'decrement':
//             return { ...initState, age: initState.age - 1 }
//         default:
//             return initState
//     }
// }
// const Temp = () => {
//     const [state, dispatch] = useReducer(reducer, initState)
//     return (
//         <div>
//             {state.name}{state.age}
//             <button onClick={() => { dispatch({ type: 'increment' }) }}>+increment</button>
//             <button onClick={() => { dispatch({ type: 'decrement' }) }}>-decrement</button>
//         </div >
//     )
// }
//useContext
// const ThemeContext = React.createContext()
// const theme = {
//     black: {
//         background: '#000',
//         color: '#fff'
//     },
//     pink: {
//         background: '#eee',
//         color: '#000'
//     }
// }
// function App() {
//     return <ThemeContext.Provider value={theme.pink}>
//         <Temp />
//     </ThemeContext.Provider>

// }
// const Temp = () => {
//     const ThemeCo = useContext(ThemeContext)
//     console.log(ThemeCo)
//     return (
//         <div>
//             <h1 style={{ background: ThemeCo.background, color: ThemeCo.color }}>测试样式</h1>
//         </div>
//     )
// }
// export default App;
//useRef
// const Temp = () => {
//     const inputRef = useRef()
//     function clickInput() {
//         console.log(inputRef)
//         inputRef.current.focus()
//     }
//     return <div>
//         <input type="text" ref={inputRef} />
//         <button onClick={() => { clickInput() }}>click me</button>
//     </div>
// }
//useCallback
// const Temp = () => {
//     const [val, setValue] = useState('')
//     const [num, setNum] = useState(0)
//     const getCount = useCallback(() => {
//         console.log(num)
//     }, [num])
//     return <div>
//         <div>val:{val}</div>
//         <input type="text" onChange={(e) => { setValue(e.target.value) }} />
//         <button onClick={() => { setNum(num + 1) }}>+</button>
//         <h1>num:{num}</h1>
//         <Child getCount={getCount} />
//     </div>
// }
//第一种优化
// const Child = React.memo((props) => {
//     console.log(props)
//     console.log('child')
//     return (
//         <div>1</div>
//     )
// })
//2
// const Child = React.memo((getCount) => {
//     console.log(getCount)
//     console.log('child')
//     return (
//         <div>1</div>
//     )
// })
//useMemo
// const Temp = () => {
//     const [val, setValue] = useState('')
//     const [num, setNum] = useState(0)
//     const getCount = useCallback(() => {
//         console.log(num)
//     }, [num])
//     const expensive = useMemo(() => {
//         console.log('sum')
//         let sum = 0;
//         for (let i = 0; i < num * 100; i++) {
//             sum += i
//         }
//         return sum
//     }, [num])
//     return <div>
//         <div>val:{val}</div>
//         <input type="text" onChange={(e) => { setValue(e.target.value) }} />
//         <button onClick={() => { setNum(num + 1) }}>+</button>
//         <h1>num:{num}</h1>
//         <h2>{expensive}</h2>
//         <Child getCount={getCount} />
//     </div>
// }
//自定义
function useCutDown(init = 60) {
    const [count, setCount] = useState(init)
    useEffect(() => {
        let timer = setInterval(() => {
            if (count <= 0) {
                clearInterval(timer)
                return
            }
            setCount(count - 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        };
    }, [count]);
    return count
}
const Temp = () => {
    const counter = useCutDown(5)
    return <h1>{counter}</h1>
}
export default Temp