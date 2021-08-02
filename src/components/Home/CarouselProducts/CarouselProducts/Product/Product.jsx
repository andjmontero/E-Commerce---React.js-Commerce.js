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

import { UseCart } from "../../../../../CartContext";

const Product = ({ item }) => {
  const classes = useStyles();

  const { handleAddToCart, cart } = UseCart(); //UseContext Consumer

  return (
    <div className={classes.card}>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          image={item.media.source}
          alt={item.name}
          height="250"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="h3"
          ></Typography>
        </CardContent>

        <CardActions className={classes.cardActions}>
          <Typography variant="h6">
            {item.price.formatted_with_symbol}
          </Typography>
          <IconButton
            onClick={() => {
              handleAddToCart(item);
            }}
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
