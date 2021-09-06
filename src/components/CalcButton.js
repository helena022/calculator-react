import styles from "../styles/calcButton.module.css"
function CalcButton(props) {
  return (
    <div className={styles.number}>
      <button>{props.label}</button>
    </div>
  );
}

export default CalcButton;
