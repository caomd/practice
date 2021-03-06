import React from 'react'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
import { Provider } from './provider.js'
import { store } from './store.js'
import { Button, Calendar } from 'antd';
import 'antd/dist/antd.css'
import FormCreate from './Form';
import Index from './pages/index.js'
function App({ form }) {
  // console.log({ ...form })
  // const [value, setValue] = useState('')
  // console.log(value)
  return (
    <div className="App">
      <input
        // onInput={(e) => { setValue(e.target.value) }}
        {...form.getFieldProp('input1', {
          validator: [{
            required: true,
            message: 'username必填'
          },
          {
            min: 2,
            max: 20,
            message: 'username必须是2-20长度'
          }]
        })} />

      {/* React.Children.map(this.props.children, function (child) {
    return <li>{child}</li>;
}) */}
      <div>{form.getFieldError('input1').children}</div>
      <input
        // onInput={(e) => { setValue(e.target.value) }}
        {...form.getFieldProp('input2', {
          disabled(data) {
            return data.input1 === '123'
          }
        })} />
      <div>{form.getFieldError('input2').children}</div>
      <button
        onClick={(e) => { console.log({ ...form.getFieldValues() }) }}>
        提交一下
      </button>
      <Button>antdButon</Button>
      {/* <Calendar></Calendar> */}
      <Provider store={store}>
        <Index />
      </Provider>
    </div>
  );
}

export default FormCreate(App);
