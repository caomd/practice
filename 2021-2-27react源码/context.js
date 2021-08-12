class Parent extends React.Component {
    state = {
        childContext: '123'
    }
    getChildContext{
    return {
        value: this.state.childContext
    }
}
}

class Child extends React.Component {
    //想要在上层组件拿到哪些属性的声明，不然拿不到，这里没有的就获取不到
    //上层组件可能不止一个 
    Child.contextTypes = {
        value: PropTypes.string
    }


    //必须声明 
    Parent.childContextType = {
        value: ProtoTypes.string
    }
}

export default () => {
    <Parent>
        <Child></Child>
    </Parent>
}