import React from "react";
import { Link } from "react-router-dom";
import {
  IconButton,
  Typography,
  Button,
  Grid,
  Container,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CartItem from "./CartItem/CartItem";
import { UseCart } from "../../CartContext";
import useStyles from "./styles";
const Cart = ({ ToggleDrawer }) => {
  const { cart, handleEmptyCart } = UseCart();
  const classes = useStyles();

  return (
    <Container className={classes.cart}>
      <Button
        variant="contained"
        type="button"
        color="primary"
        onClick={() => ToggleDrawer(false)}
        className={classes.btnClose}
      >
        <CloseIcon />
      </Button>
      <Typography variant="h4">Your Cart</Typography>
      {!cart.line_items.length ? (
        <div>
          <h4>Your Cart is Empty</h4>{" "}
          <Button onClick={() => ToggleDrawer(false)} className={classes.btn}>
            <Link to="/Products"> Start Shopping</Link>
          </Button>
        </div>
      ) : (
        <>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <CartItem item={item}></CartItem>
            </Grid>
          ))}
          <Button
            variant="contained"
            type="button"
            color="secondary"
            onClick={() => handleEmptyCart()}
            className={classes.btnEmpty}
          >
            Empty Cart
          </Button>
          <Button
            variant="contained"
            type="button"
            color="primary"
            className={classes.btnCheckout}
          >
            Checkout
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cart;
