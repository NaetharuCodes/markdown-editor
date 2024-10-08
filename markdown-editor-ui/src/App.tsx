import Button from "./components/Button";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Button text="Sample Button" onClick={() => console.log("You Clicked")} />
    </div>
  );
}

export default App;
