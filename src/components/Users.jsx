import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const Users = () => {
  const [users, setUsers] = useState();
  const axiosPrivate = useAxiosPrivate();
  // const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        console.log(controller.signal);
        console.log("Sending request for users with token");
        const response = await axiosPrivate.get(
          "/api/v1/controller/users",
          {
            signal: controller.signal,
          }
          // { headers }
        );
        console.log(response.data);
        isMounted && setUsers(response.data);
      } catch (err) {
        console.log(err);
        if (err?.code !== "ERR_CANCELED") {
          navigate("/login", { state: { from: location }, replace: true });
        }
      }
    };

    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  // const test = async () => {
  //   // console.log(auth?.accessToken);
  //   // const token = auth?.accessToken;
  //   // const headers = { Authorization: `Bearer ${token}` };
  //   try {
  //     const response = await axiosPrivate.get(
  //       "/api/v1/controller"
  //       // , {
  //       //   headers,
  //       // }
  //     );
  //     console.log(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
      {/* <button onClick={() => test()}>test</button> */}
    </article>
  );
};

export default Users;
