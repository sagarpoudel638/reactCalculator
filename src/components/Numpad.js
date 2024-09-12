import Button from "./Button";
import "../App.css";
function Numpad() {
  return (
    <div className="numpad">
      <Button buttonValue="C" id="clear" className="button operator" />
      <Button className="button operator" buttonValue="Del" />
      <Button className="button operator" buttonValue="/" />
      <Button className="button operator" buttonValue="*" />
      <Button className="button" buttonValue="7" />
      <Button className="button" buttonValue="8" />
      <Button className="button" buttonValue="9" />
      <Button className="button operator" buttonValue="-" />
      <Button className="button" buttonValue="4" />
      <Button className="button" buttonValue="5" />
      <Button className="button" buttonValue="6" />
      <Button className="button operator" id="add" buttonValue="+" />
      <Button className="button" buttonValue="1" />
      <Button className="button" buttonValue="2" />
      <Button className="button" buttonValue="3" />
      <Button className="button" buttonValue="0" />
      <Button className="button" buttonValue="." />
      <Button id="equal" className="button operator" buttonValue="=" />
    </div>
  );
}

export default Numpad;
