import {  useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  const nameIsValid = enteredName.trim() !== "";
  const inputNameIsNotValid = !nameIsValid && nameTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setNameTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setNameTouched(true);

    if (!nameIsValid) {
      return;
    }

    console.log(enteredName);

    setEnteredName("");
    setNameTouched(false)
  };

  const formClass = inputNameIsNotValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formClass}>
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
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
