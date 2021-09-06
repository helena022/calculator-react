import CalcButton from "./CalcButton";
import DelButton from "./DelButton"
import styles from "../styles/keypad.module.css";

function Keypad() {
  return (
    <div>
      <div>
        <div className={styles.deleteBtnRow}>
          <span className={styles.solar}></span>
          <DelButton label="AC"/>
          <DelButton label="C"/>
        </div>
      </div>
      <div className={styles.keypadGrid}>
        <CalcButton label="7"/>
        <CalcButton label="8"/>
        <CalcButton label="9"/>
        <CalcButton label="&divide;"/>
        <CalcButton label="4"/>
        <CalcButton label="5"/>
        <CalcButton label="6"/>
        <CalcButton label="&times;"/>
        <CalcButton label="1"/>
        <CalcButton label="2"/>
        <CalcButton label="3"/>
        <CalcButton label="-"/>
        <CalcButton label="0"/>
        <CalcButton label="."/>
        <CalcButton label="+"/>
        <CalcButton label="="/>
      </div>
    </div>
  );
}

export default Keypad;
