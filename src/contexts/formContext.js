import React from "react";

export const FormContext = React.createContext(); 

const FormContextTag = ({ children }) => {

  const initialFormValue = {
    name: '',
    surname: '',
    email: '', 
    age: '',
    phone: ''
  };

  const [formValue, setFormValue] = React.useState(initialFormValue);
  const [activeStepValue, setActiveStepValue] = React.useState(0);
  
  const updateFormValues = (values, step) =>  {
    setFormValue(Object.assign({}, formValue, values));
    if (step) setActiveStepValue(step);
  }
  return (
    <FormContext.Provider value={{formValue, activeStepValue, updateFormValues}}>
      {children}
    </FormContext.Provider>
  );
}

export default FormContextTag;