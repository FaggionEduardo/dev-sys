import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";

import styles from "assets/jss/material-kit-react/views/listPublicationStyle";

import Form from "./Form";

const useStyles = makeStyles(styles);

export default function AddPublication() {
  const classes = useStyles();

  return (
    <div>
      <Header brand="Info Blog" fixed color="white" />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <Form />
      </div>
    </div>
  );
}
