import React from 'react'
import { Button } from 'antd'
import { autorun } from 'mobx'
import store from './store/index'
import { observer, Provider } from 'mobx-react'
import Count from '../pages/index_mbox'
// @observer
class Mobx extends React.Component {
    // add() {
    //     countStore.add()
    //     // countStore.count += 1;//也可以
    // }
    //@observer监听了
    componentWillMount() {
        autorun(() => {//依赖里面在数据
            this.setState({})
            console.log(store.colorStore.color)//不加这句不会渲染
        })
    }
    changeColor() {
        store.colorStore.changeColor()
    }
    render() {
        // return <div>
        //     mobx
        //     <div>{countStore.count}</div>
        //     <div>total:{countStore.total}</div>
        //     <Button onClick={() => this.add()}>+</Button>
        // </div>
        // console.log(store,this,'00')
        return (
            <Provider {...store}>
                <Count />
                <div style={{ color: `${store.colorStore.color}` }}>Hello Mobx</div>
                <Button onClick={() => this.changeColor()}>changeColor</Button>
            </Provider>
        )
    }
}
export default Mobx