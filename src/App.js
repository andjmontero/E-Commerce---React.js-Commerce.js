import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Products from "./components/Products/Products";

import NavBar from "./components/NavBar/NavBar.js";
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Products />
        <Switch></Switch>
      </div>
    </Router>
  );
}

export default App;
