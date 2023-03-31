import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';
import classes from './Auth.module.css';

const Auth = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const dispatch = useDispatch()

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    console.log(user)

    dispatch(authActions.login())
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailRef}/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password'  ref={passwordRef} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
