import React, { useState, useEffect } from "react";

const Member = () => {
  const [userData, setUserData] = useState({});
  const getUserDetails = async () => {
    try {
      const res = await fetch("/userDetails", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);
      if (!res.status === 200) {
        throw new Error(res.error);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUserDetails();
  }, []);
  const style5 = {
    border: "1px solid white",
  };
  return (
    <>
      <div className="member-box left">
        <div className="member-head my-5">
          <h2>Members</h2>
          <hr />
        </div>
        <div className="my-3 member-list col-8" style={style5}>
          <div className="member-name mt-2 mx-2">
            <h4>{userData.name}</h4>
            <h6>{userData.email}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Member;
