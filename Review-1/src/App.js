import React,{useContext} from 'react';
import Auth from './components/Auth';

import Ingredients from './components/Ingredients/Ingredients';
import { AuthContext } from './store/auth/auth-context';

const App = props => {
  const authCtx = useContext(AuthContext)

  return <>
  {authCtx.isAuth ? <Ingredients /> : <Auth onLogin={authCtx.login}></Auth>}
  </>;
};

export default App;
