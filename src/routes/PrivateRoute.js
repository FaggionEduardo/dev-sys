import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../hooks/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        !auth.isAuthenticate ? (
          <Redirect exact to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
