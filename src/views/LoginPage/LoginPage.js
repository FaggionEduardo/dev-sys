import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import User from "@material-ui/icons/Person";
// core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import Header from "components/Header/Header";
import { useAuth } from "hooks/auth";
import { Link } from "react-router-dom";
const useStyles = makeStyles(styles);

export default function RegisterPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const { Login } = useAuth();
  async function onSubmit() {
    try {
      await Login({ username, password });
    } catch (e) {
      setError(true);
    }
  }

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
                  onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                  }}
                  className={classes.form}
                >
                  <h3 style={{ textAlign: "center", fontWeight: 800 }}>
                    Login
                  </h3>
                  <CardBody>
                    {error ? (
                      <p
                        style={{
                          textAlign: "center",
                          color: "red",
                        }}
                      >
                        Usu??rio ou senha incorretos.
                      </p>
                    ) : (
                      ""
                    )}
                    <CustomInput
                      color="none"
                      labelText="Usu??rio"
                      id="username"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <User />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Senha"
                      id="password"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon>lock_outline</Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button type="submit" variant="contained">
                      Login
                    </Button>
                  </CardFooter>
                </form>
                <p style={{ textAlign: "center" }}>
                  Ainda n??o tem conta? <Link to="/register">Crie aqui</Link>
                </p>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
