import styles from "../testbutton.module.css"; // Import the CSS module

const TestButton = () => {
  return (
    <div className={styles.container}>
      {/* Text */}
      <span>Hover Me!</span>

      {/* Snake Animation */}
      <div className={styles.snakeContainer}>
        <div className={styles.snakeAnimation}>
          🐍 {/* Replace this with your snake emoji or SVG */}
        </div>
      </div>
    </div>
  );
};

export default TestButton;
