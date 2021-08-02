import React from "react";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import CarouselProducts from "./CarouselProducts/CarouselProducts/CarouselProducts";
function Home({ products }) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.home}>
        <div className={classes.main}>
          <Typography variant="h3" className={classes.text}>
            Cutomize your workplace
          </Typography>
          <Link to="/Products">
            <button className={classes.button}>Shop Now</button>
          </Link>
        </div>
      </div>
      <CarouselProducts products={products} />
    </>
  );
}

export default Home;
