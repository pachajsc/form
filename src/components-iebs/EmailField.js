import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextField from '@material-ui/core/TextField';
import ValidationError from "./ValidationError"
function EmailField({ ...rest}) { 
    const validateEmail = value => {
        let errors
        if(!value) {
            errors = 'Required'
            }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            errors = 'Invalid email format'
        }
        return errors      
    }
    return (

        <Field name="email" validate={validateEmail}>
            {({ field, form }) => (
                <>
                <TextField 
                    
                    variant="outlined"
                    htmlFor="email"
                    id="email"
                    label="email" 
                    error={form.errors.email && form.touched.email}
                    helperText={form.errors.email && form.touched.email ? form.errors.email : null}
                    {...rest} 
                    {...field} 
                    
                  
                />
                 
                </>
            )}
        </Field>
    )
}
export default EmailField
