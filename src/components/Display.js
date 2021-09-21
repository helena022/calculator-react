import styles from "../styles/display.module.css";
import { useCalculatorContext } from "./CalculatorContext"

function Display() {
  const calculatorContext = useCalculatorContext();
  return (
    <div className={styles.display}>
      <div className={styles.displayOutput}>
        <input type="text" value={calculatorContext}></input>
      </div>
    </div>
  );
}

export default Display;