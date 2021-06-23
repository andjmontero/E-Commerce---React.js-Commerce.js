import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
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
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((response) => response.json())
      .then((response) => {
        setData(response.results);
      });
  }, []);
  console.log(data);
  return (
    <div className={classes.mainGrid}>
      <Grid container justify="center" spacing={2}>
        {/* Y aca verifico que el estado array no este vacio y uso ese array para el map */}
        {data !== null ? (
          data.map((data, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
                <Product data={data} />
              </Grid>
            );
          })
        ) : (
          <Grid>"Cargando"</Grid>
        )}
      </Grid>
    </div>
  );
};

export default Products;
