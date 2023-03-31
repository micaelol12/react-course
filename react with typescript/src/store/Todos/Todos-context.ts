import React from "react";
import Todo from "../../models/todo";

export interface ITodosContext {
  todos: Todo[];
  addItem: (item: Todo) => void;
  removeItem: (id: string) => void;
}

export const TODO_DEFAULT_STATE: ITodosContext = {
  todos: [],
  addItem: (item: Todo) => {},
  removeItem: (id: string) => {},
};

const TodosContext = React.createContext(TODO_DEFAULT_STATE);

export default TodosContext;
