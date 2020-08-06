import React from 'react'
import { Field } from 'formik'
import TextField from '@material-ui/core/TextField';

function InputField(props) {
    const { label="inputLabel", name="inputName", ...rest } = props
    const validateField = value => {
        let errors
        if(!value) {
            errors = `El campo ${name} es obligatorio`
        }
        return errors      
    }
    return (
        <Field name={name} validate={props.textarea ? false : validateField}>
            {({ field, form }) => (
                <>
                {console.log("form field", form)}
                <div className={form.errors[name] && form.touched[name] ? "error-field" : form.submitCount === 1 ? "success-field" : null}>
                <TextField 
                    multiline={props.textarea ? true : false}
                    rows={props.textarea ? 4 : null}
                    variant="outlined"
                    htmlFor={name} 
                    id={name} 
                    label={label} 
                    error={form.submitCount === 1 && form.errors[name] ? form.touched[name] : null}
                    helperText={form.errors[name] && form.touched[name] && form.submitCount === 1 ? form.errors[name]: null}
                    {...rest} 
                    {...field} 
                />
                </div>
                </>
            )}
        </Field>
    )
}
export default InputField
