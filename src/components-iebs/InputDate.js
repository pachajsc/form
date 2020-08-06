import React from "react";
import DateFnsUtils from '@date-io/date-fns';
import { Field, ErrorMessage } from 'formik'
import es from "date-fns/locale/es";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const InputDate = (props) => {
  const { label, name, ...rest } = props

  const validateFieldDate = value => {
    let errors
    if (!value) {
      errors = `El campo ${name} es obligatorio`
    }
    return errors
  }


  return (

    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={es} >
      <Field name={name} validate={validateFieldDate}>
        {({ form, field }) => {
          const { setFieldValue } = form
          const { value } = field
          return (
            <KeyboardDatePicker
              autoOk
              htmlFor={name}
              variant="inline"
              inputVariant="outlined"
              label={label}
              format="MM/dd/yyyy"
              InputAdornmentProps={{ position: "start" }}
              id={name}
              {...field}
              {...rest}
              value={value}
              onChange={val => setFieldValue(name, val)}
              error={form.errors[name] && form.touched[name]}
              helperText={form.errors[name] && form.touched[name] ? form.errors[name] : null}
            />
          )
        }}
      </Field>
    </MuiPickersUtilsProvider>

  );
};
export default InputDate;
