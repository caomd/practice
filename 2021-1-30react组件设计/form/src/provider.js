import React, { Component } from 'react'
import { MyContext } from './context.js'

export class Provider extends Component {
    render() {
        let { children, store } = this.props
        console.log(children, 'children')
        return (
            <MyContext.Provider value={store}>{children}</MyContext.Provider>
        )
    }
}
export function connect(mapStateToProps, mapDispatch) {
    return function (Comp) {
        return class Temp extends Component {
            constructor(props, context) {
                super(props, context)
                this.state = mapStateToProps(context.getState())
                this.dispatch = mapDispatch(context.dispatch)
            }
            static contextType = MyContext
            componentDidMount() {
                //监听更新渲染组件
                this.context.subscribe(() => {
                    this.setState(
                        mapStateToProps(this.context.getState())
                    )
                })
            }
            render() {
                console.log(this)
                return <Comp {...this.props} {...this.dispatch} {...this.state} />
            }
        }
    }
}
