import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
// import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
// // sections for this page
// import SectionBasics from "./Sections/SectionBasics.js";
// import SectionNavbars from "./Sections/SectionNavbars.js";
// import SectionTabs from "./Sections/SectionTabs.js";
// import SectionPills from "./Sections/SectionPills.js";
// import SectionNotifications from "./Sections/SectionNotifications.js";
// import SectionTypography from "./Sections/SectionTypography.js";
// import SectionJavascript from "./Sections/SectionJavascript.js";
// import SectionCarousel from "./Sections/SectionCarousel.js";
// import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
// import SectionLogin from "./Sections/SectionLogin.js";
// import SectionExamples from "./Sections/SectionExamples.js";
// import SectionDownload from "./Sections/SectionDownload.js";
import SectionPublication from "./Sections/SectionPublication.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import { useAuth } from "hooks/auth/index.js";

const useStyles = makeStyles(styles);

export default function Home(props) {
  const [publications, setPublications] = React.useState([]);
  const classes = useStyles();
  const { ...rest } = props;
  let { api } = useAuth();
  api = api();
  useEffect(async () => {
    try {
      let res = await api.get("/publications");
      setPublications(res.data);
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <div>
      <Header brand="Info Blog" fixed color="white" {...rest} />

      <div className={classNames(classes.main, classes.mainRaised)}>
        {publications.length > 0 ? (
          publications.map(function (publication) {
            return (
              <SectionPublication
                key={publication.id}
                publication={publication}
              />
            );
          })
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "70vh",
            }}
          >
            <h1 style={{ textAlign: "center" }}>
              Ainda não há publicações aqui.
            </h1>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
