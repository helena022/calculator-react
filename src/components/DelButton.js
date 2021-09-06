import styles from "../styles/delButton.module.css"

function DelButton(props) {
  return (
    <div className={styles.delete}>
      <button>{props.label}</button>
    </div>
  );
}

export default DelButton;
