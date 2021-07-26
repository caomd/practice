const AsyncValidator = require('async-validator').default;
const descriptor = {
    username: [
        {
            required: true,
            message: 'username必填'
        },
        {
            min: 2,
            max: 20,
            message: 'username必须是2-20长度'
        }
    ]
}
const validator = new AsyncValidator(descriptor);
const data = {
    username: '1234'
}
validator.validate(data)
    .then(() => {
        console.log('passed')
    })
    .catch((error) => {
        const { errors } = error
        console.log(errors, 'errors')
    })