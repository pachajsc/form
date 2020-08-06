import React from "react";
import { TextField, Grid, Button } from '@material-ui/core';
import { Check, Close } from '@material-ui/icons';
import useForm from "../../../helper/useForm"
import {
  helperValidateName,
  helperValidateSurname,
  helperValidateEmail,
} from "../../../helper/formValidation";
const AdmFirstStep = ({ submitForm, nextFn, formValues = { name: "", surname: "", email: "" } }) => {
  const validateFn = (values) => {
    let errors = {};
    helperValidateName(errors, values.name);
    helperValidateSurname(errors, values.surname);
    helperValidateEmail(errors, values.email);
    return errors;
  }
  //useForm
  const { handleChange, handleSubmit, values, errors, validate } = useForm({
    callback: (values) => {
      submitForm(values);
      nextFn();
    },
    onChange: validateFn,
    errorsCallback: (values) => (values),
    validate: validateFn,
    formBody: formValues,
  });
  //useForm

  return (
    <>
      <form>
        <div className="animate-fade-in">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {errors.name === null && (<Check className="validate-icon icon-success" />)}
              {errors.name && (<Close className="validate-icon icon-error" />)}
              <TextField label="*nombre" helperText={errors.name} autoFocus value={values.name} onChange={(e) => handleChange('name', e.target.value)} className={errors.name !== null ? "error-field" : "success-field"} error={errors.name} variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              {errors.surname === null && (<Check className="validate-icon icon-success" />)}
              {errors.surname && (<Close className="validate-icon icon-error" />)}
              <TextField label="*apellido" helperText={errors.surname} value={values.surname} onChange={(e) => handleChange('surname', e.target.value)} className={errors.surname !== null ? "error-field" : "success-field"} error={errors.surname} variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              {errors.email === null && (<Check className="validate-icon icon-success" />)}
              {errors.email && (<Close className="validate-icon icon-error" />)}
              <TextField label="*email" helperText={errors.email} value={values.email} onChange={(e) => handleChange('email', e.target.value)} className={errors.email !== null ? "error-field" : "success-field"} error={errors.email} variant="outlined" />
            </Grid>
          </Grid>
          <div className="mt-4">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
             
                <Button variant="contained" color="primary" onClick={handleSubmit} >
                  Continuar
              </Button>
             
            </Grid>
          </div>
        </div>
      </form>
    </>
  )
}

export default AdmFirstStep