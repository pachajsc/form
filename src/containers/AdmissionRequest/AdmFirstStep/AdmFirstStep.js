import React from "react";
import { TextField, Grid, Button } from '@material-ui/core';
import FormControl from "../../../components-iebs/FormControl"
import FormField from "../../../components-iebs/FormField"

const AdmFirstStep = ({ nextFn, setForm, formValues }) => {
  const [values, setValues] = React.useState(Object.assign({name: "", surname: "", email: ""}, formValues));

  const onSubmit = values => {
    console.log('Form data', values)
    setValues(values);
    setForm(values);
    nextFn();
  };

  return(
    <>
    <FormControl initialValues={values} onSubmit={onSubmit} >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormField name="name" label="Nombre" type="text"/>
        </Grid>
        <Grid item xs={12}>
          <FormField name="surname" label="Apellido" type="text"/>
        </Grid>
        <Grid item xs={12}>
          <FormField typeControl="email"/>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" type="submit" style={{ marginTop: 25 }}>
            Continuar
        </Button>
      </Grid>
      
    </FormControl>
    </>
  )

  
}

export default AdmFirstStep