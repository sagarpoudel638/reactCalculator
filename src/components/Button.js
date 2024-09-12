import React, { useState } from "react";
import "../App.css";
function Button(props) {
  return (
    <button className={props.className} id={props.id} onClick={props.onClick}>
      {props.buttonValue}
    </button>
  );
}

export default Button;
