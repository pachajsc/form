import React from "react";

export const FormContext = React.createContext();

const FormContextTag = ({ children }) => {

  let form1 = {};
  let form2 = {};

  if (localStorage.getItem('form1')) {
    form1 = JSON.parse(localStorage.getItem('form1'));
  }
  if (localStorage.getItem('form2')) {
    form2 = JSON.parse(localStorage.getItem('form2'));
  }

  const initialFormValue = Object.assign({
    name: '',
    surname: '',
    email: '',
    age: '',
    phone: ''
  }, form1, form2);

  const [formValue, setFormValue] = React.useState(initialFormValue);
  const [activeStepValue, setActiveStepValue] = React.useState(0);
  
  const updateFormValues = (values, step) => {
    setFormValue(Object.assign({}, formValue, values));
    if (step) setActiveStepValue(step);
    localStorage.setItem(`form${step}`, JSON.stringify(Object.assign({}, formValue, values)));
  }

  const resetFormValues = () => {
    setFormValue({
      name: '',
      surname: '',
      email: '',
      age: '',
      phone: ''
    });
  }

  return (
    <FormContext.Provider value={{ formValue, activeStepValue, updateFormValues, resetFormValues }}>
      {children}
    </FormContext.Provider>
  );
}

export default FormContextTag;