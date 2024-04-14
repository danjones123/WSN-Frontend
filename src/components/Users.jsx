import { useState, useEffect } from "react";
import axios from "../api/axios";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";

const Users = () => {
  const [users, setUsers] = useState();
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      console.log(auth?.accessToken);
      const token = auth?.accessToken;
      const headers = { Authorization: `Bearer ${token}` };
      try {
        const response = await axios.get(
          "/api/v1/controller/users",
          // {
          //   signal: controller.signal,
          // },
          { headers }
        );
        console.log(response.data);
        isMounted && setUsers(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const test = async () => {
    console.log(auth?.accessToken);
    const token = auth?.accessToken;
    const headers = { Authorization: `Bearer ${token}` };
    try {
      const response = await axios.get("/api/v1/controller", { headers });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <article>
      <h2>Users List</h2>
      {users?.length ? (
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user?.username}</li>
          ))}
        </ul>
      ) : (
        <p>No users to display</p>
      )}
      <button onClick={() => refresh()}>Refresh</button>
      <button onClick={() => test()}>test</button>
    </article>
  );
};

export default Users;
