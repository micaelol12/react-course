import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles.button}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      <span>{props.children}</span>
    </button>
  );
};

export default Button;
