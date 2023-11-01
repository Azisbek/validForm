import { useEffect, useReducer, useState } from "react";

const reducerInput = (prevState, actions) => {
  if (actions.type === "FIRST_NAME") {
    return {
      ...prevState,
      firstName: actions.payload,
    };
  }
  if (actions.type === "LAST_NAME") {
    return {
      ...prevState,
      lastName: actions.payload,
    };
  }
  if (actions.type === "EMAIL") {
    return {
      ...prevState,
      email: actions.payload,
    };
  }
};

const BasicForm = () => {
  const [formIsValid, setFormIsFalid] = useState(false);
  const [inputState, dispatch] = useReducer(reducerInput, {
    firstName: "",
    lastName: "",
    email: "",
  });

  const inputFirstNameChangeHandler = (e) => {
    dispatch({ type: "FIRST_NAME", payload: e.target.value });
  };
  const inputLastNameChangeHandler = (e) => {
    dispatch({ type: "LAST_NAME", payload: e.target.value });
  };
  const inputEmailChangeHandler = (e) => {
    dispatch({ type: "EMAIL", payload: e.target.value });
  };

  useEffect(() => {
    if (
      inputState.firstName.trim() !== "" &&
      inputState.lastName.trim() !== "" &&
      inputState.email.includes("@")
    ) {
      setFormIsFalid(true);
    } else {
      setFormIsFalid(false);
    }
  }, [inputState.firstName, inputState.lastName, inputState.email]);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      firstName: inputState.firstName,
      lastName: inputState.lastName,
      email: inputState.email,
    };
    console.log(data);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input onChange={inputFirstNameChangeHandler} type="text" id="name" />
        </div>
        <div className="form-control">
          <label htmlFor="last-name">Last Name</label>
          <input
            onChange={inputLastNameChangeHandler}
            type="text"
            id="last-name"
          />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input onChange={inputEmailChangeHandler} type="text" id="email" />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
