import React from 'react';
import AdmFirstStep from "./AdmFirstStep"
import AdmSecondStep from "./AdmSecondStep"
import { Typography, Grid, Button, Stepper, Step, StepLabel } from '@material-ui/core';
import Slider from "react-slick";
import { FormContext } from '../../contexts/formContext';

export default function AdmissionRequest({ match }) {
  const context = React.useContext(FormContext);

  const [step, setStep] = React.useState(null);

  const getSteps = () => {
    return [<strong>DATOS PERSONALES</strong>, <strong>DATOS ACADÉMICOS Y<br /> PROFESIONALES</strong>];
  }

  const slickRef = React.createRef();

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    swipe: false,
    arrows: false,
    autoPlay: false,
    accessibility: false
  };

  
  const [form1, setForm1] = React.useState(JSON.parse(localStorage.getItem('form1')) || null);
  const [form2, setForm2] = React.useState(JSON.parse(localStorage.getItem('form2')) || null);
  
  /*
  React.useEffect(() => {
    setStep(match.params.step - 1)
  }, []);
  */

  React.useEffect(() => {
    if(slickRef && step === 1) slickRef.current.slickGoTo(0);
    if(slickRef && step === 2 && form1) slickRef.current.slickGoTo(1);
    else {
      slickRef.current.slickGoTo(0);
      // setStep(0)
    }
  }, [slickRef, step, form1]);  

  React.useEffect(() => {
    if (form1) { 
      localStorage.setItem('form1', JSON.stringify(form1));
      slickRef.current.slickGoTo(1);
    }
  }, [form1]);

  React.useEffect(() => {
    if (form2) localStorage.setItem('form2', JSON.stringify(form2));
  }, [form2]);


  const steps = getSteps();

  const handleNext = () => {
    slickRef.current.slickNext();
  };

  const handleBack = () => {
    slickRef.current.slickPrev();
  };

  const handleReset = () => {
    localStorage.clear('form1');
    localStorage.clear('form2');
    setForm1(null);
    setForm2(null);
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
          <AdmFirstStep formValues={form1 || undefined} nextFn={handleNext} backFn={handleBack} />
        </div>
        <div>
          <Typography className="animate-fade-in" component="h4" variant="h4" style={{ padding: "0 20px", marginTop: "15px", display: "block" }}><strong>2</strong> Datos Complementarios</Typography>
          <AdmSecondStep formValues={form2 || undefined} nextFn={handleNext} backFn={handleBack} />
        </div>
        <div>
          {(form1 && form2 && (
            <div>
              <p>
                Nombre: <strong>{form1.name}</strong>
              </p>
              <p>
                Apellido: <strong>{form1.surname}</strong>
              </p>
              <p>
                Email: <strong>{form1.email}</strong>
              </p>
              <p>
                Edad: <strong>{form2.age}</strong>
              </p>
              <p>
                Telefono: <strong>{form2.phone}</strong>
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
        <br/>
        {JSON.stringify(context.formValue)}
      </div>
      
    </div >
  );
}