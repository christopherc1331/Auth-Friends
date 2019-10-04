import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login.js";
import Dashboard from "./components/Dashboard.js";

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
