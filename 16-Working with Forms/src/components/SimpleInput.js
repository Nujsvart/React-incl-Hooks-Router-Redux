import { useState } from "react";

const SimpleInput = props => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  //const nameInputRef = useRef();

  const [enteredMail, setEnteredMail] = useState("");
  const [enteredMailTouched, setEnteredMailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const validateEmail = email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const mailChangeHandler = e => {
    setEnteredMail(e.target.value);
    console.log(enteredMail);
  };

  const mailBlurHandler = () => {
    setEnteredMailTouched(true);
  };

  const enteredMailIsValid = validateEmail(enteredMail);
  const mailIsInvalid = !enteredMailIsValid && enteredMailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredMailIsValid) formIsValid = true;

  const nameInputChangeHandler = e => {
    setEnteredName(e.target.value);
  };

  const formSubmissionHandler = e => {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) return;

    setEnteredName("");
    setEnteredNameTouched(false);

    setEnteredMail("");
    setEnteredMailTouched(false);

    console.log(enteredName);
    //const enteredValue = nameInputRef.current.value;
    //console.log(enteredValue);
  };

  const nameInputBlurHandler = e => {
    setEnteredNameTouched(true);
  };

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
          onBlur={nameInputBlurHandler}
        />

        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>

      <div className={nameInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          onChange={mailChangeHandler}
          type="email"
          id="email"
          value={enteredMail}
          onBlur={mailBlurHandler}
        />

        {mailIsInvalid && (
          <p className="error-text">Please enter a valid e-mail.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
