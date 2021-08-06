import {  useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    valueIsValid:nameIsValid,
    error: nameInputError,
    change: nameChangeHandler,
    Blur: nameBlurHandler,
    reset: nameResetHandler,
  } = useInput(value=>value.trim()!=='');

  
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

 

  const emailIsValid = enteredEmail.includes("@");
  const emailIsNotValid = !emailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  



  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    

    if (!nameIsValid || !emailIsValid) {
      return;
    }

    console.log(enteredName);

    nameResetHandler()
    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  const nameInputClass = nameInputError
    ? "form-control invalid"
    : "form-control";

  const emailInputClass = emailIsNotValid
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
        {nameInputError && (
          <p className="error-text">Name Field is empty !</p>
        )}
      </div>
      <div className={emailInputClass}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailIsNotValid && (
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
