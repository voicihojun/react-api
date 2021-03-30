import React, { useState } from "react";
import { useUsersState, useUsersDispatch, getUsers } from "./UsersContext";
import User from "./User";

function Users() {
  const [userId, setUserId] = useState(null);
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  const { data: users, loading, error } = state.users;
  const fetchData = () => {
    getUsers(dispatch);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!!!!</div>;
  if (!users) return <button onClick={fetchData}>request</button>;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: "pointer" }}
          >
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>Re request</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;
