import React from "react";
import "./EmptyResult.css";

function EmptyResult({ data }) {
  return (
    <div>
      <div className="custom_alert custom_alert--info">
        <i className="fa fa-info-circle fa-2xl custom_icon" />
        <div className="custom_content">
          {data.title.length > 0 && (
            <div className="custom_title">{data.title}</div>
          )}
          {data.title.length > 0 && (
            <div className="custom_body">{data.description}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EmptyResult;
