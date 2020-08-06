import React from "react";
import { Field } from 'formik'
import { phoneItems } from "../mock/country"
import FormField from "./FormField"
import { ExpandMore } from '@material-ui/icons';
import { TextField, Typography } from '@material-ui/core';
import SelectCountries from "./SelectCountries"

const InputSelectPhone = ({
  countryValue,
  countryPhone,
  name,
  value,
  label,
  ...rest

}) => {
  console.log('InputSelectPhone', countryValue,
    countryPhone,
    name,
    value,
    label)
  const [activeSelect, setactiveSelect] = React.useState(false);
  const handleSelectChange = () => {
    setactiveSelect(true);
  };

  React.useEffect(() => {
    if (countryValue && countryValue.countryPhone !== "") {
      setactiveSelect(false);
    }
  }, []);
  const validateField = value => {
    let errors
    if (!value) {
      errors = `El campo ${name} es obligatorio`
    }
    return errors
  }

  const SingleValue = ({
    cx,
    getStyles,
    selectProps,
    data,
    isDisabled,
    className,
    ...props
  }) => {
    console.log(props);
    return (
      <div style={{ display: "flex" }} >
        <div><span className={`flag-icon flag-icon-${data.iso3166_a2}`} /></div>
        { /* <div>{data.value.replace(/0/g, '')}</div> */ }
        <div>{parseInt(data.value)}</div>
      </div>
    );
  };

  return (
    <>
      <>
        <div className="content-form-box">
          <div className={`${ !activeSelect ? 'value-country-number' : ''}`}>
            <Typography variant="body1" component="p" >
              <SelectCountries
                onMenuOpen={() => {
                  setactiveSelect(true)
                }}
                onMenuClose={() => {
                  setactiveSelect(false)
                }}
                label='Select a country'
                name='countryPhone'
                singleValue={SingleValue}
                customOptionRender={({ label, iso3166_a2 }) => (
                  <>
                    <div style={{ display: "flex" }} >
                      <div><span className={`flag-icon flag-icon-${iso3166_a2}`} />{label}</div>
                    </div>
                  </>
                )}
              />
            </Typography>
          </div>
          <Field name={name} validate={validateField}>
            {({ form, field }) => {
              return (
                <TextField
                  variant="outlined"
                  htmlFor={name}
                  id={name}
                  label={label}
                  error={form.errors[name] && form.touched[name]}
                  helperText={form.errors[name] && form.touched[name] ? form.errors[name] : null}
                  {...rest}
                  {...field}
                />
              )
            }}
          </Field>
        </div>
      </>

    </>
  )
}

export default InputSelectPhone;