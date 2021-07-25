import React from 'react'

const withTooltip = ( Component ) => { //通过函数包装一下
  class HOC extends React.Component {
    state ={
      showToolTip : false,
      content : ''
    }

    handleOver = (ev) => this.setState({showToolTip: true, content : ev.target.innerText}) //移入移出的展示

    handleOut = () => this.setState({showToolTip : false, content : ''}) //移入移出的展示

    render() {
      return(
        <div onMouseOver={this.handleOver} onMouseOut={this.handleOut}>
          <Component action={this.state} {...this.props} />
        </div>
      )
    }
  }

  return HOC
}
 
export default withTooltip;
 