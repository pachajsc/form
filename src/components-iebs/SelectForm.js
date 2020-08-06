import React from 'react'
import { Field, ErrorMessage } from 'formik'
import ValidationError from './ValidationError'
import { FormControl, Select } from '@material-ui/core';
function SelectForm(props) {
    const { label, name, options, ...rest } = props

    const validateSelect = value => {
        let errors
        if(!value) {
            errors = `El campo ${name} es obligatorio`
        }
        return errors      
    }
    return (
        <div className='form-control'>
            <FormControl variant={"outlined"}>
                <Field name={name} validate={validateSelect}>
                    {({ field, form }) => (
                        <Select id={name} error={form.errors[name] && form.touched[name]}  {...rest} {...field} native>
                            {options.map(option => {
                                return (
                                    <option key={option.value} value={option.value}>
                                        {option.key}
                                    </option>
                                )
                            })}
                        </Select>
                    )}
                </Field>
                <ErrorMessage component={ValidationError} name={name} />
            </FormControl>
        </div>
    )
}

export default SelectForm
