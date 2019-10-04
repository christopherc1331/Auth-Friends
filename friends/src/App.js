import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/login" component={login} />
    </div>
  );
}

export default App;
