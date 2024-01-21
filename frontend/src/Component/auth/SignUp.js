import React, { useRef, useState } from "react";
import "./Signup.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

const SignUp = () => {

  let usernameRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();
  let [image,setImage] = useState();


  const onInputChange = (e)=>{
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
}

  const FormSubmitHandler = async (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const img = image;
    const password = passwordRef.current.value;

    try {
      await axios.post("https://backend-quote-c5e5.onrender.com/signup", {
        username,
        email,
        img,
        password,
      },{
        headers:{"Content-Type":"multipart/form-data"}
      });
      console.log("console.log")
      window.location.href = "/allquotes";
    } catch (e) {
      console.log(e);
      
      window.location.href = "/singup";
    }
  };

  return (
    <>
      <div className="singbox">
        <div className="sing_page mx-auto border border-black p-2 px-3 rounded bg-secondary">
          <form onSubmit={FormSubmitHandler}>
            <h2 className="text-center bg-dark p-1 text-light">SignUp</h2>
            <div className="mb-3">
              <label className="form-label text-light fs-5" htmlFor="email">
                Email:
              </label>
              <input
                className="form-control"
                ref={emailRef}
                type="email"
                id="email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-light fs-5" htmlFor="username">
                Username:
              </label>
              <input
                className="form-control"
                ref={usernameRef}
                type="text"
                id="username"
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-light fs-5" htmlFor="img">
                ProfileImage:
              </label>
              <input
                className="form-control"
                onChange={onInputChange}
                type="file"
                id="img"
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-light fs-5" htmlFor="password">
                Password:
              </label>
              <input
                className="form-control"
                ref = {passwordRef}
                type="text"
                id="password"
              />
            </div>
            <button className="btn btn-success mt-3">Submit</button>
            <p className="text-light mt-2">
              Already have an account,<NavLink to="/login">Login</NavLink>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
