import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import useInput from "../../hooks/use-input";
import { loginAndRegister } from "../../lib/api";
import { autoLogout } from "../../store/authSlice";
import Input from "../UI/Input";
import classes from "./AuthForm.module.css";

const emailValidation = (value) => {
  return value.trim().includes("@");
};
export const passwordValidation = (value) => {
  return value.trim().length > 5;
};

const AuthForm = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const {
    isLoading,
    responseData,
    sendRequest: loginRegister,
  } = useHttp(loginAndRegister);
  const emailControl = useInput(emailValidation);
  const passwordControl = useInput(passwordValidation);
  const history = useHistory();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const formIsValid = emailControl.isValid && passwordControl.isValid;

  const submitHandler = async (event) => {
    event.preventDefault();
    const user = {
      email: emailControl.value,
      password: passwordControl.value,
      returnSecureToken: true,
    };
    loginRegister({ isLogin, user });
  };

  useEffect(() => {
    if (responseData) {
      const expirationTime = new Date(
        new Date().getTime() + +responseData.expiresIn * 1000
      );
      dispatch(autoLogout(responseData.idToken,expirationTime.toISOString()));
      history.replace("/");
    }
  }, [responseData, dispatch, history]);

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <Input
          control={emailControl}
          type="email"
          id="email"
          label="Your Email"
          errorMessage="Enter a valid email"
        />
        <Input
          control={passwordControl}
          type="password"
          id="password"
          label="Your Password"
          errorMessage="Enter a valid password"
        />
        <div className={classes.actions}>
          {!isLoading && (
            <button disabled={!formIsValid}>
              {isLogin ? "Login" : "Create Account"}
            </button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
