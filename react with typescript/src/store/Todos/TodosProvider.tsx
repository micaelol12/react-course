import React, { useReducer } from "react";
import Todo from "../../models/todo";
import todosReducer from "./TodosReducer";
import TodosContext, {
  TODO_DEFAULT_STATE,
} from "./Todos-context";

const TodosContextProvider: React.FC = ({ children }) => {
  const [todoState, dispatchTodo] = useReducer(todosReducer, TODO_DEFAULT_STATE);

  const addItemHandler = (item: Todo) =>
    dispatchTodo({ type: "ADD_ITEM", payload: item });

  const removeItemHandler = (id: string) =>
    dispatchTodo({ type: "REMOVE_ITEM", payload: id });

  const todoContext = {
    todos: todoState.todos,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <TodosContext.Provider value={todoContext}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
