import { useReducer } from "react";

const INITIAL_INPUT_STATE ={
    value: "",
    isTouched: false,
}

const inputStateReducer = (state, action) => {
  if(action.type === "INPUT"){
    return {
      ...state, value: action.value
    }
  }
  if(action.type === "BLUR"){
    return {
      ...state, isTouched: true
    }
  }
  return INITIAL_INPUT_STATE
};

const useInputV2 = (validation) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, INITIAL_INPUT_STATE);
  const isValid = validation(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({type:"INPUT", value: event.target.value})
  };

  const inputBlurHandler = () => {
    dispatch({type:"BLUR"})
  };

  const reset = () => {
    dispatch({type:"RESET"})
  };

  return {
    value: inputState.value,
    hasError,
    isValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInputV2;
