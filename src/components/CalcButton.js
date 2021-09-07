import styles from "../styles/calcButton.module.css";

function CalcButton(props) {

  let styleClass = "number";

  if (props.label === "="){
    styleClass = "equals";
  } else if (isNaN(parseInt(props.label))) {
    styleClass = "operator";
  }
  
  return (
    <div className={`${styles[styleClass]}`}>
      <button>{props.label}</button>
    </div>
  );
}

export default CalcButton;
