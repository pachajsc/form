import React from 'react';
import { phoneItems } from "../../mock/country"
import { Check, Close } from '@material-ui/icons';
import InputPhone from "../../components/InputPhone"
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
import { TextField, Button, Checkbox, Typography, Grid, FormControl, InputLabel, Link, Select } from '@material-ui/core';

//validate
function formValidateFn(values) {
  let errors = {};
  helperValidateProgram(errors, values.program);
  helperValidateName(errors, values.name);
  helperValidateSurname(errors, values.surname);
  helperValidateEmail(errors, values.email);
  helperValidateAge(errors, values.age);
  helperValidatePhone(errors, values.phone)
  helperValidateAccept(errors, values.accept);
  
  return errors;
}
//validate

const RequestInfo = (props) => {
  const [notification, setNotification] = React.useState({ active: false });
  const [activeSelect, setactiveSelect] = React.useState(false);
  const [data, setData] = React.useState([]);

  //useForm
  const { handleChange, handleChecked, handleSubmit, values, errors, validate } = useForm({
    callback: formValidated,
    errorsCallback: (values) => (values),
    validate: formValidateFn, // TODO PONER VALIDADOR
    formBody: { program: "", name: "", surname: "", email: "", age: "", phoneItem: phoneItems[0], phone: "", questions: "Estoy interesado en recibir el folleto de este programa y quiero preguntar...", accept: "" },
  });
  //useForm

  //Action
  function formValidated() {
    setNotification({ active: true });
  }

  return (
    <>
      {JSON.stringify(values, null, 2)}
      <form onSubmit={handleSubmit}>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl variant="outlined" className={errors.program === null ? "success-field" : null}>
              {errors.program === null && <Check className="validate-icon icon-success" />}
              {errors.program && <Close className="validate-icon icon-error" />}
              <InputLabel htmlFor="outlined-age-native-simple">Escoge un programa</InputLabel>
              <Select
                native
                className={errors.program && "error-field"}
                error={errors.program && true}
                name="utie_ampliado_pack[programa_id]"
                id="selector_programa"
                value={values.program}
                onChange={(e) => handleChange('program', e.target.value)}
                label="Escoge un programa"
                inputProps={{
                  name: 'program',
                  id: 'outlined-age-native-simple',
                }}

              >
                <option aria-label="None" value="" />
                <option value={2022}>Maestría en Administración de Negocios</option>
                <option value={1541}>Maestría en Marketing & Digital Business</option>
                <option value={2021}>Maestría en Mercadotecnia Digital</option>
                <option value={2020}>Maestría MBA en Negocios Digitales</option>
              </Select>
              <Typography variant="caption" defaultValue="Success" color="error" className="error-select" component="p">{errors.program}</Typography>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            {errors.name === null && <Check className="validate-icon icon-success" />}
            {errors.name && <Close className="validate-icon icon-error" />}
            <TextField error={errors.name && true} helperText={errors.name} onChange={(e) => handleChange('name', e.target.value)} name="utie_ampliado_pack[nombre]" id="utie_ampliado_pack_nombre" label="Tu nombre:" variant="outlined" className={errors.name !== null ? "error-field" : "success-field"} />
          </Grid>
          <Grid item xs={12}>
            {errors.surname === null && <Check className="validate-icon icon-success" />}
            {errors.surname && <Close className="validate-icon icon-error" />}
            <TextField error={errors.surname && true} helperText={errors.surname} onChange={(e) => handleChange('surname', e.target.value)} label="Tu apellido:" variant="outlined" name="utie_ampliado_pack[apellido]" id="utie_ampliado_pack_apellido" className={errors.surname !== null ? "error-field" : "success-field"} />
          </Grid>
          <Grid item xs={12}>
            {errors.email === null && <Check className="validate-icon icon-success" />}
            {errors.email && <Close className="validate-icon icon-error" />}
            <TextField error={errors.email && true} helperText={errors.email} onChange={(e) => handleChange('email', e.target.value)} label="Tu email" variant="outlined" name="utie_ampliado_pack[email]" id="utie_ampliado_pack_email" className={errors.email !== null ? "error-field" : "success-field"} />
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" className={errors.age === null && "success-field"}>
              {errors.age === null && <Check className="validate-icon icon-success" />}
              {errors.age && <Close className="validate-icon icon-error" />}
              <InputLabel htmlFor="outlined-age-native-simple">Selecciona tu edad</InputLabel>
              <Select
                native
                error={errors.age && true}
                className={errors.age && "error-field"}
                name="utie_ampliado_pack[edad]"
                id="utie_ampliado_pack_edad"
                onChange={(e) => handleChange('age', e.target.value)}
                label="Selecciona tu edad"
                value={values.age}
                inputProps={{
                  name: 'age',
                  id: 'outlined-age-native-simple',
                }}
              >
                <option aria-label="None" value="" />
                {(() => {
                  return Array.from(Array(60), (_, i) => i + 21).map(i => <option value={i}>{i}</option>)
                })()}
              </Select>
              <Typography variant="caption" color="error" className="error-select" component="p">{errors.age}</Typography>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <InputPhone success={errors.phone === null} error={errors.phone} onChangeSelect={(phoneItem) => handleChange('phoneItem', phoneItem)} onChangeInput={(e) => handleChange('phone', e.target.value)} countryValue={values.phoneItem || 0} phoneValue={values.phone} errors={errors} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="" onChange={(e) => handleChange('questions', e.target.value)} value={values.questions} name="utie_ampliado_pack[comentario]" id="utie_ampliado_pack_comentario" placeholder="Estoy interesado en recibir el folleto de este programa y quiero preguntar..." variant="outlined" multiline rows={4} />
          </Grid>
        </Grid>
        {errors.accept && (
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
                checked={!!values.accept}
                error={errors.accept && true}
                className={errors.accept && "check-error"}
                name="utie_ampliado_pack[terminos]"
                id="utie_ampliado_pack_terminos"
                color="primary"
                onChange={(e) => handleChecked('accept', e.target.checked)}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
                            He leído y acepto los <Link href="https://www.utie.com.mx/terminos/" target="_blank">términos del servicio y la política de privacidad</Link>.
                        </Typography>
          </Grid>
          {notification.active && (
            <Grid item xs={12}>
              <Alert severity="success">
                Datos enviados con exito
              </Alert>
            </Grid>

          )}
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" >
              Enviar solicitud
                        </Button>
          </Grid>
        </Grid>

      </form>
    </>
  );
}

export default RequestInfo;
