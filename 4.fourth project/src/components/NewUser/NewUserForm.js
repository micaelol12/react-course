import { useState, useRef } from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./NewUserForm.module.css";
import Wrapper from "../Helpers/Wrapper";

const NewUserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    const nameEntered = nameInputRef.current.value;
    const ageEntered = ageInputRef.current.value;

    if (nameEntered.trim().length === 0 || ageEntered.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age(non-empty values).",
      });
      return;
    }

    if (+ageEntered < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age(> 0).",
      });
      return;
    }

    const userData = {
      name: nameEntered,
      age: ageEntered,
    };

    props.onSaveUserData(userData);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <form onSubmit={submitHandler}>
        <div className={styles["new-user__control"]}>
          <label htmlFor="name">Username</label>
          <input id="name" type="text" ref={nameInputRef}></input>
        </div>
        <div className={styles["new-user__control"]}>
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={ageInputRef}></input>
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Wrapper>
  );
};

export default NewUserForm;
