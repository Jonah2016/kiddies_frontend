import React from "react";

function Likes() {
  return (
    <>
      <div>Likes</div>
      <div classname="likes">
        <div classname="like-profile">
          <img
            src="https://randomuser.me/api/portraits/women/63.jpg"
            alt=""
            classname="like-img"
          />
        </div>
        <div classname="like-profile">
          <img
            src="https://pbs.twimg.com/profile_images/2452384114/noplz47r59v1uxvyg8ku.png"
            alt=""
            classname="like-img"
          />
        </div>
        <div classname="like-profile">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
            alt=""
            classname="like-img"
          />
        </div>
        <div classname="like-name">
          <span>Samantha William</span> and
          <span> 2 other friends</span> like this
        </div>
      </div>
    </>
  );
}

export default Likes;
