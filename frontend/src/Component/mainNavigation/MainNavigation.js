import { NavLink } from "react-router-dom";
import "./MainNavigation.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdLogin } from "react-icons/md";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { PiSignOutBold } from "react-icons/pi";
import { SiCodeforces } from "react-icons/si";

export default function MainNavigation() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usertoggle, setuserToggle] = useState(false);

  const checkAuthenticationreq = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/check-auth?_method=FETCH",
        { withCredentials: true }
      );

      setIsAuthenticated(response.data.authenticated);
    } catch (error) {
      setIsAuthenticated(false);
    }
  };

  const togglehandler = () => {
    setuserToggle(!usertoggle);
  };

  useEffect(() => {
    checkAuthenticationreq();
    // eslint-disable-next-line
  }, []);

  return (
    <nav className="navbar  navbar-expand-lg bg-light px-3">
      <div className="container-fluid">
        <h2 className="fs-2  text-info">QuotesApp</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link   mx-2 fs-5 text-dark active" to="/">
                Home
              </NavLink>
            </li>
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link mx-2 fs-5 text-dark active"
                    to="/allquotes"
                  >
                    All Quotes
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link mx-2 fs-5 text-dark" to="/new">
                    new Quotes
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <NavLink
                  className="nav-link mx-2 fs-5 text-dark active"
                  to="/allquotes"
                >
                  All Quotes
                </NavLink>
              </li>
            )}
          </ul>
          <div className="d-flex">
            {isAuthenticated ? (
              <>
                <NavLink to="/logout" className="link">
                  Logout
                </NavLink>
                <button className="btn_section" onClick={togglehandler}>
                  <img
                    className="pro_img"
                    src={`/uploads/${localStorage.getItem("proImage")}`}
                    alt="Profile"
                  />
                  {localStorage.getItem("user")}
                </button>
                {usertoggle ? (
                  <div className="flex box">
                    <div className="user_bax">
                      <div>
                        <img
                          src={`/uploads/${localStorage.getItem("proImage")}`}
                          alt="Profile"
                        />
                      </div>
                      <div>
                        <h4>{localStorage.getItem("user")}</h4>
                        <p>
                        {localStorage.getItem("email")}
                        </p>
                      </div>
                    </div>
                    <div className="feature">
                      <ul>
                        
                        <li id="fullstack">
                          <h5>FULL STACK DEVELOPER</h5>
                          <p>
                          Expert in end-to-end web development, specializing in JavaScript technologies.
                          </p>
                        </li>
                        <li>
                          <NavLink
                            to="https://leetcode.com/Vikashrathour"
                            className="Link"
                          >
                            <span>
                              <SiLeetcode />{" "}
                            </span>
                            Leetcode
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="https://codeforces.com/profile/Vikash_Rathour"
                            className="Link"
                          >
                            <span>
                              {" "}
                              <SiCodeforces />{" "}
                            </span>
                            Codeforces
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="https://github.com/v-rathour"
                            className="Link"
                          >
                            <span>
                              <FaGithubSquare />{" "}
                            </span>
                            Github
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="#" className="Link">
                            <span>
                              <PiSignOutBold />
                            </span>
                            SignOut
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </>
            ) : (
              // {/* // Render signup and login buttons if user is not authenticated */}
              <>
                <NavLink to="/signup" className="link">
                  <SiGnuprivacyguard />
                  SignUp
                </NavLink>
                <NavLink to="/login" className="link">
                  <MdLogin />
                  Login
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
