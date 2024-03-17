import React from "react";

function IconCard(props) {
  return (
    <div className="wow fadeInUp group mb-4 py-5" data-wow-delay=".1s">
      <div className="relative z-10 mb-2 flex h-[4.5rem] w-[2.5rem] items-center justify-center rounded-2xl">
        {props.icon}
      </div>
      <h4 className="text-xl font-bold text-dark mb-2">{props.maintext}</h4>
      <p className="text-gray-500 text-[0.88rem]">{props.subtext}</p>
    </div>
  );
}

export default IconCard;
