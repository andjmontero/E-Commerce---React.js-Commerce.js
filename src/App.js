import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Products from "./components/Products/Products";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import { Drawer } from "@material-ui/core";
import NavBar from "./components/NavBar/NavBar.js";
import { useState } from "react";
function App() {
  const [state, setState] = useState();
  const ToggleDrawer = (open) => {
    setState(open);
  };
  const sumbitPurchase = () => {
    alert("Compra Exitosa");
  };
  return (
    <Router>
      <Drawer anchor="right" open={state}>
        <Cart sumbitPurchase={sumbitPurchase} ToggleDrawer={ToggleDrawer} />
      </Drawer>
      <div>
        <NavBar ToggleDrawer={ToggleDrawer} />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Products">
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
