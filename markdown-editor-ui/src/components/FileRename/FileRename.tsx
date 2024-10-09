import { useState } from "react";
import styles from "./FileRename.module.css";
import { addMarkdownExtension } from "../../utils/helpers";

interface FileRenameProps {
  documentName: string;
  onChange: () => void;
}

const FileRename = ({ documentName, onChange }: FileRenameProps) => {
  const [value, setValue] = useState<string>("");

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileName = e.target.value;
    let contractedFileName = "";

    const validCharRegex = /[A-Za-z0-9\-_]/;

    for (let i = 0; i < fileName.length; i++) {
      if (validCharRegex.test(fileName.charAt(i)))
        contractedFileName = contractedFileName + fileName.charAt(i);

      console.log("contractedFileName: ", contractedFileName);
    }

    setValue(contractedFileName);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newFileName = value;
    if (!newFileName.endsWith(".md")) newFileName = newFileName + ".md";
    setValue(newFileName);
  };

  return (
    <div className={styles.button}>
      <svg
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.1071 3.39286C13.2738 3.55952 13.4167 3.78571 13.5357 4.07143C13.6548 4.35714 13.7143 4.61905 13.7143 4.85714V15.1429C13.7143 15.381 13.631 15.5833 13.4643 15.75C13.2976 15.9167 13.0952 16 12.8571 16H0.857143C0.619048 16 0.416667 15.9167 0.25 15.75C0.0833333 15.5833 0 15.381 0 15.1429V0.857143C0 0.619048 0.0833333 0.416667 0.25 0.25C0.416667 0.0833333 0.619048 0 0.857143 0H8.85714C9.09524 0 9.35714 0.0595238 9.64286 0.178571C9.92857 0.297619 10.1548 0.440476 10.3214 0.607143L13.1071 3.39286ZM9.14286 1.21429V4.57143H12.5C12.4405 4.39881 12.375 4.27679 12.3036 4.20536L9.50893 1.41071C9.4375 1.33929 9.31548 1.27381 9.14286 1.21429ZM12.5714 5.71429V14.8571H1.14286V1.14286H8V4.85714C8 5.09524 8.08333 5.29762 8.25 5.46429C8.41667 5.63095 8.61905 5.71429 8.85714 5.71429H12.5714Z"
          fill="white"
        />
      </svg>
      <div className={styles.textContainer}>
        <div className={`${styles.date} app-text`}>Document Name</div>
        <form action="submit" onSubmit={handleSubmit}>
          <input
            className={`${styles.title} app-heading-med`}
            value={value}
            onChange={(e) => handleValueChange(e)}
          />
        </form>
      </div>
    </div>
  );
};

export default FileRename;