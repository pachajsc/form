import React from 'react';
import axios from 'axios';
import { phoneItems } from "../../mock/country"
import { Check, Close } from '@material-ui/icons';
import InputPhone from "../../components/InputPhone";

import {
  helperValidateProgram,
  helperValidateName,
  helperValidateSurname,
  helperValidateEmail,
  helperValidateAge,
  helperValidatePhone,
  helperValidateAccept
} from "../../helper/formValidation";
import { Alert } from '@material-ui/lab';
import useForm from "../../helper/useForm"
import { TextField,Radio, RadioGroup,FormControlLabel, Button, Checkbox, Typography, Grid, FormControl, InputLabel, Link, Select } from '@material-ui/core';

//validate
function formValidateFn(values) {
  let errors = {};
  //helperValidateProgram(errors, values.programa_id);
  helperValidateName(errors, values.firstName);
  helperValidateSurname(errors, values.lastName);
  helperValidateEmail(errors, values.email);
  helperValidateAge(errors, values.birthDay);
  helperValidatePhone(errors, values.phoneNumber)
  helperValidateAccept(errors, values.source);

  return errors;
}
//validate

const RequestInfo = (props) => {
 
  const [notification, setNotification] = React.useState({ active: false });
  const [notificationError, setNotificationError] = React.useState({ active: false });
  const [file, setFile] = React.useState(null);

  //useForm
  const { handleChange, handleChecked, handleSubmit, values, errors, validate } = useForm({
    callback: formValidated,
    errorsCallback: (values) => (values),
    validate: formValidateFn, // TODO PONER VALIDADOR
    formBody: {
      //programa_id: "", 
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      birthDay: "",
      gender: "",
      //phoneItem: phoneItems[0],
      //comentario: "Estoy interesado en recibir el folleto de este programa y quiero preguntar...",
      terminos: "",
      file: null
    },
  });
  //useForm

  //file
  // const onChangeHandler = event => {
  //   setFile(event.target.files[0])
  //   const dataFile = {
  //     file: file.name,
  //     name: "this is a test",
  //     main: true
  //   }
  //   axios.post(`http://64.227.11.198/api/file/`, { dataFile })
  //   .then(response => console.log(response))
  //   .catch(err => setNotificationError({active:true}));
  // }
  // console.log(file)
  //file
 
  const onChangeHandler = event => {
       setFile(event.target.files[0])
  }
  //data
  function formValidated(dataFile) {
    setNotification({ active: true });
    console.log(file)

    const data = {
      //programa_id: values.programa_id,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      birthDay: values.birthDay,
      //phoneItem: values.phoneItem,
      phoneNumber: values.phoneNumber,
      //comentario: values.comentario,
      gender: values.gender,
      source: values.source === true ? "UTIE" : false,
      file: {file:file.name, name:"test", main:true},
    };

    axios.post(`http://64.227.11.198/api/customer-information/`, data)
      .then(response => console.log(response))
      .catch(err => setNotificationError({ active: true }));
  }
  //data




  return (
    <>

      {/* {JSON.stringify(values, null, 2)} */}
      <form onSubmit={handleSubmit}>

        <Grid container spacing={3}>
          {/* <Grid item xs={12}>
            <FormControl variant="outlined" className={errors.programa_id === null ? "success-field" : null}>
              {errors.programa_id === null && <Check className="validate-icon icon-success" />}
              {errors.programa_id && <Close className="validate-icon icon-error" />}
              <InputLabel htmlFor="outlined-age-native-simple">Escoge un programa</InputLabel>
              <Select
                native
                className={errors.programa_id && "error-field"}
                error={errors.programa_id && true}
                name="programa_id"
                id="selector_programa"
                value={values.programa_id}
                onChange={(e) => handleChange('programa_id', e.target.value)}
                label="Escoge un programa"
                inputProps={{
                  name: 'programa_id',
                  id: 'outlined-age-native-simple',
                }}

              >
                <option aria-label="None" value="" />
                <option value={2022}>Maestría en Administración de Negocios</option>
                <option value={1541}>Maestría en Marketing & Digital Business</option>
                <option value={2021}>Maestría en Mercadotecnia Digital</option>
                <option value={2020}>Maestría MBA en Negocios Digitales</option>
              </Select>
              <Typography variant="caption" defaultValue="Success" color="error" className="error-select" component="p">{errors.programa_id}</Typography>
            </FormControl>
          </Grid>  */}
          <Grid item xs={12}>
            {errors.firstName === null && <Check className="validate-icon icon-success" />}
            {errors.firstName && <Close className="validate-icon icon-error" />}
            <TextField error={errors.firstName && true} helperText={errors.firstName} onChange={(e) => handleChange('firstName', e.target.value)} name="firstName" id="utie_ampliado_pack_firstName" label={"Tu nombre:"} variant="outlined" className={errors.firstName !== null ? "error-field" : "success-field"} />
          </Grid>
          <Grid item xs={12}>
            {errors.lastName === null && <Check className="validate-icon icon-success" />}
            {errors.lastName && <Close className="validate-icon icon-error" />}
            <TextField error={errors.lastName && true} helperText={errors.lastName} onChange={(e) => handleChange('lastName', e.target.value)} label={"Tu apellido:"} variant="outlined" name="lastName" id="utie_ampliado_pack_lastName" className={errors.lastName !== null ? "error-field" : "success-field"} />
          </Grid>
          <Grid item xs={12}>
            {errors.email === null && <Check className="validate-icon icon-success" />}
            {errors.email && <Close className="validate-icon icon-error" />}
            <TextField error={errors.email && true} helperText={errors.email} onChange={(e) => handleChange('email', e.target.value)} label={"Tu email:"} variant="outlined" name="email" id="utie_ampliado_pack_email" className={errors.email !== null ? "error-field" : "success-field"} />
          </Grid>
          <Grid item xs={12}>
            <InputPhone success={errors.phoneNumber === null} error={errors.phoneNumber} onChangeSelect={(phoneItem) => handleChange('phoneItem', phoneItem)} onChangeInput={(e) => handleChange('phoneNumber', e.target.value)} countryValue={values.phoneItem || 0} phoneValue={values.phoneNumber} errors={errors} />
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" className={errors.birthDay === null && "success-field"}>
              {errors.birthDay === null && <Check className="validate-icon icon-success" />}
              {errors.birthDay && <Close className="validate-icon icon-error" />}
              <InputLabel htmlFor="outlined-age-native-simple">Selecciona tu edad</InputLabel>
              <Select
                native
                error={errors.birthDay && true}
                className={errors.birthDay && "error-field"}
                name="birthDay"
                id="utie_ampliado_pack_birthDay"
                onChange={(e) => handleChange('birthDay', e.target.value)}
                label="Selecciona tu edad"
                value={values.birthDay}
                inputProps={{
                  name: 'birthDay',
                  id: 'outlined-age-native-simple',
                }}
              >
                <option aria-label="None" value="" />
                {(() => {
                  return Array.from(Array(60), (_, i) => i + 21).map(i => <option value={i}>{i}</option>)
                })()}
              </Select>
              <Typography variant="caption" color="error" className="error-select" component="p">{errors.birthDay}</Typography>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="label" component="label" className="mr-4">Genero: </Typography>
            <RadioGroup row  aria-label="gender" name="gender"  onChange={(e) => handleChange('gender', e.target.value)}>
              <FormControlLabel value="0" control={<Radio color="primary" />} label="M" />
              <FormControlLabel value="1" control={<Radio color="primary" />} label="F" />
            </RadioGroup>
          </Grid>
           {/*<Grid item xs={12}>
            <TextField label="" onChange={(e) => handleChange('comentario', e.target.value)} value={values.comentario} name="comentario" id="utie_ampliado_pack_comentario" placeholder="Estoy interesado en recibir el folleto de este programa y quiero preguntar..." variant="outlined" multiline rows={4} /> 
          </Grid>*/}
          <Grid item xs={12}>
             <input type="file" name="file" onChange={onChangeHandler} /> 
          </Grid>
        </Grid>
        {errors.source && (
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Alert severity="error">
                Debe aceptar los términos del servicio y la política de privacidad.
              </Alert>
            </Grid>
          </Grid>
        )}

        <Grid container spacing={2}>


          <Grid item xs={12}>
            <Typography variant="body1" component="p" >
              <Checkbox
                checked={!!values.source}
                error={errors.source && true}
                className={errors.source && "check-error"}
                name="source"
                id="utie_ampliado_pack_source"
                color="primary"
                onChange={(e) => handleChecked('source', e.target.checked)}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
                He leído y acepto los <Link href="https://www.utie.com.mx/terminos/" target="_blank">términos del servicio y la política de privacidad</Link>.
            </Typography>
          </Grid>
          <>
            {notification.active && !notificationError.active && (
              <Grid item xs={12}>
                <Alert severity="success">
                  Datos enviados con exito
              </Alert>
              </Grid>

            )}
          </>
          <>
            {notificationError.active && (
              <Grid item xs={12}>
                <Alert severity="error">
                  Problemas del servidor
              </Alert>
              </Grid>
            )}
          </>
          <Grid item xs={12}>
            <Grid container
              direction="row"
              justify="center"
              alignItems="center">
              <Button variant="contained" color="primary" type="submit" >
                Enviar solicitud
              </Button>
            </Grid>
          </Grid>
        </Grid>

      </form>
    </>
  );
}

export default RequestInfo;
