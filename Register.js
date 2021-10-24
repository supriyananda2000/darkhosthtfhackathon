import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

const Register = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const inputStyle = {
    borderRadius: "2px",
    padding: "5px",
    border: "none",
    borderBottom: "1px solid white",
    color: "white",
  };

  const input = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, address } = values;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, address }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid");
      console.log("Invalid");
    } else {
      window.alert("Success");
      console.log("Success");
      history.push("/");
    }
  };
  return (
    <>
      <div className="register-box left">
        <div className="register-form">
          <div className="register-head my-5">
            <h2>Register Here</h2>
            <hr />
          </div>
          <div className="register-form-input row mx-5 ">
            <form action="">
              <label className="regd-label my-2 ">Name :</label>
              <div className="regd-form">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="col-4"
                  style={inputStyle}
                  value={values.name}
                  name="name"
                  onChange={input}
                  required
                />
              </div>
              <label className="regd-label my-2 mt-4">Email :</label>
              <div className="regd-form">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="col-4"
                  style={inputStyle}
                  value={values.email}
                  name="email"
                  onChange={input}
                  required
                />
              </div>
              <label className="regd-label my-2 mt-4">Address :</label>
              <div className="regd-form">
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  className="col-4"
                  style={inputStyle}
                  value={values.address}
                  name="address"
                  onChange={input}
                  required
                />
              </div>
              <label className="regd-label my-2 mt-4">Contact :</label>
              <div className="regd-form">
                <input
                  type="number"
                  placeholder="Enter Your phone number"
                  className="col-4"
                  style={inputStyle}
                  value={values.phone}
                  name="phone"
                  onChange={input}
                  required
                />
              </div>
            </form>
            <div className="regd-btn mt-4 row">
              <NavLink to="/" className="btn btn-danger col-2 mx-2">
                Back
              </NavLink>
              <NavLink
                to="/"
                className="btn btn-success col-2"
                onClick={postData}
              >
                Submit
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
