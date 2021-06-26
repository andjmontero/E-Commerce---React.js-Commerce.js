import React from "react";
import { Divider, makeStyles } from "@material-ui/core";
import { IconButton, Typography, Button, Grid } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CartItem from "./CartItem/CartItem";
const Cart = ({ ToggleDrawer, sumbitPurchase, cart }) => {
  return (
    <>
      <IconButton onClick={() => ToggleDrawer(false)}>
        <CloseIcon />
      </IconButton>
      <Typography variant="h4">Your Cart</Typography>
      {cart.line_items.map((item) => (
        <Grid item xs={12} sm={4} key={item.id}>
          <CartItem item={item}></CartItem>
        </Grid>
      ))}

      <Button onClick={() => sumbitPurchase()}>Checkout</Button>
    </>
  );
};

export default Cart;
