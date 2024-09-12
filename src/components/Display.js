
import '../App.css';

function Display(props) {
  return (
    <div className="display">
            <input type="text" id="calc-display" value={props.value} readOnly/>
    </div>
    
  );
}

export default Display;