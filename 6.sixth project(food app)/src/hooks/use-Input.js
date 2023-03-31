import { useState } from "react";

const useInput = (validation) => {
  const [value, setValue] = useState("");
  const [isTouched, setTouched] = useState(false);

  const isValid = validation(value);
  const hasError = !isValid && isTouched;

  const changeValueHandler = (event) => {
    setValue(event.target.value);
  };

  const blurHandler = () => {
    setTouched(true);
  };

  return {
    value,
    isTouched,
    hasError,
    isValid,
    changeValueHandler,
    blurHandler,
  };
};

export default useInput;