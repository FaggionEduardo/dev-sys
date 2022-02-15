import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddPublication from "views/AddPublication/AddPublication";
import Home from "views/Home/Home";
import ListPublications from "views/ListPublications/ListPublications";
import LoginPage from "views/LoginPage/LoginPage";
import Publication from "views/Publication/Publication";
import UnPrivateRoute from "./UnPrivateRoute";
import PrivateRoute from "./PrivateRoute";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/publication/:id" component={Publication} />
        <UnPrivateRoute exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/list" component={ListPublications} />
        <PrivateRoute exact path="/add" component={AddPublication} />
      </Switch>
    </BrowserRouter>
  );
};

export default RoutesComponent;
