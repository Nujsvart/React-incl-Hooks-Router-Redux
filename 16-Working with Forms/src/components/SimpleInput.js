import useInput from "../hooks/useInput";

const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const SimpleInput = props => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetForm: resetName,
  } = useInput(value => value.trim() !== "");

  const {
    value: enteredMail,
    isValid: mailIsValid,
    hasError: mailHasError,
    valueChangeHandler: mailChangeHandler,
    inputBlurHandler: mailBlurHandler,
    resetForm: resetMail
  } = useInput(validateEmail);


  let formIsValid = false;

  if (enteredNameIsValid && mailIsValid) formIsValid = true;

  const formSubmissionHandler = e => {
    e.preventDefault();

    if (!enteredNameIsValid) return;

    resetName();
    resetMail();
  };

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameChangeHandler}
          type="text"
          id="name"
          value={enteredName}
          onBlur={nameBlurHandler}
        />

        {nameHasError && <p className="error-text">Name must not be empty.</p>}
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

        {mailHasError && (
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
