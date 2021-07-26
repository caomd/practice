import React, { Component } from 'react'
import FormCreate from './Form';
function App({ form }) {
  console.log({ ...form })
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
    </div>
  );
}

export default FormCreate(App);
