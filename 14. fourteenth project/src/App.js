import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

function App() {
  const isLogged = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!isLogged && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}

        {isLogged && (
          <Route path="/profile">
            <UserProfile />
          </Route>
        )}
        <Route path='*'>
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
