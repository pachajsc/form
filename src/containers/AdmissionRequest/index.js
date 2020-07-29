import React from 'react';
import AdmFirstStep from "./AdmFirstStep"
import AdmSecondStep from "./AdmSecondStep"
import { Typography, Grid, Button, Stepper, Step, StepLabel } from '@material-ui/core';

export default function AdmissionRequest() {
  const getSteps = () => {
    return ['DATOS PERSONALES', 'DATOS ACADÉMICOS Y PROFESIONALES'];
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
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <>
            <span><strong>1AdmFirstStep</strong> Datos Personales</span>
            <AdmFirstStep formValues={form1 || undefined} submitForm={(form1) => setForm1(form1)} nextFn={handleNext} backFn={handleBack} />
          </>
        );
      case 1:
        return (
          <>
            <span><strong>2</strong> Datos Complementarios</span>
            <AdmSecondStep submitForm={(form2) => setForm2(form2)} nextFn={handleNext} backFn={handleBack} />
          </>
        );
      default:
        return 'Unknown stepIndex';
    }
  }


  return (
    <div style={{ maxWidth: "1140px", margin: "auto" }}>

      <Typography component="h4" variant="h4" align="center">Solicitud de Admisión</Typography>
      <Stepper activeStep={activeStep} alternativeLabel >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length && (
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start">
            <Typography ></Typography>
            <Button onClick={handleReset}>Reset</Button>
          </Grid>
        )}
        <Typography component="h4" variant="h4">{getStepContent(activeStep)}</Typography>
        {activeStep === 2 && (
          <p>
            <span>{JSON.stringify(form1)}</span>
            <br/>
            <span>{JSON.stringify(form2)}</span>
          </p>
        )}
      </div>
    </div>
  );
}