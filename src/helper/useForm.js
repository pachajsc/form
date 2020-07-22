import { useState, useEffect } from "react";

const useForm = ({ formBody, callback, errorsCallback, validate }) => {
  const [values, setValues] = useState(formBody);
  const [errors, setErrors] = useState({});
  const [activeCallback, setactiveCallback] = useState({ callbackChange: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (key, value) => {
    if (value.iso3166_a2) {
      setValues({
        ...values,
        [key]: value.value,
        iso3166_a2: value.iso3166_a2,
        id: value.id,
        value: value.value
      });

    } else {
      setValues({
        ...values,
        [key]: value

      });
    }

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
      if (!errors.optionObj) {
        setErrors(validate(values))
      }
    }
    console.log("NUEVOS VALORES", values)
  }, [values]);

  const handleSubmit = event => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(values));
    setactiveCallback({ callbackChange: true })
  };

  useEffect(() => {
    console.log(errors)
    if (isSubmitting) {
      if (errors.program === null && errors.name === null && errors.surname === null && errors.email === null && errors.age === null && errors.phone === null && errors.accept === null) {
        callback()
        setErrors({});
        console.log("submit")
      }
      else {
        errorsCallback(errors);
        setIsSubmitting(false);
      }

    }
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