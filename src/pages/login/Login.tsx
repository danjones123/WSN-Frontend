import * as React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import "./Register.css";
import axios from "../../api/axios";

const LOGIN_URL = "/api/v1/auth/authenticate";

function Login() {
  // const { setAuth } = useContext(AuthContext);
  const userRef: any = useRef();
  const errRef: any = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email: user, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const token = response?.data?.token;
      //setAuth in context
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.reponse) {
        setErrMsg("No server respones");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing username or password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <h1>Login Successful</h1>
      ) : (
        <center>
          <section>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
              <button>Sign In</button>
              <p>
                Don't have an Account?
                <br />
                <span className="line">
                  <a href="#">Sign Up</a>
                </span>
              </p>
            </form>
          </section>
        </center>
      )}
    </>
  );
}

export default Login;
