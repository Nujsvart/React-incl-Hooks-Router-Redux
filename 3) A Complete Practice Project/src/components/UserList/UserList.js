import React from "react";
import Card from "../Card/Card";
import "./userlist.css";

const UserList = props => {
  return (
    <Card>
      <ul>
        {props.userList.map((user, i) => (
          <li key={i}>
            {user.userName} ({user.userAge} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
