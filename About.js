import React from "react";
import Arijit from "../images/Arijit2.jpg";
import Supriya from "../images/Supriya.jpg";
const About = () => {
  return (
    <>
      <div className="about-box left">
        <div className="about-head my-5">
          <h2>About</h2>
          <hr />
        </div>
        <div className="about-para">
          <p>
            We are a team of two sophomore and our main aim is to built project
            that could be implemented in the real world for solving different
            issues all over. The main goal of this website is to help people be
            self dependent.Connect with us to know more about the website.
          </p>
        </div>
        <hr />
        <div className="about-us my-4">
          <h2>Meet Our Team</h2>
        </div>
        <div className="profile d-flex">
          <div class="card col-4 mx-5">
            <img src={Arijit} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title px-3">ARIJIT KUMAR SAHU</h5>
              <h6 class="card-title px-3">Bhubaneswar,Odisha,India</h6>
              <i class="bx bxl-facebook-circle bx-lg mx-2"></i>
              <i class="bx bxl-instagram bx-lg"></i>
              <i class="bx bxl-linkedin bx-lg mx-2"></i>
              <i class="bx bxl-github bx-lg"></i>
            </div>
          </div>
          <div class="card col-4">
            <img src={Supriya} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title px-3">SUPRIYA NANDA</h5>
              <h6 class="card-title px-3">Rourkela,Odisha,India</h6>
              <i class="bx bxl-facebook-circle bx-lg mx-2"></i>
              <i class="bx bxl-instagram bx-lg"></i>
              <i class="bx bxl-linkedin bx-lg mx-2"></i>
              <i class="bx bxl-github bx-lg"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
