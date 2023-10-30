import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../user/userSlice";

const UserView = () => {
  const users = useSelector((state) => state.user.users);

  const userList = users.map((usr, index) => {
    return <li key={index}>{usr}</li>;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <h3>These are my users</h3>
      {users.loading && <p>Loading users...</p>}
      {!users.loading && users.error ? <div>Error: {users.error} </div> : null}
      {!users.loading && users.length ? (
        <ul className="ulia">{userList}</ul>
      ) : null}
      <button onClick={() => dispatch(fetchUsers())}>Get users</button>
      <a href="/">Go home</a>
    </div>
  );
};

export default UserView;
