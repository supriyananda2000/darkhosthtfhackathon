import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-box left">
        <div className="home-head mt-5 mb-2 d-flex ">
          <h2>Home</h2>
          <div className="drop mx-5">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Language
              </button>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <a class="dropdown-item active" href="#">
                    English
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Hindi
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Odia
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="home-mid d-flex row">
          <div className="home-reg col-6 my-5">
            <h1>Welcome to The DarkHost</h1>
            <div className="reg-btn my-5">
              <NavLink to="/register" className="btn btn-dark">
                Register Now
              </NavLink>
            </div>
          </div>
          <div className="home-pic col-6">
            <div className="home-img ">
              <img
                src="https://i.pinimg.com/originals/1b/1e/37/1b1e37721cf248b07ae7ed07966df60b.gif"
                alt=""
                className="col-10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
