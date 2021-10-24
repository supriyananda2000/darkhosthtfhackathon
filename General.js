import React from "react";
import { NavLink } from "react-router-dom";

const General = () => {
  return (
    <>
      <div className="general-box left">
        <div className="general-head my-5">
          <h2>Discussion Forum</h2>
          <hr />
        </div>
        <div className="general-btn d-flex row ">
          <div className="forum-btn col-6">
            <NavLink to="/forum" className="btn btn-danger col-4">
              Forum
            </NavLink>
          </div>
          <div className="member-btn col-6">
            <NavLink to="/member" className="btn btn-danger col-4">
              Members
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default General;
