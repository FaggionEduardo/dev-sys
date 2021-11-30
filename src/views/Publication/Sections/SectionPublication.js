import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/publicationStyle.js";
import { ArrowBack } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
// import image from "assets/img/publication.jpg";

const useStyles = makeStyles(styles);

export default function SectionPublication(publication) {
  const pub = publication.publication;
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Link to="/">
        <Button variant="outlined" startIcon={<ArrowBack />}>
          Voltar
        </Button>
      </Link>
      <GridItem xs={12} sm={12} md={12}>
        <h2>{pub.title}</h2>
        <h4>{pub.description}</h4>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={pub.img}
            alt="..."
            style={{ height: "50vw", maxHeight: 700, margin: "20px 0" }}
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
