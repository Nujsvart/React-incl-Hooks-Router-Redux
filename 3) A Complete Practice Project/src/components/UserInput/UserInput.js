import React, { useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import "./userinput.css";

const UserInput = props => {
  const [userInfo, setUserInfo] = useState({ userName: "", userAge: "" });

  const handleUserName = e => {
    setUserInfo(prevState => ({
      ...prevState,
      userName: e.target.value,
    }));
  };

  const handleUserAge = e => {
    setUserInfo(prevState => ({
      ...prevState,
      userAge: e.target.value,
    }));
  };

  return (
    <Card>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        onChange={handleUserName}
      />
      <label htmlFor="age">Age (Years)</label>
      <input type="number" name="age" id="age" onChange={handleUserAge} />

      <Button addUser={props.addUser} user={userInfo} />
    </Card>
  );
};

export default UserInput;
