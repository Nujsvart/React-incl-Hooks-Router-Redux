import React from "react";
import "./button.css";

const Button = props => {
  const handleSubmit = e => {
    e.preventDefault();
    const age = props.user.userAge;
    const name = props.user.userName;
    if (name.trim().length === 0 || age.trim().length === 0) {
      props.showError("invalid input", "please enter a valid name");
      return;
    }

    if (+age < 1) {
      props.showError("invalid age", "please enter a valid age");
      return;
    }

    props.addUser(props.user);
    props.resetForm();
  };

  return (
    <>
      <button type="submit" onClick={handleSubmit}>
        {props.children}
      </button>
    </>
  );
};

export default Button;
