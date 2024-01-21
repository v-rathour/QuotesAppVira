import axios from "axios";
import { useEffect, React, useState } from "react";

const Logout = () => {
  let [msg, setmassage] = useState("");

  const LogoutUser = async () => {
    try {
      const res = await axios.get("https://backend-quote-c5e5.onrender.com/logout", {
        withCredentials: true,
      });
      localStorage.setItem("mes", res.data.message);
      localStorage.removeItem("proImage")
      localStorage.removeItem("user")
      window.location.href = "/login";
    } catch (e) {
      localStorage.setItem("mes", e.response.data);
    }
  };

  const add = () => {
    setmassage(localStorage.getItem("mes"));
  };

  useEffect(() => {
    LogoutUser();
    add();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className=" mt-3 mx-auto">
        {msg && msg.length ? (
          <div className=" alert alert-warning alert-dismissible fade show">
            <strong>{msg}!</strong>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Logout;
