import React from "react";
import { TextField, Grid, Button } from '@material-ui/core';
import FormControl from "../../../components-iebs/FormControl"
import FormField from "../../../components-iebs/FormField"


const AdmSecondStep =({ nextFn, submitForm, backFn, formValues }) => {
  const [values, setValues] = React.useState(Object.assign({ 
    age: "", 
    phone: ""
    }, 
    formValues));
  const [formKey, setFormKey] = React.useState(0);

  React.useEffect(() => {
    setFormKey(formKey + 1)
    if (formValues) setValues(formValues);
    else setValues({ age: "", phone: "" });
  },[formValues]);
  

  const onSubmit = values => {
    console.log('Form data', values)
    nextFn();
    submitForm(values);
  }
  
  return (
    <>
      <FormControl initialValues={values} onSubmit={onSubmit} key={formKey}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormField name="age" label="Edad" type="text" />
          </Grid>
          <Grid item xs={12}>
            <FormField name="phone" label="Telefono" type="text" />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="secondary" type="button" onClick={backFn} style={{ marginTop: 25 }}>
              Volver
          </Button>
          <Button variant="contained" color="primary" type="submit" style={{ marginTop: 25 }}>
              Continuar
          </Button>
        </Grid>

      </FormControl>
    </>
  )
}

export default AdmSecondStep