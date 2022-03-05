import React, { useState } from "react";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  return (
    <>
      {cartIsShown && <Cart setCartIsShown={setCartIsShown} />}
      <Header setCartIsShown={setCartIsShown} />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
