import React from "react";
import { TextField, Grid, Button } from '@material-ui/core';
import { Check, Close } from '@material-ui/icons';
import useForm from "../../../helper/useForm"
import {
  helperValidateAge,
  helperValidatePhone,
} from "../../../helper/formValidation";
const AdmSecondStep = ({ setForm, formValues, nextFn, backFn }) => {
  // SetForm guarda en el padre el form2
  // formValues seria el objeto que el padre le da para pre cargar el formulario
  // re hacer el form sin useFOrm. 

  const validateFn = (values) => {
  let errors = {};
  helperValidateAge(errors, values.age);
  helperValidatePhone(errors, values.phone);
  return errors;
  }
  //useForm
  const { handleChange, handleSubmit, values, errors, validate } = useForm({
    callback: (values) => {
      setForm(values);
      nextFn();
    },
    onChange: validateFn,
    errorsCallback: (values) => (values),
    validate: validateFn,
    formBody: { age: "", phone: "" },
  });
  //useForm

  return (
    <>
      <form>
        <div className="animate-fade-in">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {errors.age === null && (<Check className="validate-icon icon-success" />)}
              {errors.age && (<Close className="validate-icon icon-error" />)}
              <TextField type="*number" helperText={errors.age} label="edad" autoFocus onChange={(e) => handleChange('age', e.target.value)} className={errors.age !== null ? "error-field" : "success-field"} error={errors.age} variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              {errors.phone === null && (<Check className="validate-icon icon-success" />)}
              {errors.phone && (<Close className="validate-icon icon-error" />)}
              <TextField type="*number" helperText={errors.phone} label="telefono" onChange={(e) => handleChange('phone', e.target.value)} className={errors.phone !== null ? "error-field" : "success-field"} error={errors.phone} variant="outlined" />
            </Grid>
            
          </Grid>
          <div className="mt-4">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
            
                <Button
                  disabled={false}
                  onClick={backFn}
                  variant="outlined" color="primary"
                >
                  Atras
              </Button>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                  Continuar
              </Button>
             
            </Grid>
          </div>
        </div>
      </form>
    </>
  )
}

export default AdmSecondStep