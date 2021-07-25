import React, { Component } from 'react'

class Count extends Component {
    state = { name: 'Asa' }
    render() {
        console.log('count', this.props)
        return <div>count
            <h1>{this.state.name}</h1>
        </div>
    }
}

function MyContainer(WrappedComponent) {
    return class Temp extends WrappedComponent {
        state = {
            age: '18',
            ...this.state
        }
        render() {
            console.log(this.props, this.state)
            // if (this.props.show) {
            //     return super.render()
            // }
            // return null
            //2新建树

            if (this.props.isShow) {
                const elementsTree = super.render()
                // console.log(elementsTree.props)//{children:'count'}
                const newProps = { age: '18' }
                const props = Object.assign({}, elementsTree.props, newProps)
                console.log('newProps', props)
                const newTree = React.cloneElement(elementsTree, props, [elementsTree.props.children,
                <span id="2">新建树</span>,
                <span onClick={() => { this.setState({ name: 'Hello' }) }}>click me</span>
                ])
                return newTree
            }
            return null
        }
    }
}

Count = MyContainer(Count)
export default Count;