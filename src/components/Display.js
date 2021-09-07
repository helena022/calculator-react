import styles from "../styles/display.module.css";

function Display() {
  return (
    <div className={styles.display}>
      <div className={styles.displayOutput}>
        <input type="text"  value="11 + 55"></input>
      </div>
    </div>
  );
}

export default Display;