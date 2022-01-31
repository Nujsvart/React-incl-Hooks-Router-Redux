import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <div>
      <button type="submit" onClick={() => props.addUser(props.user)}>Add User</button>
    </div>
  );
};

export default Button;
