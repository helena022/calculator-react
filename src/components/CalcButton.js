import styles from "../styles/calcButton.module.css";

function CalcButton(props) {
  let styleClass = "";

  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  if (props.label === "="){
    styleClass = "equals";
  } else if (numbers.includes(props.label)){
    styleClass = "number";
  } else {
    styleClass = "operator"
  }

  return (
    <div className={`${styles[styleClass]}`}>
      <button>{props.label}</button>
    </div>
  );
}

export default CalcButton;
