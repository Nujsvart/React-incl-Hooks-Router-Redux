import React from "react";
import "./button.css";

const Button = props => {
  const handleSubmit = e => {
    e.preventDefault();
    const age = props.user.userAge;
    const name = props.user.userName;
    if (name.trim().length === 0 || age.trim().length === 0) return;

    if (+age < 1) return;
    props.addUser(props.user);
    props.resetForm();
  };
  return (
    <div>
      <button type="submit" onClick={handleSubmit}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
