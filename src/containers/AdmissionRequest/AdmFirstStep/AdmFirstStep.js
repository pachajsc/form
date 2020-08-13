import React from "react";
import { TextField, Grid, Button } from '@material-ui/core';
import FormControl from "../../../components-iebs/FormControl"
import FormField from "../../../components-iebs/FormField"

const AdmFirstStep = ({ nextFn, submitForm, formValues }) => {
  const [_formValues, _setFormValues] = React.useState(formValues || { name: "", surname: "", email: "" });
  const [formKey, setFormKey] = React.useState(0);

  React.useEffect(() => {
    setFormKey(formKey + 1)
    if (formValues) _setFormValues(formValues)
    else _setFormValues({ name: "", surname: "", email: "" });
  },[formValues]);

  const onSubmit = values => {
    console.log('Form data', values)
    nextFn();
    submitForm(values);
  }

  return (
    <>
      <FormControl initialValues={_formValues}  onSubmit={onSubmit} key={formKey}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormField name="name" label="Nombre" type="text" />
          </Grid>
          <Grid item xs={12}>
            <FormField name="surname" label="Apellido" type="text" />
          </Grid>
          <Grid item xs={12}>
            <FormField typeControl="email" />
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