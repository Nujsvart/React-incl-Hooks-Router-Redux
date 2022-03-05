import React from "react";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
