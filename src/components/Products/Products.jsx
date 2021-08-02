import { Grid } from "@material-ui/core";
import React from "react";
import Product from "./Product/Product";
import useStyles from "./styles";

const Products = ({ products }) => {
  const classes = useStyles();

  return (
    <div className={classes.mainGrid}>
      <Grid container justify="center" spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
