import React from 'react'
import { Field, ErrorMessage } from 'formik'
import ValidationError from './ValidationError'
import Radio from '@material-ui/core/Radio';

function RadioGroup (props) {
  const { label, name, options, ...rest } = props
  
  return (
    <div className='form-control'>
      <label>{label}</label>
      <Field name={name}>
        {({ field }) => {
          return options.map(option => {
            return (
              <React.Fragment key={option.key}>
                <Radio
                  type='Radio'
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
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

export default RadioGroup
