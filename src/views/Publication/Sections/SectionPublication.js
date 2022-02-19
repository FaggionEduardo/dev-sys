import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/publicationStyle.js";
import { AccountCircle, ArrowBack } from "@material-ui/icons";
import { Button, SvgIcon } from "@material-ui/core";
import { Link } from "react-router-dom";
// import image from "assets/img/publication.jpg";

const useStyles = makeStyles(styles);

export default function SectionPublication(publication) {
  const pub = publication.publication;
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Link className={classes.linkStyles} to="/">
        <Button variant="outlined" startIcon={<ArrowBack />}>
          Voltar
        </Button>
      </Link>
      <GridItem xs={12} sm={12} md={12}>
        <span style={{ display: "flex", alignItems: "center" }}>
          <SvgIcon className={classes.user} component={AccountCircle} />
          <h1 style={{ marginLeft: "0.5%" }}>
            {pub.User.firstName + " " + pub.User.lastName}
          </h1>
          <h2 style={{ marginLeft: "0.5%" }}>{" @" + pub.User.username}</h2>
        </span>
        <h3>{pub.title}</h3>
        <h4>{pub.description}</h4>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={"http://localhost:4000/images/" + pub.image}
            alt="..."
            style={{ width: "100%", margin: "20px 0" }}
            className={
              classes.imgRaised +
              " " +
              classes.imgRounded +
              " " +
              classes.imgFluid
            }
          />
        </div>
      </GridItem>
    </div>
  );
}
