import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/publicationStyle.js";
// import image from "assets/img/publication.jpg";

const useStyles = makeStyles(styles);

export default function SectionPublication() {
  // const {title, desription, img}
  const classes = useStyles();
  console.log(require("assets/img/publication.jpg"));
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <h2>Completed with examples</h2>
            <h4>
              The kit comes with three pre-built pages to help you get started
              faster. You can change the text and images and you{"'"}re good to
              go. More importantly, looking at them will give you a picture of
              what you can build with this powerful kit.
            </h4>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={window.location.origin + "src/assets/img/publication.jpg"}
                alt="..."
                style={{ maxHeight: 500, margin: "20px 0" }}
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
        </GridContainer>
      </div>
    </div>
  );
}
