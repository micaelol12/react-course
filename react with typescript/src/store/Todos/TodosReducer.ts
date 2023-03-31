import { ITodosContext, TODO_DEFAULT_STATE } from "./Todos-context";

type Action = {
  type: string;
  payload: any;
};

const todosReducer = (state: ITodosContext, action: Action): ITodosContext => {
  if (action.type === "ADD_ITEM") {
    const newTodos = [...state.todos, action.payload];

    return {
      ...state,
      todos: newTodos,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
    return {
      ...state,
      todos: newTodos,
    };
  }
  return TODO_DEFAULT_STATE;
};

export default todosReducer;
