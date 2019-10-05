import React from "react";
import { NavLink } from "react-router-dom";

const Start = props => {
  return (
    <>
      <div className="button_cont" align="center">
        <NavLink className="example_a" to="/login">
          Click To Login
        </NavLink>
      </div>
    </>
  );
};

export default Start;
