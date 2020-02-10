import React from "react";
import "./style.css";

function CardBtn(props) {
  return (
    <div>
      <button onClick={props.onClick} className={`card-btn ${props["data-value"]}`} {...props} />
      <button>Filter by Name Alphabetically</button>
    </div>
  );
}

export default CardBtn;
