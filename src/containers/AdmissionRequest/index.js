import React from 'react';
import { Typography, Grid, Button, Stepper, Step, StepLabel } from '@material-ui/core';

function getSteps() {
  return ['DATOS PERSONALES', 'DATOS ACADÉMICOS Y PROFESIONALES'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <span><strong>1</strong> Datos Personales</span>;
    case 1:
      return <span><strong>2</strong> Datos Complementarios</span>;
    default:
      return 'Unknown stepIndex';
  }
}

export default function AdmissionRequest() {

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div style={{maxWidth:"1140px", margin:"auto"}}>

      <Typography component="h4" variant="h4" align="center">Solicitud de Admisión</Typography>
      <Stepper activeStep={activeStep} alternativeLabel >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <Grid
          container
            direction="row"
            justify="center"
            alignItems="flex-start">
            <Typography ></Typography>
            <Button onClick={handleReset}>Reset</Button>
          </Grid>
        ) : (
            <div>
              <Typography component="h4" variant="h4">{getStepContent(activeStep)}</Typography>

              <Grid
              container
                direction="row"
                justify="center"
                alignItems="flex-start">
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </Grid>

            </div>
          )}
      </div>
    </div>
  );
}
