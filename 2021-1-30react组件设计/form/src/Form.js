import React, { Component } from 'react';
import AsyncValidator from 'async-validator'
export default function FormCreate(WrappedCom) {
    const store = {}
    return class Form extends Component {
        getFieldProps = (fieldKey, options = {}) => {
            // console.log(options)
            return {
                key: fieldKey,
                onInput: e => {
                    const value = e.target.value;
                    store[fieldKey] = store[fieldKey] || {};
                    store[fieldKey].value = value;
                    // console.log(options.validator, '/')
                    // console.log(value)
                    if (options.validator) {
                        const validator = new AsyncValidator({ [fieldKey]: options.validator })
                        validator.validate({ [fieldKey]: value })
                            .then(() => {
                                store[fieldKey].error = null
                            }).catch((error) => {
                                const { errors } = error;
                                console.log(errors)
                                store[fieldKey].error = errors.map(error => error.message).join(',')
                            })
                            .then(() => {
                                this.forceUpdate()
                            })
                    }

                }
            }
        }
        getFieldValues = () => {
            // console.log(store)
            return Object.keys(store).reduce((memo, current) => {
                return {
                    ...memo,
                    [current]: store[current].value
                }
            }, {})
            // return store
        }
        getFieldError = (fieldKey) => {
            const err = store[fieldKey] && store[fieldKey].error
            // console.log(err)
            return {
                children: err
            }
        }
        render() {
            const form = {
                getFieldProp: this.getFieldProps,
                getFieldValues: this.getFieldValues,
                getFieldError: this.getFieldError
            }
            return <WrappedCom form={form} />
        }
    }
}
