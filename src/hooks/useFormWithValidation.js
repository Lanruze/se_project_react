import { useState } from "react";

export function useFormWithValidation(defaultValues, validate) {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(evt) {
    const { name, value } = evt.target;
    const updatedValues = { ...values, [name]: value };
    setValues(updatedValues);

    // Validate on change if validate function is provided
    if (validate) {
      const newErrors = validate(updatedValues);
      setErrors(newErrors);
      setIsFormValid(
        Object.keys(newErrors).length === 0 &&
          Object.values(updatedValues).every((val) => val !== ""),
      );
    }
  }

  function handleSubmit(callback) {
    return (evt) => {
      evt.preventDefault();
      setSubmitted(true);

      if (validate) {
        const newErrors = validate(values);
        setErrors(newErrors);
        const isValid =
          Object.keys(newErrors).length === 0 &&
          Object.values(values).every((val) => val !== "");
        setIsFormValid(isValid);

        if (isValid && callback) {
          callback();
        }
      }
    };
  }

  function resetForm() {
    setValues(defaultValues);
    setErrors({});
    setIsFormValid(false);
    setSubmitted(false);
  }

  return {
    values,
    setValues,
    errors,
    isFormValid,
    handleChange,
    handleSubmit,
    resetForm,
    submitted,
  };
}
