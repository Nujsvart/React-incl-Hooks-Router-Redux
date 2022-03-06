import React, { useState } from "react";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";
import CartProvider from "../store/CartProvider";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  return (
    <CartProvider>
      {cartIsShown && <Cart setCartIsShown={setCartIsShown} />}
      <Header setCartIsShown={setCartIsShown} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
