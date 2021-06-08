import React from "react";

import {
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  CardActionArea,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const Product = ({ product }) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="mouse"
          height="250"
          image={product.img}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h3">
            {product.brand}
          </Typography>
        </CardContent>

        <CardActions className={classes.cardActions}>
          <Typography variant="h6">${product.price}</Typography>
          <IconButton>
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
