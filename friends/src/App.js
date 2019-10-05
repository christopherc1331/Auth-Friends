import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login.js";
import FriendDashboard from "./components/FriendDashboard.js";
import Start from "./components/Start.js";
import PrivateRoute from "./components/PrivateRoute.js";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const loginToApp = () => {
    setLoggedIn(true);
  };

  return (
    <div className="App">
      <Route path="/" exact component={Start} />
      <Route
        path="/login"
        exact
        render={props => <Login {...props} loginToApp={loginToApp} />}
      />
      <PrivateRoute path="/FriendDashboard" component={FriendDashboard} />
    </div>
  );
}

export default App;
