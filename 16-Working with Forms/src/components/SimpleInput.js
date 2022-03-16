import { useState } from "react";

const SimpleInput = props => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameisValid, setEnteredNameIsValid] = useState(true);
  //const nameInputRef = useRef();

  const nameInputChangeHandler = e => {
    setEnteredName(e.target.value);
  };

  const formSubmissionHandler = e => {
    e.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);
    //const enteredValue = nameInputRef.current.value;
    //console.log(enteredValue);
  };

  const nameInputClasses = enteredNameisValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameInputChangeHandler}
          type="text"
          id="name"
          value={enteredName}
        />

        {!enteredNameisValid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
