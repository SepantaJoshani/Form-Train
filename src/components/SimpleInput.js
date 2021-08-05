import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);

  useEffect(() => {
    if (nameIsValid) {
      console.log("Valid");
    }
  }, [nameIsValid]);
  const nameInputChangeHandler = (event) => setEnteredName(event.target.value);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setNameTouched(true);

    if (enteredName.trim() === "") {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);
    console.log(enteredName);

    setEnteredName("");
  };

  const inputNameIsNotValid = !nameIsValid && nameTouched;

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
