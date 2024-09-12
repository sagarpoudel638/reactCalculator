import React, {useState} from "react";
import Display from "./Display";
import Numpad from "./Numpad";
import "../App.css";

function Wrapper() {
const [display, setDisplay] = useState(0);

const handleButtonClick = (buttonValue) =>{
  if (buttonValue === "C") {
    setDisplay("");  
  } else if (buttonValue === "Del") {
    setDisplay(display.slice(0, -1));  
  } else if (buttonValue === "=") {
    try {
      setDisplay(eval(display).toString());  
    } catch (error) {
      setDisplay("Error");  
    }
  } else {
    setDisplay(display + buttonValue);  
  }
}

  return (
    <div className="wrapper">
      <Display value ={display} />
      <Numpad onButtonClick = {handleButtonClick} />
    </div>
  );
}

export default Wrapper;
