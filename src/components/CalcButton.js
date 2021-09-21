import styles from "../styles/calcButton.module.css";
import { useInputContext } from "./CalculatorContext";

function CalcButton(props) {
  // generate custom button style
  let styleClass = "number";

  if (props.label === "="){
    styleClass = "equals";
  } else if (isNaN(parseInt(props.label))) {
    styleClass = "operator";
  }

  // input context
  const userInput = useInputContext();
  
  return (
    <div className={`${styles[styleClass]}`}>
      <button onClick={userInput} value={props.label}>{props.label}</button>
    </div>
  );
}

export default CalcButton;
