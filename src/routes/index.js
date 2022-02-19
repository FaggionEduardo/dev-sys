import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddPublication from "views/AddPublication/AddPublication";
import EditPublication from "views/EditPublication/EditPublication";
import Home from "views/Home/Home";
import ListPublications from "views/ListPublications/ListPublications";
import EditUserPage from "views/EditUserPage/EditUserPage";
import LoginPage from "views/LoginPage/LoginPage";
import RegisterPage from "views/RegisterPage/RegisterPage";
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
        <UnPrivateRoute exact path="/register" component={RegisterPage} />
        <PrivateRoute exact path="/editUser" component={EditUserPage} />
        <PrivateRoute exact path="/list" component={ListPublications} />
        <PrivateRoute exact path="/add" component={AddPublication} />
        <PrivateRoute exact path="/edit/:id" component={EditPublication} />
      </Switch>
    </BrowserRouter>
  );
};

export default RoutesComponent;
