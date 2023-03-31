import React, { useContext } from "react";
import { useRef } from "react";
import Todo from "../../models/todo";
import TodosContext from "../../store/Todos/Todos-context";
import styles from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    const TodoItem: Todo = {
      id: `${enteredText}${Math.random()}`,
      text: enteredText,
    };

    todosCtx.addItem(TodoItem);
  };
  
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef}></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
