import React, { useState } from "react";
import UserInput from "./components/UserInput/UserInput";
import UserList from "./components/UserList/UserList";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  const addUser = userInfo => {
    let userList = user;
    userList.push(userInfo)
    setUser(userList)

    console.log(user)
  };

  return (
    <div className="App">
      <UserInput addUser={addUser} />
      <UserList userList={user} />
    </div>
  );
}

export default App;
