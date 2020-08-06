import React from 'react'
import { Field, ErrorMessage } from 'formik'
import ValidationError from './ValidationError'
import Checkbox from '@material-ui/core/Checkbox';

function CheckboxGroup (props) {
  const { label, name, options, ...rest } = props
  
  return (
    <div className='form-control'>
      <label>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          return options.map(option => {
            return (
              <React.Fragment key={option.key}>
                <Checkbox
                  type='checkbox'
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            )
          })
        }}
      </Field>
      <ErrorMessage component={ValidationError} name={name} />
    </div>
  )
}

export default CheckboxGroup
