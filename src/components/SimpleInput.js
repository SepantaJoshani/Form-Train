import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const nameInputChangeHandler = (event) => setEnteredName(event.target.value);
  const inpRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const RefVal = inpRef.current.value;

    console.log(enteredName);
    console.log(RefVal);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={inpRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
