import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: enteredName,
    valueIsValid: nameIsValid,
    error: nameInputError,
    change: nameChangeHandler,
    Blur: nameBlurHandler,
    reset: nameResetHandler,
  } = useInput(isNotEmpty);
  const {
    value: enteredFamily,
    valueIsValid: familyIsValid,
    error: familyInputError,
    change: familyChangeHandler,
    Blur: familyBlurHandler,
    reset: familyResetHandler,
  } = useInput(isNotEmpty);
  const {
    value: enteredEmail,
    valueIsValid: emailIsValid,
    error: emailInputError,
    change: emailChangeHandler,
    Blur: emailBlurHandler,
    reset: emailResetHandler,
  } = useInput(isEmail);

  let formIsValid = false;

  if (nameIsValid && familyIsValid & emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid || !familyIsValid || !emailIsValid) {
      return;
    }

    nameResetHandler();
    familyResetHandler();
    emailResetHandler();
  };

  const nameInputClass = nameInputError
    ? "form-control invalid"
    : "form-control";

  const familyInputClass = familyInputError
    ? "form-control invalid"
    : "form-control";

  const emailInputClass = emailInputError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClass}>
          <label htmlFor="name">First Name</label>
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
        <div className={familyInputClass}>
          <label htmlFor="name">Last Name</label>
          <input
            value={enteredFamily}
            onChange={familyChangeHandler}
            onBlur={familyBlurHandler}
            type="text"
            id="name"
          />
          {familyInputError && (
            <p className="error-text">Last Name Field is empty!</p>
          )}
        </div>
      </div>
      <div className={emailInputClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
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

export default BasicForm;
