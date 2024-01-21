import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";

const Login = () => {
  let navigate = useNavigate();
  let usernameRef = useRef();
  let passwordRef = useRef();
  let [msg, setmassage] = useState("");

  const UserLoginhandler = async (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    try {

      let res = await axios.post(
        "https://backend-quote-app1.onrender.com/login",
        { username, password },
        { withCredentials: true }
      );
      
      console.log(res.data.user);
      // localStorage.setItem("LoginUser",res.data.user)
      localStorage.setItem("user",res.data.user.username);
      localStorage.setItem("email",res.data.user.email)
      localStorage.setItem("proImage",res.data.user.img)
      localStorage.setItem("mes","login successful")
      window.location.href = "/allquotes";
    } catch (e) {
      setmassage(e.response.data.message);

      navigate("/login");
    }
  };

  function add() {
    const m = localStorage.getItem("mes");
    setmassage(m);
  }

  const clickHandler = ()=>{
    localStorage.setItem("mes","");
  }

  useEffect(() => {
    add();
  }, []);
  return (
    <>
      <div className=" mt-3 mx-auto">
        {msg && msg.length ? (
          <div className=" alert alert-warning alert-dismissible fade show">
            <strong>{msg}!</strong>
            <button
              type="button"
              onClick={clickHandler}
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="InputBox">
        <div className="boxs mt-3 mx-auto border border-black p-2 rounded bg-secondary">
          <form onSubmit={UserLoginhandler}>
            <h2 className="text-center bg-dark p-1 text-light">Login</h2>
            <div>
              <label htmlFor="username" className="form-label fs-4 text-light">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                ref={usernameRef}
                id="username"
              />
            </div>
            <div>
              <label htmlFor="password" className="form-label fs-4 text-light">
                password
              </label>
              <input
                type="password"
                className="form-control"
                ref={passwordRef}
                id="password"
              />
            </div>
            <button className="btn btn-success mt-3 mb-2">submit</button>
            <p className="text-light">
              Dont have an account,<NavLink to="/signup">signup</NavLink>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
