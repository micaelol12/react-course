import Todo from "../../models/todo";
import styles from "./TodoElement.module.css";

const TodoElement: React.FC<{
  todo: Todo;
  onRemoveTodo: (id: string) => void;
}> = ({ todo, onRemoveTodo }) => {

  const removeHandler = () => {
    onRemoveTodo(todo.id);
  };
  
  return (
    <li className={styles.item} onClick={removeHandler}>
      {todo.text}
    </li>
  );
};

export default TodoElement;
