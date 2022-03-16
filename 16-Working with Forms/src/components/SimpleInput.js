import { useState, useEffect } from "react";

const SimpleInput = props => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameisValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  //const nameInputRef = useRef();

  useEffect(() => {
    if (enteredNameisValid) console.log("Name input is valid");
  }, [enteredNameisValid]);

  const nameInputChangeHandler = e => {
    setEnteredName(e.target.value);
  };

  const formSubmissionHandler = e => {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);
    //const enteredValue = nameInputRef.current.value;
    //console.log(enteredValue);
  };

  const nameInputIsInvalid = !enteredNameisValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

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

        {nameInputIsInvalid && (
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
