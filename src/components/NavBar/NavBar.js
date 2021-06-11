import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import { Badge } from "@material-ui/core";
import useStyles from "./styles";

function NavBar({ ToggleDrawer }) {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            InStance
          </Typography>
          <div className={classes.navLinks}>
            <NavLink className={classes.link} to="/">
              Home
            </NavLink>
            <NavLink className={classes.link} to="/">
              Products
            </NavLink>
            <NavLink className={classes.link} to="/">
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
              <Badge badgeContent={2} color="error">
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
