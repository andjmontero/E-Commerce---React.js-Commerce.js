import React from "react";
import { Divider, makeStyles } from "@material-ui/core";
import { IconButton, Typography, Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CartItem from "./CartItem/CartItem";
const Cart = ({ ToggleDrawer, sumbitPurchase }) => {
  return (
    <>
      <IconButton onClick={() => ToggleDrawer(false)}>
        <CloseIcon />
      </IconButton>
      <Typography variant="h4">Your Cart</Typography>
      <CartItem />

      <Button onClick={() => sumbitPurchase()}>Checkout</Button>
    </>
  );
};

export default Cart;
