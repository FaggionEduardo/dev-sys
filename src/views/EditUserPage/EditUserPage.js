import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import User from "@material-ui/icons/Person";
// core components
import useMyForm from "../../hooks/MyForm";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import Header from "components/Header/Header";
import fields from "./fields.js";
import { useAuth } from "hooks/auth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
const useStyles = makeStyles(styles);

export default function EditUserPage() {
  const [error, setError] = React.useState(false);

  const { push } = useHistory();

  let { api, user, setUser } = useAuth();
  api = api();
  const onSubmit = async (data) => {
    try {
      let response = await api.put("/users/" + user.id, data);
      setUser({
        id: response.data.id,
        username: response.data.username,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
      });
      push("/list");
    } catch (e) {
      setError(true);
    }
  };
  const {
    fields: input,
    errors,
    handleSubmit,
    handleChange,
  } = useMyForm(fields, user);
  const classes = useStyles();
  return (
    <div>
      <Header brand="Info Blog" fixed color="white" />
      <div className={classes.pageHeader}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={classes.form}
                >
                  <h3 style={{ textAlign: "center", fontWeight: 800 }}>
                    Editar informações do usuário.
                  </h3>
                  <CardBody>
                    {error ? (
                      <p
                        style={{
                          textAlign: "center",
                          color: "red",
                        }}
                      >
                        Erro ao editar usuário.
                      </p>
                    ) : (
                      ""
                    )}
                    <CustomInput
                      color="none"
                      labelText={input.firstName.label}
                      error={!!errors.firstName}
                      id="firstName"
                      name="firstName"
                      value={input.firstName.value}
                      formControlProps={{
                        fullWidth: true,
                      }}
                      onChange={({ target }) => {
                        handleChange(target);
                      }}
                      inputProps={{
                        type: input.firstName.type,
                      }}
                    />
                    <CustomInput
                      color="none"
                      labelText={input.lastName.label}
                      error={!!errors.lastName}
                      id="lastName"
                      name="lastName"
                      value={input.lastName.value}
                      formControlProps={{
                        fullWidth: true,
                      }}
                      onChange={({ target }) => handleChange(target)}
                      inputProps={{
                        type: input.lastName.type,
                      }}
                    />
                    <CustomInput
                      color="none"
                      labelText={input.username.label}
                      error={!!errors.username}
                      id="username"
                      name="username"
                      value={input.username.value}
                      formControlProps={{
                        fullWidth: true,
                      }}
                      onChange={({ target }) => handleChange(target)}
                      inputProps={{
                        type: input.username.type,
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button type="submit" variant="contained">
                      Editar
                    </Button>
                  </CardFooter>
                </form>
                <p style={{ textAlign: "center" }}>
                  <Link to="/list">Voltar</Link>
                </p>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
