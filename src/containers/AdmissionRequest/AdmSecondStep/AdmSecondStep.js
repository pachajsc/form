import React from "react";
import { TextField, Grid, Button } from '@material-ui/core';
import { Check, Close } from '@material-ui/icons';
import useForm from "../../../helper/useForm"

const AdmSecondStep = ({ submitForm, nextFn, backFn }) => {
  const validateFn = (values) => {
    const error = {};
    error.field1 = (values.field1 === '') ? 'no tiene que estar vacio' : null;
    error.field2 = (values.field2 === '') ? 'no tiene que estar vacio' : null;
    error.field3 = (values.field3 === '') ? 'no tiene que estar vacio' : null;
    return error;
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
    formBody: { field1: "", field2: "", field3: "" },
  });
  //useForm

  return (
    <>
      <form>
        <Grid container>
          <Grid item xs={12}>
            {errors.field1 === null && (<Check className="validate-icon icon-success" />)}
            {errors.field1 && (<Close className="validate-icon icon-error" />)}
            <TextField onChange={(e) => handleChange('field1', e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            {errors.field2 === null && (<Check className="validate-icon icon-success" />)}
            {errors.field2 && (<Close className="validate-icon icon-error" />)}
            <TextField onChange={(e) => handleChange('field2', e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            {errors.field3 === null && ( <Check className="validate-icon icon-success" />)}
            {errors.field3 && (<Close className="validate-icon icon-error" />)}
            <TextField onChange={(e) => handleChange('field3', e.target.value)} />
          </Grid>
        </Grid>
        <div>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start">
            <div>
              <Button
                disabled={false}
                onClick={backFn}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Next
              </Button>
            </div>
          </Grid>
        </div>
      </form>
    </>
  )
}

export default AdmSecondStep