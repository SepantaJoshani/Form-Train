import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  const nameInputChangeHandler = (event) => setEnteredName(event.target.value);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);
    console.log(enteredName);

    setEnteredName("");
  };

  const formClass = nameIsValid ? "form-control" : "form-control invalid";

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
        {!nameIsValid && <p className="error-text">Name Field is empty !</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
