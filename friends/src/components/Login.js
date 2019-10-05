import React, { useState } from "react";
import { AxiosWithAuth } from "../utils/AxiosWithAux.js";

const Login = props => {
  const [user, setUser] = useState({ username: "", password: "" });

  const login = e => {
    e.preventDefault();

    AxiosWithAuth()
      .post("/login", user)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/FriendDashboard");
      })
      .catch(err => console.log(err));
    props.loginToApp();
    setUser({ username: "", password: "" });
  };

  const handleChanges = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={e => login(e)}>
        <input
          type="text"
          name="username"
          placeholder="Type User Name"
          value={user.username}
          onChange={e => handleChanges(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="Type Password"
          value={user.password}
          onChange={e => handleChanges(e)}
        />
        <button hidden></button>
      </form>
    </div>
  );
};

export default Login;
