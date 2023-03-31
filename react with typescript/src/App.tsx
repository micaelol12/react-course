import NewTodo from "./components/NewTodo/NewTodo";
import Todos from "./components/Todos/Todos";
import TodosContextProvider from "./store/Todos/TodosProvider";

function App() {
  return (
    <div>
      <TodosContextProvider>
        <NewTodo/>
        <Todos/>
      </TodosContextProvider>
    </div>
  );
}

export default App;
