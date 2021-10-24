import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark container-fluid">
        <a className="navbar-brand mx-5">DarkHost</a>

        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control me-2 mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </nav>
    </>
  );
};

export default Navbar;
