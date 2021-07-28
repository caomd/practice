import React from 'react'
import { Button } from 'antd';
import 'antd/dist/antd.css'
import { store } from '../App.js'
class Index extends React.Component {
    componentDidMount() {
        let clear = store.subscribe(() => {
            this.setState({})
        })
        console.log(clear)
        //unsubscribe
    }
    componentDidUpdate() {
        // this.clear()//会清除回调不再更新
    }
    add() {
        store.dispatch({ type: 'incement' })
    }
    minus() {
        store.dispatch({ type: 'decrement' })
    }
    render() {
        const state = store.getState()
        return (
            <div>
                {state.count}
                <Button onClick={() => { this.add() }}>+</Button>
                <Button onClick={() => { this.minus() }}>-</Button>
            </div>

        )
    }
}
export default Index;
// export default function Index({ store }) {
//     console.log('props', store)
//     const state = store.getState()
//     console.log(state);
//     useEffect(() => {
//     }, []);
//     function handleClick() {
//         store.dispatch({ type: 'incement' })
//     }
//     return (
//         <div>
//             {state.count}
//             <Button onClick={() => { handleClick() }}>+</Button>
//         </div>

//     )

// }