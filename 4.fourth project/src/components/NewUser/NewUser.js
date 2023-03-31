import Card from "../UI/Card";
import NewUserForm from "./NewUserForm";
import styles from "./NewUser.module.css";

const NewUser = (props) => {


  const enteredUserData = (event) => {
    const userData = {
      ...event,
      id: Math.random().toString(),
    };
    props.onAddUser(userData);
  };
  return (
    <div >
      <Card className={styles.input}>
        <NewUserForm onSaveUserData={enteredUserData}></NewUserForm>
      </Card>
    </div>
  );
};

export default NewUser;
