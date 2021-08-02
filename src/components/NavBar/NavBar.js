import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import { UseCart } from "../../CartContext";
import { NavLink } from "react-router-dom";
import { Badge } from "@material-ui/core";
import useStyles from "./styles";

function NavBar({ ToggleDrawer, cartAmount }) {
  const classes = useStyles();
  const { cart } = UseCart();
  return (
    <div>
      <AppBar className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            InStance
          </Typography>
          <div className={classes.navLinks}>
            <NavLink className={classes.link} to="/">
              Home
            </NavLink>
            <NavLink className={classes.link} to="/Products">
              Products
            </NavLink>
            <NavLink className={classes.link} to="/Contact">
              Contact
            </NavLink>
          </div>
          <div>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => ToggleDrawer(true)}
            >
              <Badge badgeContent={cart.total_items} color="error">
                <ShoppingCartIcon className={classes.cartIcon} />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default NavBar;

{
  /*<IconButton
edge="start"
className={classes.menuButton}
color="inherit"
aria-label="menu"
>
<MenuIcon />
</IconButton>*/
}
