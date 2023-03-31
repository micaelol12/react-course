import { createSlice } from "@reduxjs/toolkit";



let logoutTimer;

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;
  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token")
  const storedExpirationDate = localStorage.getItem('expirationTime')

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if(remainingTime <= 60000){
    localStorage.removeItem('token')
    localStorage.removeItem('expirationTime')
    return {
      token: null,
      duration: null
    }
  }

  return {
    token: storedToken,
    duration: remainingTime
  }
}

const AUTH_INITAL_STATE = {
  token: retrieveStoredToken().token,
  isLoggedIn:  retrieveStoredToken().token ? true : false,
  expirationTime : retrieveStoredToken().duration
};

const authSlice = createSlice({
  name: "auth",
  initialState: AUTH_INITAL_STATE,
  reducers: {
    login(state, {payload}) {
      state.token = payload.token;
      state.isLoggedIn = true;
      state.expirationTime = payload.expirationTime
    },
    logout(state) {
      state.token = "";
      state.isLoggedIn = false;
      state.expirationTime = null
      if (logoutTimer) {
        clearTimeout(logoutTimer);
      }
    },
  },
});

export const autoLogout = (token, expirationTime) => {
  return (dispatch) => {
    dispatch(authActions.login({token,expirationTime}));
    localStorage.setItem('expirationTime', expirationTime)
    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(() => {
      dispatch(authActions.logout());
    }, remainingTime);
  };
};
export const authActions = authSlice.actions;
export default authSlice.reducer;
