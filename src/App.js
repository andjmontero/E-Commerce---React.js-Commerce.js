import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Products from "./components/Products/Products";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import { Drawer, LinearProgress } from "@material-ui/core";
import NavBar from "./components/NavBar/NavBar.js";
import { useState, useEffect, createContext } from "react";
import { commerce } from "./lib/commerce";
import { CartProvider } from "./CartContext";
function App() {
  //------Drawer
  const [state, setState] = useState();
  const ToggleDrawer = (open) => {
    setState(open);
  };

  //-----Product List Fetch
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
    setLoading(true);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Router>
      <CartProvider>
        <Drawer anchor="right" open={state}>
          <Cart ToggleDrawer={ToggleDrawer} />
        </Drawer>

        <div>
          <NavBar ToggleDrawer={ToggleDrawer} />
          <Switch>
            <Route exact path="/">
              <Home products={products} />
            </Route>
            <Route exact path="/Products">
              {loading ? (
                <Products products={products} />
              ) : (
                <LinearProgress color="secondary" />
              )}
            </Route>
          </Switch>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
