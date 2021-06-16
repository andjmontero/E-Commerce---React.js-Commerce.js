import { Grid } from "@material-ui/core";
import React from "react";
import Product from "./Product/Product";
import useStyles from "./styles";

const list = [
  {
    name: "Mouse G-203",
    brand: "Logitech",
    img: "https://images.unsplash.com/photo-1618499890638-3a0dd4b278b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    id: 2,
    price: 300,
  },
  {
    name: "Mouse G-203",
    brand: "Logitech",
    img: "https://images.unsplash.com/photo-1618499890638-3a0dd4b278b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    id: 2,
    price: 300,
  },
  {
    name: "Mouse G-203",
    brand: "Logitech",
    img: "https://images.unsplash.com/photo-1618499890638-3a0dd4b278b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    id: 2,
    price: 300,
  },
  {
    name: "Mouse G-203",
    brand: "Logitech",
    img: "https://images.unsplash.com/photo-1618499890638-3a0dd4b278b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    id: 2,
    price: 300,
  },
  {
    name: "Mouse G-203",
    brand: "Logitech",
    img: "https://images.unsplash.com/photo-1618499890638-3a0dd4b278b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    id: 2,
    price: 300,
  },
  {
    name: "Mouse G-203",
    brand: "Logitech",
    img: "https://images.unsplash.com/photo-1618499890638-3a0dd4b278b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    id: 2,
    price: 300,
  },
];

const Products = () => {
  const classes = useStyles();

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const productList = list;
      if (productList != []) {
        resolve(list);
      }
      reject("Items not available");
    }, 3000);
  });

  return (
    <div className={classes.mainGrid}>
      <Grid container justify="center" spacing={6} md={12} lg={10}>
        {promise
          .then((list) => {
            list.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={4}>
                <Product product={product} />
              </Grid>
            ));
          })
          .catch((message) => {
            alert(message);
          })}
      </Grid>
    </div>
  );
};

export default Products;
