import React, { Component } from 'react'

class Count extends Component {
    state = {
        number: 0
    }
    inputRef = React.createRef()
    render() {
        let { number } = this.state;
        console.log('count', this.props)
        return <div>
            <input style={{ marginLeft: '30px' }}
                type="text"
                ref={this.inputRef}
                onChange={this.props.val.onChangeValue}
                value={this.props.val.value}
            />
            <button style={{ color: 'red' }} onClick={() => { this.setState({ number: number + 1 }) }}>+{this.state.number}</button>
        </div>
    }
}
function HocNumber(Comp) {
    // 
    class Temp extends Component {
        constructor() {
            super()
            this.state = {
                value: ''
            }
        }
        onChangeValue(e) {
            this.setState({ value: e.target.value })
        }
        render() {
            console.log(this.props)
            const { forwardRef } = this.props;
            const newProps = {
                ...this.props,
                age: '18',

            }
            const val = {
                value: this.state.value,
                onChangeValue: this.onChangeValue.bind(this)
            }
            return <Comp name={newProps} val={val} ref={forwardRef} />
        }
    }
    return React.forwardRef((props, ref) => {
        return <Temp forwardRef={ref} {...props} />
    })
}
Count = HocNumber(Count)

export default Count;