import React from "react";
import styles from "./Toggle.module.css";

interface ToggleProps {
  leftIcon: React.ReactElement<SVGAElement>;
  rightIcon: React.ReactElement<SVGAElement>;
  on: boolean;
  onClick: () => void;
}

const Toggle = ({ leftIcon, rightIcon, on, onClick }: ToggleProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <div className={`${on ? styles.fade : ""} ${styles.center}`}>
        {leftIcon}
      </div>
      <div className={styles.sliderBackground}>
        <div
          className={`${styles.sliderButton} ${
            on ? styles.sliderButtonOn : styles.sliderButtonOff
          }`}
        />
      </div>
      <div className={`${on ? "" : styles.fade} ${styles.center}`}>
        {" "}
        {rightIcon}
      </div>
    </button>
  );
};

export default Toggle;
