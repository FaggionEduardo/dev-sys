import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../hooks/auth";

const UnPrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isAuthenticate ? (
          <Redirect exact to="/list" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default UnPrivateRoute;
