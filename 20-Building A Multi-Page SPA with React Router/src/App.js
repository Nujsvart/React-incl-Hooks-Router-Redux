import { Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome" component={Welcome} />
        <Route path="/products" component={Products} />
      </main>
    </div>
  );
}

export default App;
