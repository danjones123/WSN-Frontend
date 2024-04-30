import * as React from "react";
import { useRef, useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Header from "../../components/GlobalHeader";

import "./Register.css";
import axios from "../../api/axios";

const LOGIN_URL = "/api/v1/auth/authenticate";

function Login() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  // console.log("from: " + from);
  // console.log("location: " + location.state);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user, pwd);

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
      const accessToken = response?.data?.accessToken;
      const role = response?.data?.userRole;
      console.log(role);
      //setAuth in context
      setAuth({ user, pwd, role, accessToken });
      setUser("");
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
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
    <center>
      <Header title="Login" />
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
  );
}

export default Login;
