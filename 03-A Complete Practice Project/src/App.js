import React, { useState } from "react";
import UserInput from "./components/UserInput/UserInput";
import UserList from "./components/UserList/UserList";
import "./App.css";
import ErrorModal from "./components/ErrorModal/ErrorModal";

function App() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState();

  const addUser = userInfo => {
    setUser(prevUser => {
      return [...prevUser, userInfo];
    });
  };

  const showError = (t, m) => {
    setError({ title: t, message: m });
  };

  const handleError = () => {
    setError(null);
  };

  return (
    <div className="App">
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          handleError={handleError}
        />
      )}
      <UserInput addUser={addUser} showError={showError} />
      <UserList userList={user} />
    </div>
  );
}

export default App;
