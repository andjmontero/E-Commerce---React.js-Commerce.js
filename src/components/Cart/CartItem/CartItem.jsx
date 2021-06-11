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
export default function MediaCard() {
  const classes = useStyles();
const[itemCount, setItemCount]= useState(0);
const addAmount=(amount)=>{
    setItemCount(amount + 1 );
}
const substractAmount=(amount)=>{
    if(amount>0){setItemCount(amount - 1)};
}
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <IconButton>
          <CloseIcon />
        </IconButton>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1618499890638-3a0dd4b278b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Mouse
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       <Typography> <Button onClick={()=>substractAmount(itemCount)}>-</Button>{itemCount}<Button onClick={()=> addAmount(itemCount)}>+</Button></Typography> 

      </CardActions>
    </Card>
  );
}
