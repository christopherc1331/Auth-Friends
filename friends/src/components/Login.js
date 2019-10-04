import React from "react";
import { AxiosWithAuth } from "../utils/AxiosWithAux.js";
import { useFormHook } from "../hooks/formHook.js";

const Login = props => {
  const [userName, password] = useFormHook();

  const login = e => {
    e.preventDefault();

    AxiosWithAuth()
      .post("/login")
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form>
        <input
          name="userName"
          placeholder="Type User Name"
          value={userName}
          onChange={useFormHook}
        />
      </form>
    </div>
  );
};

export default Login;
