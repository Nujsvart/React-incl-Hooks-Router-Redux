import React, { useState, useRef } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import "./userinput.css";

const UserInput = props => {
  const nameInputRef = useRef("");
  const ageInputRef = useRef("");

  /*   const [userInfo, setUserInfo] = useState({ userName: "", userAge: "" });
  
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

  const resetForm = () => {
    setUserInfo({ userName: "", userAge: "" });
  };
 */

  return (
    <div className="container">
      <Card>
        <form>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            //value={userInfo.userName}
            //onChange={handleUserName}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            name="age"
            id="age"
            //value={userInfo.userAge}
            //onChange={handleUserAge}
            ref={ageInputRef}
          />

          <Button
            addUser={props.addUser}
            showError={props.showError}
            userName={nameInputRef}
            userAge={ageInputRef}
          >
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default UserInput;
