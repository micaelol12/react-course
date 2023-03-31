import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/" exact>
          <Redirect to="/welcome"></Redirect>
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products" exact={true}>
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail></ProductDetail>
        </Route>
      </main>
    </div>
  );
}

export default App;
