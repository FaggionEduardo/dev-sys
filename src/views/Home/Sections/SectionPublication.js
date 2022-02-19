import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { SvgIcon } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { User } from "react-feather";
import styles from "assets/jss/material-kit-react/views/componentsSections/publicationsStyle.js";
import { Link } from "react-router-dom";
// import image from "assets/img/publication.jpg";

const useStyles = makeStyles(styles);

export default function SectionPublication(publication) {
  const pub = publication.publication;
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <Link className={classes.linkStyles} to={"/publication/" + pub.id}>
          <GridContainer style={{ padding: "5%" }}>
            <GridItem xs={12} sm={12} md={12}>
              <span style={{ display: "flex", alignItems: "center" }}>
                <SvgIcon className={classes.user} component={AccountCircle} />
                <h1 style={{ marginLeft: "0.5%" }}>
                  {pub.User.firstName + " " + pub.User.lastName}
                </h1>
                <h2 style={{ marginLeft: "0.5%" }}>
                  {" @" + pub.User.username}
                </h2>
              </span>
              <h3>{pub.title}</h3>
              <h4>{pub.description}</h4>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={"http://localhost:4000/images/" + pub.image}
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
        </Link>
      </div>
    </div>
  );
}
