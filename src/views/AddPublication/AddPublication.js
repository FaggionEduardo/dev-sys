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
import { useHistory } from "react-router";
import Form from "./Form";
import { useAuth } from "hooks/auth";
const useStyles = makeStyles(styles);

export default function AddPublication() {
  const classes = useStyles();
  const { push } = useHistory();
  let { api } = useAuth();
  api = api();
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.image[0]);
      formData.append("title", data.title);
      formData.append("description", data.description);
      await api.post("/publications/create", formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      });
      push("/list");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Header brand="Info Blog" fixed color="white" />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <Form onSubmit={onSubmit} />
      </div>
    </div>
  );
}
