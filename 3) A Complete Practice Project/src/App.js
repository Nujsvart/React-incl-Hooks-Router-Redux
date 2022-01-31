import React, { useState } from "react";
import UserInput from "./components/UserInput/UserInput";
import UserList from "./components/UserList/UserList";
import "./App.css";
import ErrorModal from "./components/ErrorModal/ErrorModal";

function App() {
  const [user, setUser] = useState([]);

  const addUser = userInfo => {
    setUser(prevUser => {
      return [...prevUser, userInfo];
    });
  };

  return (
    <div className="App">
      <ErrorModal
        title={"An error occured!"}
        message={"Something went wrong!"}
      />
      <UserInput addUser={addUser} />
      <UserList userList={user} />
    </div>
  );
}

export default App;
