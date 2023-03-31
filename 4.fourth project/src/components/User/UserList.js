import Card from "../UI/Card";
import User from "./User";

import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={styles["users-list"]}>
      <ul >
        {props.usersList.map((user) => (
          <User name={user.name} age={user.age} key={Math.random().toString()} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
