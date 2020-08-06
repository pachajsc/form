import React from 'react'
import { Field, ErrorMessage } from 'formik'
import  Select from 'react-select';
import { phoneItems } from "../mock/country"
import ValidationError from "./ValidationError"

const formatOptionLabel = ({ label, iso3166_a2 }) => (
    <>
      <div style={{ display: "flex" }} >
        <div><span className={`flag-icon flag-icon-${iso3166_a2}`}></span> {label}</div>
      </div>
    </>
  );


function SelectCountries(props) {
    const { label, name, ...rest } = props
    const validateField = value => {
        let errors
        if(!value) {
            errors = `El campo ${name} es obligatorio`
        }
        return errors      
    }
    return (
        <div className='form-control'>
        <Field name={name}  validate={validateField}>
        {({ form, field }) => {
        const { setFieldValue } = form
        const { value } = field

        const SingleValue = props.singleValue || null;
        return (
            
            <Select

            formatOptionLabel={props.customOptionRender || formatOptionLabel}
            components={{ SingleValue }}
            options={phoneItems}
            placeholder={label} 
            id={name}
            {...field}
            {...rest}
            value={value}
            onChange={val => setFieldValue(name, val)}
            />
        )
        }}
        </Field>
        <ErrorMessage component={ValidationError} name={name}/>
        </div>
    )
}
export default SelectCountries
