import React from "react";

function Title(props) {
  const styling = props.style + " leading-relaxed ";
  return <h1 className={styling}>{props.title}</h1>;
}

export default Title;
