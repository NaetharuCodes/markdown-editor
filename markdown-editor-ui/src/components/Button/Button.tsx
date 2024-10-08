import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  icon?: React.ReactElement<SVGAElement>;
  onClick: () => void;
}

const Button = ({ text, icon, onClick }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${icon ? "" : styles.textOnlyPadding}`}
      onClick={onClick}
    >
      {icon}
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default Button;
