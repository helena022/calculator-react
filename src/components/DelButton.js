import styles from "../styles/delButton.module.css";
import { useInputContext } from "./CalculatorContext";

function DelButton(props) {
  // input context
  const userInput = useInputContext();

  return (
    <div className={styles.delete}>
      <button value={props.label} onClick={userInput}>{props.label}</button>
    </div>
  );
}

export default DelButton;
