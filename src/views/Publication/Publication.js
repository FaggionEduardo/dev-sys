import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
// sections for this page
import SectionPublication from "./Sections/SectionPublication.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import { useParams } from "react-router-dom";
import { useAuth } from "hooks/auth/index.js";

const useStyles = makeStyles(styles);

export default function Publication() {
  const classes = useStyles();
  const [publication, setPublication] = React.useState({});
  const { id } = useParams();
  let { api } = useAuth();
  api = api();
  useEffect(async () => {
    try {
      let res = await api.get("/publications/" + id);
      setPublication(res.data);
    } catch (e) {}
  }, []);
  return (
    <div>
      <Header brand="Info Blog" fixed color="white" />

      <div className={classNames(classes.main, classes.mainRaised)}>
        {JSON.stringify(publication) != "{}" ? (
          <SectionPublication publication={publication} />
        ) : (
          ""
        )}
      </div>
      <Footer />
    </div>
  );
}
