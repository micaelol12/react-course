import { useContext } from "react";
import TodosContext from "../../store/Todos/Todos-context";
import TodoElement from "../TodoElement/TodoElement";
import styles from "./Todos.module.css";

const Todos: React.FC = () => {
  const TodosxCtx = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {TodosxCtx.todos.map((item) => (
        <TodoElement
          todo={item}
          key={item.id}
          onRemoveTodo={TodosxCtx.removeItem}
        />
      ))}
    </ul>
  );
};
export default Todos;
