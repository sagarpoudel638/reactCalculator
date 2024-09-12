import Display from "./Display";
import Numpad from "./Numpad";
import "../App.css";

function Wrapper() {
  return (
    <div className="wrapper">
      <Display />
      <Numpad />
    </div>
  );
}

export default Wrapper;
