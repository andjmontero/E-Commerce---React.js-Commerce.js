import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: { backgroundColor: "wheat", color: "black" },
  title: {
    fontFamily: "Poppins, sans serif",
    textAlign: "center",
    fontSize: "40px",
  },
  navLinks: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-evenly",
  },
  link: {
    color: "black",
    textDecoration: "none",
    fontSize: "20px",
  },
  cartIcon: {
    fontSize: "30px",
  },
}));
