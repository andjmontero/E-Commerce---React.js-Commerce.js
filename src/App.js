import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Products from "./components/Products/Products";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import { Drawer } from "@material-ui/core";
import NavBar from "./components/NavBar/NavBar.js";
import { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
function App() {
  //------Drawer
  const [state, setState] = useState();
  const ToggleDrawer = (open) => {
    setState(open);
  };

  //-----Product List Fetch
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  //----Cart List
  const [cart, setCart] = useState({});

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  };
  //---Add to Cart
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  const sumbitPurchase = () => {
    alert("Compra Exitosa");
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  return (
    <Router>
      <Drawer anchor="right" open={state}>
        <Cart
          sumbitPurchase={sumbitPurchase}
          ToggleDrawer={ToggleDrawer}
          cart={cart}
        />
      </Drawer>
      <div>
        <NavBar ToggleDrawer={ToggleDrawer} cartAmount={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Products">
            <Products
              products={products}
              addToCart={handleAddToCart}
              cart={cart}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
