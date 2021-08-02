import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import IconButton from "@material-ui/core/IconButton";
import { UseCart } from "../../../CartContext";
export default function MediaCard({ item }) {
  const classes = useStyles();
  const { cart, handleRemoveFromCart, handleUpdateCartQty } = UseCart();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.media.source}
          title={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography>
          <Button
            className={classes.btnAmount}
            onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
          >
            -{" "}
          </Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button
            className={classes.btnAmount}
            onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </Button>
          {item.line_total.formatted_with_symbol}
        </Typography>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => handleRemoveFromCart(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}
