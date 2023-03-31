import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import useInput from "../../hooks/use-input";
import { changePassword } from "../../lib/api";
import { passwordValidation } from "../Auth/AuthForm";
import Input from "../UI/Input";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const history = useHistory()
  const token = useSelector((state) => state.auth.token);
  const passwordControl = useInput(passwordValidation);
  const {responseData, sendRequest} = useHttp(changePassword)

  const submitHandler = (event) => {
    event.preventDefault();
    const user = {
      password: passwordControl.value,
      idToken: token,
      returnSecureToken : false
    };
    sendRequest(user)
  };

  useEffect(()=>{
    if(responseData){
      history.replace('/')
    }
  },[responseData,history])


  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        control={passwordControl}
        type="password"
        id="new-password"
        errorMessage="enter a valid password"
        label="New Password"
      ></Input>
      <div className={classes.action}>
        <button type="submit">Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
