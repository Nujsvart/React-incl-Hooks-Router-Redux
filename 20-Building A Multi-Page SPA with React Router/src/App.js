import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route path="/welcome" component={Welcome} />
        <Route path={ "/products"} component={Products} />
      </Router>
    </div>
  );
}

export default App;
