import Display from "./Display";
import Keypad from "./Keypad";

import styles from "../styles/calculator.module.css"

function Calculator() {
  return (
    <div className={styles.calcWrapper}>
      <Display />
      <Keypad />
    </div>
  );
}

export default Calculator;