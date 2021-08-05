import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

  const nameIsValid = enteredName.trim() !== "";
  const inputNameIsNotValid = !nameIsValid && nameTouched;

const emailIsValid =enteredEmail.includes('@')
const emailIsNotValid = !emailIsValid && enteredEmailTouched


  let formIsValid = false;

  if (nameIsValid&&emailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setNameTouched(true);
  };

  const emailInputChangeHandler = (event)=>{
    setEnteredEmail(event.target.value)
  }

  const emailInputBlurHandler = ()=>{
    setEnteredEmailTouched(true)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setNameTouched(true);
    setEnteredEmailTouched(true)

    if (!nameIsValid || !emailIsValid) {
      return;
    }

    console.log(enteredName);

    setEnteredName("");
    setNameTouched(false);
    setEnteredEmail('')
    setEnteredEmailTouched(false)
  };

  const nameInputClass = inputNameIsNotValid
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
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {inputNameIsNotValid && (
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
