import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd';
import 'antd/dist/antd.css'
// import { store } from '../App.js'
class Index extends React.Component {
    componentDidMount() {
        // let clear = store.subscribe(() => {
        //     this.setState({})
        // })
        // console.log(clear)
        //unsubscribe
    }
    componentDidUpdate() {
        // this.clear()//会清除回调不再更新
    }
    add() {
        const { dispatch } = this.props
        // store.dispatch({ type: 'incement' })
        dispatch({ type: 'incement' })
    }
    minus() {
        const { dispatch } = this.props
        // store.dispatch({ type: 'decrement' })
        dispatch({ type: 'decrement' })
    }
    changeColor() {
        const { dispatch } = this.props
        const a = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
        const c = Math.floor(Math.random() * 255)
        dispatch({ type: 'changeColor', color: `rgb(${a},${b},${c})` })
    }
    render() {
        // const state = store.getState()
        // console.log(this.props)
        const { count, color } = this.props;
        return (
            <div>
                {/* {state.count} */}
                {count}
                <Button onClick={() => { this.add() }}>+</Button>
                <Button onClick={() => { this.minus() }}>-</Button>
                <p style={{ color: color }}>Happy New Year</p>
                <Button onClick={() => { this.changeColor() }}>change color</Button>
            </div>

        )
    }
}
export default connect(state => {
    return state
}, dispatch => { return { dispatch } })(Index);
