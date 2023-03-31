import React, { useEffect, useState, useReducer, useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const actions = {
  input: "USER_INPUT",
  blur: "INPUT_BLUR",
};

const INPUT_INITIAL_STATE = {
  value: "",
  isValid: null,
};

const emailReducer = (state, action) => {
  if (action.type === actions.input) {
    return { value: action.value, isValid: action.value.includes("@") };
  }
  if (action.type === actions.blur) {
    return { value: state.value, isValid: state.value.includes("@") };
  }

  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === actions.input) {
    return { value: action.value, isValid: action.value.trim().length > 6 };
  }
  if (action.type === actions.blur) {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(
    emailReducer,
    INPUT_INITIAL_STATE
  );

  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,
    INPUT_INITIAL_STATE
  );

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  const ctx = useContext(AuthContext);
  const passwordInputRef = useRef();
  const emailInputRef = useRef();

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: actions.input, value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: actions.input, value: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: actions.blur });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: actions.blur });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      ctx.onLogin(emailState.value, passwordState.value);
    } else if(!emailIsValid) {
      emailInputRef.current.focus()
    } else {
      passwordInputRef.current.focus()
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
