import React, { useContext, useState, createContext } from "react";
import { Link } from "react-router-dom";
import { IconButton, Typography, Button, Grid } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CartItem from "./CartItem/CartItem";
import { UseCart } from "../../CartContext";
const Cart = ({ ToggleDrawer, sumbitPurchase }) => {
  const { cart } = UseCart();

  return (
    <>
      <IconButton onClick={() => ToggleDrawer(false)}>
        <CloseIcon />
      </IconButton>
      <Typography variant="h4">Your Cart</Typography>
      {cart == [] ? (
        cart.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item}></CartItem>
          </Grid>
        ))
      ) : (
        <div>
          <h4>Your Cart is Empty</h4>{" "}
          <IconButton onClick={() => ToggleDrawer(false)}>
            <Link to="/Products"> Start Shopping</Link>
          </IconButton>
        </div>
      )}

      <Button onClick={() => sumbitPurchase()}>Checkout</Button>
    </>
  );
};

export default Cart;
