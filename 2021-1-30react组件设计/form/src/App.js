import React, { useState } from 'react'
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
      <div>{...form.getFieldError('input1')}</div>
      <input
        // onInput={(e) => { setValue(e.target.value) }}
        {...form.getFieldProp('input2')} />
      <button
        onClick={(e) => { console.log({ ...form.getFieldValues() }) }}>
        提交一下
      </button>
    </div>
  );
}

export default FormCreate(App);
