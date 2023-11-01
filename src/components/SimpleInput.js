// import React, { useEffect } from "react";
import { useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  // const [formIsValid, setFormIsFalid] = useState(false);

  // useEffect(() => {
  //   if (enteredName.trim() === "") {
  //     setFormIsFalid(false);
  //   } else {
  //     setFormIsFalid(true);
  //   }
  // }, [enteredName]);
  //////////////////////////////////////////////////////////

  let formIsValid = false;
  if (enteredName.trim() !== "") {
    formIsValid = true;
  } else {
    formIsValid = false;
  }
  //////////////////////////////////////////////////////

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
    // if (e.target.value.trim() !== "") {
    //   setNameIsValid(true);
    // } else {
    //   setNameIsValid(false);
    // }
  };

  //////////////////////////////////////////////////////
  const formSubmitHandler = (e) => {
    e.preventDefault();
    // if (enteredName.trim() !== "") {
    //   setNameIsValid(true);
    // } else {
    //   setNameIsValid(false);
    //   return;
    // }
    console.log(enteredName);

    setEnteredName("");
  };
  ////////////////////////////////////////////
  const nameBlurHandler = () => {
    // if (enteredName.trim() === "") {
    //   setEnteredName(false);
    // } else {
    //   setNameIsValid(true);
    // }
  };
  ///////////////////////////////////////////////////////
  const inputNameClasses = !nameIsValid
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameBlurHandler}
        />
        {!nameIsValid && <p>Must not empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
