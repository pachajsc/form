import React from 'react';
import AdmFirstStep from "./AdmFirstStep"
import AdmSecondStep from "./AdmSecondStep"
import { Typography, Grid, Button, Stepper, Step, StepLabel } from '@material-ui/core';
import Slider from "react-slick";
import { FormContext } from '../../contexts/formContext';

export default function AdmissionRequest({ match }) {
  const context = React.useContext(FormContext);

  const [step, setStep] = React.useState(context.activeStepValue);

  const getSteps = () => {
    return [<strong>DATOS PERSONALES</strong>, <strong>DATOS ACADÉMICOS Y<br /> PROFESIONALES</strong>];
  }

  const slickRef = React.createRef();

  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 0,
    /*
    vertical: true,
    */
    draggable: false,
    swipe: false,
    arrows: false,
    autoPlay: false,
    accessibility: false,
  };

  React.useEffect(() => {
    console.log('aca aca');
    const s = Number(match.params.step);
    for (let index = s; index >= 0; index--) {
      if (context.checkStep(index)) setStep(index);
    }
  }, []);
  
  React.useEffect(() => {
    console.log('entro aca con step', step)
    if (slickRef && step === 1) slickRef.current.slickGoTo(0);
    if (slickRef && step === 2) slickRef.current.slickGoTo(1);
    if (slickRef && step === 3) slickRef.current.slickGoTo(2);

    // if (slickRef && step) slickRef.current.slickGoTo(step - 1);

    else {
      slickRef.current.slickGoTo(0);
      // setStep(0)
    }
  }, [slickRef, step]);

  const steps = getSteps();

  const handleNext = (a,b,c) => {
    slickRef.current.slickNext();
  };

  const handleBack = (a,b,c) => {
    slickRef.current.slickPrev();
  };

  const handleReset = () => {
    localStorage.clear('form1');
    localStorage.clear('form2');
    context.resetFormValues();
    slickRef.current.slickGoTo(0);
  };

  return (
    <div style={{ maxWidth: "1140px", margin: "20px auto" }}>
      <Typography component="h4" variant="h4" align="center" color="primary" className="mb-4" style={{ fontWeight: 100 }}>Solicitud de Admisión</Typography>
      <Stepper activeStep={context.activeStepValue} alternativeLabel >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container>
        <Grid item xs={12}>
          {context.activeStepValue === steps.length && (
            <>
              { /*
            <Grid
              container
              spacing={3}
              direction="column"
              justify="center"
              style={{ height: 250 }}
              alignItems="center" className="animate-fade-in">
              <Typography contained="h5" variant="h5" className="mb-3">Flujo terminado</Typography>
              <Button onClick={handleReset} color="primary" variant="contained">Volver al inicio</Button>
            </Grid>
            */ }
              <Button variant="contained" color="secondary" type="button" onClick={handleBack} style={{ marginTop: 25 }}>
                Volver
            </Button>
            </>
          )}
        </Grid>
      </Grid>
      <Slider {...settings} ref={slickRef}>
        <div>
          <Typography className="animate-fade-in" component="h4" variant="h4" style={{ padding: "0 20px", marginTop: "15px", display: "block" }}><strong>1</strong> Datos Personales</Typography>
          <AdmFirstStep nextFn={handleNext} backFn={handleBack} />
        </div>
        <div>
          <Typography className="animate-fade-in" component="h4" variant="h4" style={{ padding: "0 20px", marginTop: "15px", display: "block" }}><strong>2</strong> Datos Complementarios</Typography>
          <AdmSecondStep nextFn={handleNext} backFn={handleBack} />
        </div>
        <div>
          {(context.formValue && (
            <div>
              <p>
                Nombre: <strong>{context.formValue.name}</strong>
              </p>
              <p>
                Apellido: <strong>{context.formValue.surname}</strong>
              </p>
              <p>
                Email: <strong>{context.formValue.email}</strong>
              </p>
              <p>
                Edad: <strong>{context.formValue.age}</strong>
              </p>
              <p>
                Telefono: <strong>{context.formValue.phone}</strong>
              </p>
              <Button variant="contained" color="secondary" type="button" onClick={handleBack} style={{ marginTop: 25 }}>
                Volver
              </Button>
              <Button variant="contained" color="secondary" type="button" onClick={handleReset} style={{ marginTop: 25 }}>
                Reset
              </Button>
            </div>
          ))}
        </div>
      </Slider>

      <div className="json-parsed">
        <p>ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
        <br />
        {JSON.stringify(context.formValue)}
      </div>

    </div >
  );
}