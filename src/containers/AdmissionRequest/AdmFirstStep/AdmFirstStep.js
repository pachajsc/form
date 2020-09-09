import React from "react";
import { TextField, Grid, Button } from '@material-ui/core';
import FormControl from "../../../components-iebs/FormControl"
import FormField from "../../../components-iebs/FormField"
import { FormContext } from '../../../contexts/formContext';

const AdmFirstStep = ({ nextFn, formValues }) => {
  let resetForm;
  const context = React.useContext(FormContext);

  const [values, setValues] = React.useState(Object.assign({ 
    name: "", 
    surname: "", 
    email: ""
    }, 
    formValues));
  const [formKey, setFormKey] = React.useState(0);

  React.useEffect(() => {
    setFormKey(formKey + 1)
    if (formValues) setValues(formValues)
    else setValues({ name: "", surname: "", email: "" });
  },[formValues]);

  React.useEffect(() => {
    const { name, surname, email } = context.formValue;
    console.log('SE VAN A ACTUALIZAR LOS DATOS CON',name, surname, email)
    setValues({ name, surname, email });

    let isFormEmpty = true;
    Object.key(context.resetForm).map(fk => {
      if(context.formValues[fk] !== '') isFormEmpty = false;
      return fk;
    })
    if (resetForm) resetForm();
  },[context]);

  const onSubmit = values => {
    console.log('Form data', values)
    nextFn();
    context.updateFormValues(values, 1);

    // submitForm(values);
  }

  return (
    <>
      <FormControl initialValues={values} onSubmit={onSubmit} key={formKey} handleReset={resetForm}>
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