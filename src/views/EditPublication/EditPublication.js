import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";

import styles from "assets/jss/material-kit-react/views/listPublicationStyle";

import { useParams } from "react-router-dom";

import Form from "./Form";

const useStyles = makeStyles(styles);

export default function EditPublication() {
  const classes = useStyles();
  const { id } = useParams();
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
  const data = publications.find((publication) => publication.id == id);

  return (
    <div>
      <Header brand="Info Blog" fixed color="white" />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <Form data={data} />
      </div>
    </div>
  );
}
