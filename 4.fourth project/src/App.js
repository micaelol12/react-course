import React, { useState } from "react";
import NewUser from "./components/NewUser/NewUser";
import UserList from "./components/User/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (event) => {
    setUsers((prevState) => [...prevState, event]);
  };

  return (
    <>
      <NewUser onAddUser={addUserHandler}></NewUser>
      <UserList usersList={users} />
    </>
  );
}

export default App;
