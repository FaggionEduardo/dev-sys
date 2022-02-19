import React, { useEffect } from "react";
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
import { useHistory } from "react-router";

import Form from "./Form";
import { useAuth } from "hooks/auth";

const useStyles = makeStyles(styles);

export default function EditPublication() {
  const classes = useStyles();
  const [publication, setPublication] = React.useState({});
  const { id } = useParams();
  const { push } = useHistory();
  let { api } = useAuth();
  api = api();
  useEffect(async () => {
    try {
      let res = await api.get("/publications/" + id);
      setPublication(res.data);
    } catch (e) {}
  }, []);
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      if (data.image[0]) {
        formData.append("image", data.image[0]);
      }
      formData.append("title", data.title);
      formData.append("description", data.description);
      await api.put("/publications/" + id, formData, {
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
        {JSON.stringify(publication) != "{}" ? (
          <Form onSubmit={onSubmit} data={publication} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
