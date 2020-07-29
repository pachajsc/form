import { useState, useEffect } from "react";

const useForm = ({ formBody, callback, errorsCallback, validate, onChange }) => {
  const [values, setValues] = useState(formBody);
  const [errors, setErrors] = useState({});
  const [activeCallback, setactiveCallback] = useState({ callbackChange: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (key, value) => {
    setValues({
      ...values,
      [key]: value
    });
  };

  const handleChecked = (key, checked) => {
    setValues({
      ...values,
      [key]: checked
    });
  }

  /* LOGGER */
  useEffect(() => {
    if (activeCallback.callbackChange) {
      setErrors(validate(values))
    }
    if(typeof onChange === 'function') onChange(values);
  }, [values]);

  const handleSubmit = event => {
    event.preventDefault();
    setIsSubmitting(true);
    const validation = validate(values);
    setErrors(validation);
    let canProceed = true;
    for (const key in validation) {
      if (validation.hasOwnProperty(key)) {
        const element = validation[key];
        if(element != null) canProceed = false
      }
    }
    if (canProceed) callback(values);
    setactiveCallback({ callbackChange: true })
  };

  useEffect(() => {
    console.log("QUE VINO ACA,", errors);
  }, [errors]);

  return {
    handleChange,
    handleChecked,
    handleSubmit,
    values,
    setValues,
    errors
  };
};

export default useForm;