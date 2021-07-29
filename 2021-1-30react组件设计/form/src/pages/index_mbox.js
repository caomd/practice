import React from 'react'
import { inject, observer } from 'mobx-react'
// import countStore from '../mobx/store/count'
import { Button } from 'antd';
@inject('countStore')
@observer
class Count extends React.Component {
    add() {
        this.props.countStore.add()
        // countStore.count += 1;//也可以
    }
    render() {
        console.log(this.props)
        const {countStore} = this.props
        return <div>
            mobx
            <div>{countStore.count}</div>
            <div>total:{countStore.total}</div>
            <Button onClick={() => this.add()}>+</Button>
        </div>
    }
}
export default Count