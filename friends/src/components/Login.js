import React from "react";
import { AxiosWithAuth } from "./utils/AxiosWithAux.js";

const Login = props => {

    const []

  const login = e => {
    e.preventDefault();

    AxiosWithAuth()
      .post("/login")
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
      <form>
          <input 
          value={}

          />
      </form>
  )

};

export default Login;
