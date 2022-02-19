import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import useMyForm from "../../hooks/MyForm";
import Field from "../../components/Field/Field.js";
import UploadInput from "../../components/UploadInput/UploadInput.js";
import PropTypes from "prop-types";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  makeStyles,
  Container,
} from "@material-ui/core";

import fields from "./fields.js";

const useStyles = makeStyles(() => ({
  root: {},
}));

const Form = ({ onSubmit, className }) => {
  const classes = useStyles();

  const {
    fields: input,
    errors,
    handleSubmit,
    handleChange,
  } = useMyForm(fields);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(classes.root, className)}
    >
      <Container maxWidth={false}>
        <Box mt={3}>
          <Card>
            <CardHeader
              subheader={"Aqui você pode cadastrar uma nova publicação"}
              title="Adicionar publicação"
            />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <Field
                    name="title"
                    field={input.title}
                    error={errors.title}
                    onChange={({ target }) => handleChange(target)}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <UploadInput
                    name="image"
                    field={input.image}
                    error={errors.image}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <Field
                    name="description"
                    field={input.description}
                    error={errors.description}
                    multiline
                    rows={10}
                    onChange={({ target }) => handleChange(target)}
                  />
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <Box display="flex" justifyContent="flex-end" p={2}>
              <Link style={{ textDecoration: "none" }} to="/list">
                <Button
                  style={{
                    marginRight: 10,
                    backgroundColor: "#8B0000",
                    color: "#fff",
                  }}
                  variant="contained"
                >
                  Cancelar
                </Button>
              </Link>
              <Button color="primary" variant="contained" type="submit">
                Salvar
              </Button>
            </Box>
          </Card>
        </Box>
      </Container>
    </form>
  );
};
Form.propTypes = {
  onSubmit: PropTypes.func,
  className: PropTypes.string,
};

export default Form;
