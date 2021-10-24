import React from "react";

const Feedback = () => {
  const style2 = {
    borderRadius: "2px",
    padding: "5px",
    border: "none",
    borderBottom: "1px solid white",
    color: "white",
  };
  return (
    <>
      <div className="feedback-box left">
        <div className="feedback-head my-5">
          <h2>Stay Connected</h2>
          <hr />
        </div>
        <div className="feed-sub my-2">
          <h3>Subscribe to Our NewsLetter</h3>
          <p className="my-3">
            Feel free to share us regarding any module queries . Subscribe to
            our newsletter so that anything new is uploaded in the website you
            will be the first one to get updated.
          </p>
        </div>
        <div className="feed-details-info d-flex my-4">
          <div className="left-info col-4">
            <div className="form-input py-2 d-flex flex-column">
              <label className="form-label">Name</label>
              <input type="text" className="form-enter" style={style2} />
            </div>
            <div className="form-input py-2 d-flex flex-column">
              <label className="form-label">Email</label>
              <input type="email" className="form-enter" style={style2} />
            </div>
            <div className="sub-btn my-3">
              <button className="btn btn-danger">Subscribe</button>
            </div>
          </div>
          <div className="right-info mx-5">
            <div className="info-head ">
              <h5 className="mb-3">Information</h5>
              <div className="info-ad d-flex my-2">
                <i class="bx bx-current-location"></i>
                <h6>Address : </h6>
                <h6>&nbsp;India</h6>
              </div>
              <div className="info-ad d-flex my-2">
                <i class="bx bx-current-location"></i>
                <h6>Phone : </h6>
                <h6>&nbsp;+91 04728192</h6>
              </div>
              <div className="info-ad d-flex my-2">
                <i class="bx bx-current-location"></i>
                <h6>Email : </h6>
                <h6>&nbsp;hackthisFall@hotmail.com</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
