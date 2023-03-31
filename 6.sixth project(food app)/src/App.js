import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./store/CartProvider";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <CartContextProvider>
      {cartIsShow && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals></Meals>
      </main>
    </CartContextProvider>
  );
}

export default App;
