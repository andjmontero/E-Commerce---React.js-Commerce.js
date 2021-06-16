import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { Drawer } from "@material-ui/core";
import NavBar from "./components/NavBar/NavBar.js";
import { useState } from "react";
function App() {
  const [state, setState] = useState();
  const ToggleDrawer = (open) => {
    setState(open);
  };

  return (
    <Router>
      <Drawer anchor="right" open={state}>
        <Cart ToggleDrawer={ToggleDrawer} />
      </Drawer>
      <div>
        <NavBar ToggleDrawer={ToggleDrawer} />
        <Products />
        <Switch></Switch>
      </div>
    </Router>
  );
}

export default App;
