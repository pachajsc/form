import React from 'react'
import { Field, ErrorMessage } from 'formik'
import ValidationError from "./ValidationError"

function InputFile(props) {
    const { label, name, ...rest } = props

    const validateField = files => {
        let errors
        if(!files) {
            errors = `El campo ${name} es obligatorio`
        } 
        return errors      
    }

    return (
        <div className='form-control'>
        <Field name={name} >
        {({ form, field }) => {
        const { setFieldValue } = form
        const { value } = field
        return (
            <>
            <label for="file">{label}</label>
            <input
            id={name} 
            type="file" 
            {...field}
            {...rest}
            value={value}
            onChange={(event) => {setFieldValue('file', event.currentTarget.files[0])}}
            />
            </>
        )
        }}
        </Field>
        <ErrorMessage component={ValidationError} name={name}/>
        </div>
    )
}
export default InputFile
