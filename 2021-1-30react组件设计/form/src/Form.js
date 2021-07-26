import React from 'react';
import AsyncValidator from 'async-validator'
export default function FormCreate(WrappedCom) {
    const store = {}
    return function Form() {
        const getFieldProps = (fieldKey, options) => {
            // console.log(options)
            return {
                key: fieldKey,
                onInput: e => {
                    const value = e.target.value;
                    store[fieldKey] = store[fieldKey] || {};
                    store[fieldKey].value = value;
                    // console.log(options.validator, '/')
                    console.log(value)
                    const validator = new AsyncValidator({ [fieldKey]: options.validator })
                    validator.validate({ [fieldKey]: value })
                        .then(() => {
                            store[fieldKey].errors = null
                        }).catch((error) => {
                            const { errors } = error;
                            console.log(errors)
                            store[fieldKey].errors = errors.map(error => error.message).join(',')
                        })
                        .then(() => {

                        })
                }
            }
        }
        const getFieldValues = () => {
            return store
        }
        const getFieldError = (fieldKey) => {
            const err = store[fieldKey] && store[fieldKey].errors
            return {
                children: err
            }
        }
        const form = {
            getFieldProp: getFieldProps,
            getFieldValues,
            getFieldError
        }
        return <WrappedCom form={form} />
    }
}
