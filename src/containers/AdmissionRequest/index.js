import React from 'react';
import AdmFirstStep from "./AdmFirstStep"
import AdmSecondStep from "./AdmSecondStep"
import { Typography, Grid, Button, Stepper, Step, StepLabel } from '@material-ui/core';

export default function AdmissionRequest() {
  const getSteps = () => {
    return [<strong>DATOS PERSONALES</strong>, <strong>DATOS ACADÉMICOS Y<br /> PROFESIONALES</strong>];
  }

  const [activeStep, setActiveStep] = React.useState(0);
  const [form1, setForm1] = React.useState(null);
  const [form2, setForm2] = React.useState(null);

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleFinish = () => {
    setActiveStep(2);
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setForm1(null)
    setForm2(null)
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <>
            <Typography className="animate-fade-in" component="h4" variant="h4" style={{ padding: "0 20px", marginTop: "15px", display: "block" }}><strong>1</strong> Datos Personales</Typography>
            <AdmFirstStep formValues={form1 || undefined} submitForm={(form1) => setForm1(form1)} nextFn={handleNext} backFn={handleBack} />
          </>
        );
      case 1:
        return (
          <>
            <Typography className="animate-fade-in" component="h4" variant="h4" style={{ padding: "0 20px", marginTop: "15px", display: "block" }}><strong>2</strong> Datos Complementarios</Typography>
            <AdmSecondStep submitForm={(form2) => setForm2(form2)} nextFn={handleNext} backFn={handleBack} />
          </>
        );
      default:
        return '';
    }
  }


  return (
    <div style={{ maxWidth: "1140px", margin: "20px auto" }}>

      <Typography component="h4" variant="h4" align="center" color="primary" className="mb-4" style={{ fontWeight: 100 }}>Solicitud de Admisión</Typography>
      <Stepper activeStep={activeStep} alternativeLabel >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container>
        <Grid item xs={12}>
          {activeStep === steps.length && (
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
          )}
          <div>{getStepContent(activeStep)}</div>
          {activeStep === 2 && (
            <>
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
            </>
          )}
        </Grid>
      </Grid>
    </div>
  );
}