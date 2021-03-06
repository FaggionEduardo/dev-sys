import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import styles from "assets/jss/material-kit-react/components/headerStyle.js";
import logo from "assets/img/logo.png";
import { LogOut, User } from "react-feather";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  const { isAuthenticate, Logout } = useAuth();
  const location = useLocation();
  const { color, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  });
  const brandComponent = (
    <>
      <Link className={classes.linkStyles} to="/">
        <Button className={classes.title}>
          <img src={logo} style={{ height: 45, marginRight: 10 }} alt="logo" />
          {brand}
        </Button>
      </Link>
      {isAuthenticate &&
      location.pathname != "/" &&
      location.pathname.slice(0, 12) != "/publication" ? (
        <div>
          <Link className={classes.linkStyles} to="/editUser">
            <Button className={classes.title}>
              <User />
            </Button>
          </Link>
          <Button onClick={() => Logout()} className={classes.title}>
            <LogOut />
          </Button>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
  return (
    <>
      <AppBar className={appBarClasses}>
        <Toolbar className={classes.container}>{brandComponent}</Toolbar>
      </AppBar>
      <div className={classes.appBar}></div>
    </>
  );
}

Header.defaultProp = {
  color: "white",
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark",
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark",
    ]).isRequired,
  }),
};
