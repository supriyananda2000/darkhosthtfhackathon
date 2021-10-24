import React from "react";

const Forum = () => {
  const style1 = {
    border: "1px solid white",
  };
  return (
    <>
      <div className="forum-box left">
        <div className="forum-head my-5">
          <h2>Forum</h2>
          <hr />
        </div>
        <div className="forum-area">
          <textarea name="" id="" cols="100" rows="10"></textarea>
        </div>
        <div className="forum-create">
          <button className="btn btn-danger">Ask Your Question</button>
        </div>
        <div className="forum-page my-5" style={style1}>
          <div className="users d-flex py-3">
            <i class="bx bxs-user-circle bx-md"></i>
            <h4 className="mx-2">Arijit</h4>
          </div>
          <hr />
          <div className="user-content">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              dolorum odio fugit dolores distinctio dicta? Minus consectetur
              doloribus omnis iste ex voluptatibus totam ullam assumenda sequi?
              Velit eos blanditiis, voluptatem illo tempore cupiditate voluptas
              dolores neque officia qui enim magni provident corrupti ullam
              animi consequatur illum aperiam explicabo, nulla at?
            </p>
          </div>
          <hr />
          <div className="forum-btn my-2 mx-3">
            <button className="btn btn-danger col-2">Reply</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forum;
