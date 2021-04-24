import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import NewUser from "./components/NewUser";
import EditUser from "./components/EditUser";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./states/actions";

const App = () => {
  return (
    <Router>
      <div className="container p-3 mx-auto flex">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/newuser">
            <NewUser></NewUser>
          </Route>
          <Route path="/edituser/:id">
            <EditUser></EditUser>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
