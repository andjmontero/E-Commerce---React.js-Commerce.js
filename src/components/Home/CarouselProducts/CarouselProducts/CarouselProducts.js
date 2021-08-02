import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Container, Typography } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles.js";

function CarouselDesktop({ products }) {
  const classes = useStyles();

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <ArrowBackIosIcon color="primary" />,
    nextArrow: <ArrowForwardIosIcon color="primary" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          dots: true,
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <Container align="left" className={classes.cont}>
        <Typography variant="h6" className={classes.location} align="left">
          Top Selling
        </Typography>
        <div className={classes.box}></div>
      </Container>
      <Container align="center" className={classes.container}>
        <Slider {...settings}>
          {products.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </Slider>
      </Container>
    </>
  );
}

export default CarouselDesktop;
