import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Feedback from "../pages/Feedback";
import Forum from "../pages/Forum";
import General from "../pages/General";
import Home from "../pages/Home";
import Member from "../pages/Member";
import Module from "../pages/Module";
import Register from "../pages/Register";
import Session from "../pages/Session";
import Story from "../pages/Story";
import Training from "../pages/Training";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/Training" component={Training}></Route>
      <Route path="/session" component={Session}></Route>
      <Route path="/story" component={Story}></Route>
      <Route path="/general" component={General}></Route>
      <Route path="/feedback" component={Feedback}></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/forum" component={Forum}></Route>
      <Route path="/module" component={Module}></Route>
      <Route path="/member" component={Member}></Route>
    </Switch>
  );
};

export default Main;
