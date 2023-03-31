import { useState } from "react";

const useInput = (validation) => {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState();

  const isValid = validation(value);
  const hasError = touched && !isValid;

  const changeValueHandler = (event) => {
    setValue(event.target.value);
  };

  const blurHandler = () => {
    setTouched(true);
  };

  return {
    value,
    hasError,
    touched,
    isValid,
    changeValueHandler,
    blurHandler
  }
};

export default useInput;
