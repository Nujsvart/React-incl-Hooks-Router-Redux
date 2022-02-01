import React from "react";
import "./button.css";

const Button = props => {
  const handleSubmit = e => {
    e.preventDefault();
    const userName = props.userName.current.value;
    const userAge = props.userAge.current.value;
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      props.showError("invalid input", "please enter a valid name");
      return;
    }

    if (+userAge < 1) {
      props.showError("invalid age", "please enter a valid age");
      return;
    }

    props.addUser({ userName, userAge });
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
