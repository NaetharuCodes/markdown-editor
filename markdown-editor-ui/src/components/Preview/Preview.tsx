import React from "react";
import styles from "./Preview.module.css";
import { htmlFormatter } from "../../utils/htmlFormatter";

interface PreviewProps {
  rawString: string;
}

const Preview: React.FC<PreviewProps> = ({ rawString }) => {
  const formattedContent = htmlFormatter(rawString);

  return (
    <div className={styles.container}>
      <div
        className={styles.htmlContainer}
        dangerouslySetInnerHTML={{ __html: formattedContent }}
      />
    </div>
  );
};

export default Preview;
