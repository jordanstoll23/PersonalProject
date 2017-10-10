import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Profile from './components/Profile/profile';

export default (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
    </Switch>
)