import React from "react";
import { Divider, makeStyles } from "@material-ui/core";
import { IconButton, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CartItem from "./CartItem/CartItem";
const Cart = ({ ToggleDrawer }) => {
  return (
    <>
      <IconButton onClick={() => ToggleDrawer(false)}>
        <CloseIcon />
      </IconButton>
      <Typography variant="h4">Your Cart</Typography>
      <CartItem />
    </>
  );
};

export default Cart;
