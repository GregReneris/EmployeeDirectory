import React from "react";
import "./style.css";

function SortBtn(props) {
  return (
    <div>
      <button onClick={props.onClick}>
      Sort by Name</button>
    </div>
  );
}

export default SortBtn;
