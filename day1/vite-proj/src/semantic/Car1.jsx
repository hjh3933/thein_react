import React from "react";
import "./section.css";

const Car1 = (props) => {
  return (
    <div>
      <hr />
      <h3 className={props.color}>제 차의 색깔은 {props.color} 입니다</h3>
      <hr />
    </div>
  );
};

export default Car1;
