import Button from "./Button";
import "../App.css";
function Numpad({onButtonClick}) {
  return (
    <div className="numpad">
            <Button buttonValue="C" id="clear" className="button operator" onClick={() => onButtonClick("C")} />
      <Button className="button operator" buttonValue="Del" onClick={() => onButtonClick("Del")} />
      <Button className="button operator" buttonValue="/" onClick={() => onButtonClick("/")} />
      <Button className="button operator" buttonValue="*" onClick={() => onButtonClick("*")} />
      <Button className="button" buttonValue="7" onClick={() => onButtonClick("7")} />
      <Button className="button" buttonValue="8" onClick={() => onButtonClick("8")} />
      <Button className="button" buttonValue="9" onClick={() => onButtonClick("9")} />
      <Button className="button operator" buttonValue="-" onClick={() => onButtonClick("-")} />
      <Button className="button" buttonValue="4" onClick={() => onButtonClick("4")} />
      <Button className="button" buttonValue="5" onClick={() => onButtonClick("5")} />
      <Button className="button" buttonValue="6" onClick={() => onButtonClick("6")} />
      <Button className="button operator" id="add" buttonValue="+" onClick={() => onButtonClick("+")} />
      <Button className="button" buttonValue="1" onClick={() => onButtonClick("1")} />
      <Button className="button" buttonValue="2" onClick={() => onButtonClick("2")} />
      <Button className="button" buttonValue="3" onClick={() => onButtonClick("3")} />
      <Button className="button" buttonValue="0" onClick={() => onButtonClick("0")} />
      <Button className="button" buttonValue="." onClick={() => onButtonClick(".")} />
      <Button id="equal" className="button operator" buttonValue="=" onClick={() => onButtonClick("=")} />

    </div>
  );
}

export default Numpad;
