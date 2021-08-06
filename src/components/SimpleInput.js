import React from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    valueIsValid: nameIsValid,
    error: nameInputError,
    change: nameChangeHandler,
    Blur: nameBlurHandler,
    reset: nameResetHandler,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    valueIsValid: emailIsValid,
    error: emailInputError,
    change: emailChangeHandler,
    Blur: emailBlurHandler,
    reset: emailResetHandler,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid || !emailIsValid) {
      return;
    }

    console.log(enteredName);

    nameResetHandler();
    emailResetHandler();
  };

  const nameInputClass = nameInputError
    ? "form-control invalid"
    : "form-control";

  const emailInputClass = emailInputError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputError && <p className="error-text">Name Field is empty !</p>}
      </div>
      <div className={emailInputClass}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputError && (
          <p className="error-text">Please Enter a Valid E-Mail</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
