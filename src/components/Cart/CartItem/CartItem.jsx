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
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import { useState } from "react";
export default function MediaCard({ item }) {
  const classes = useStyles();
  const [itemCount, setItemCount] = useState(1);
  const addAmount = (amount) => {
    setItemCount(amount + 1);
  };
  const substractAmount = (amount) => {
    if (amount > 1) {
      setItemCount(amount - 1);
    }
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <IconButton>
          <CloseIcon />
        </IconButton>
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
          <Button onClick={() => substractAmount(itemCount)}>-</Button>
          {itemCount}
          <Button onClick={() => addAmount(itemCount)}>+</Button>
          {item.price.formatted_with_symbol}
        </Typography>
      </CardActions>
    </Card>
  );
}
