import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// sections for this page
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";
import SectionPublication from "./Sections/SectionPublication.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Home(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const publications = [
    {
      id: 1,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat nisl arcu, eu luctus ante congue eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris malesuada nisi nibh. Suspendisse in augue urna. Phasellus ligula nunc, sodales ut quam sed, dictum faucibus nisi. Nullam imperdiet placerat odio.",
      img: "/publication.jpg",
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat nisl arcu, eu luctus ante congue eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris malesuada nisi nibh. Suspendisse in augue urna. Phasellus ligula nunc, sodales ut quam sed, dictum faucibus nisi. Nullam imperdiet placerat odio.",
      img: "/publication.jpg",
    },
    {
      id: 3,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat nisl arcu, eu luctus ante congue eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris malesuada nisi nibh. Suspendisse in augue urna. Phasellus ligula nunc, sodales ut quam sed, dictum faucibus nisi. Nullam imperdiet placerat odio.",
      img: "/publication.jpg",
    },
    {
      id: 4,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat nisl arcu, eu luctus ante congue eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris malesuada nisi nibh. Suspendisse in augue urna. Phasellus ligula nunc, sodales ut quam sed, dictum faucibus nisi. Nullam imperdiet placerat odio.",
      img: "/publication.jpg",
    },
  ];
  return (
    <div>
      <Header brand="Info Blog" fixed color="white" {...rest} />

      <div className={classNames(classes.main, classes.mainRaised)}>
        {publications.map(function (publication) {
          return (
            <SectionPublication
              key={publication.id}
              publication={publication}
            />
          );
        })}
        <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload />
      </div>
      <Footer />
    </div>
  );
}
