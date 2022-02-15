import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../hooks/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user, token } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        user && token ? <Redirect exact to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
