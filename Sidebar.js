import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <>
      <div className="l-navbar" id="nav-bar">
        <nav className="nav">
          <div>
            <div className="nav_logo"></div>
            <div className="nav_list mt-5">
              <NavLink
                to="/"
                className="nav_link"
                exact
                activeClassName="active"
              >
                <i className="bx bx-home-alt nav_icon"></i>
              </NavLink>

              <NavLink
                to="/about"
                className="nav_link"
                exact
                activeClassName="active"
              >
                <i className="bx bx-user nav_icon"></i>
              </NavLink>

              <NavLink
                to="/training"
                className="nav_link"
                exact
                activeClassName="active"
              >
                <i className="bx bx-bulb nav_icon"></i>
              </NavLink>

              <NavLink
                to="/session"
                className="nav_link"
                exact
                activeClassName="active"
              >
                <i class="bx bx-calendar-minus"></i>
              </NavLink>
              <NavLink
                to="/story"
                className="nav_link"
                exact
                activeClassName="active"
              >
                <i class="bx bx-book-content"></i>
              </NavLink>
              <NavLink
                to="/general"
                className="nav_link"
                exact
                activeClassName="active"
              >
                <i class="bx bx-code-curly"></i>
              </NavLink>

              <NavLink
                to="/feedback"
                className="nav_link"
                exact
                activeClassName="active"
              >
                <i className="bx bx-note nav_icon"></i>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
