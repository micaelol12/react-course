import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../../store/authSlice";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const dispatch = useDispatch()
  const isLogged = useSelector((state) => state.auth.isLoggedIn);
  const logoutHandler = () => {
    dispatch(authActions.logout())
  }
  return (
    <header className={classes.header}>

      <Link to="/">
        <div className={classes.logo}>React Auth{isLogged}</div>
      </Link>
      <nav>
        <ul>
          {!isLogged && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLogged && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLogged && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
