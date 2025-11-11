import styles from "./BtnContainer.module.css";
const BtnContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "1",
    "2",
    "C",
    "3",
    "4",
    "+",
    "5",
    "6",
    "-",
    "7",
    "8",
    "*",
    "9",
    "0",
    "/",
    "=",
    ".",
  ];
  return (
    <div className={styles.btnContainer}>
      {buttonNames.map((buttonName) => (
        <button
          key={buttonName}
          className={styles.button}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};
export default BtnContainer;
