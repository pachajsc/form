import React from 'react'
import { Field, ErrorMessage } from 'formik'
import ValidationError from "./ValidationError"

function InputFile(props) {
    const { label, name, ...rest } = props
    const fileRef = React.useRef(null);

    const validateField = (niimporta) => {
        let errors
        if(!fileRef || fileRef.current.files.length === 0) {
            errors = `El campo ${name} es obligatorio`
        } 
        return errors      
    }

    return (
        <div className='form-control'>
        <Field name={name} validate={validateField} >
        {({ form, field }) => {
        const { setFieldValue } = form
        const { value } = field
        return (
            <>
            <label for="file">{label}</label>
            <input
            ref={fileRef}
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
