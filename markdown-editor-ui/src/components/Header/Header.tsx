import Button from "../Button/Button";
import FileRename from "../FileRename/FileRename";
import styles from "./Header.module.css";

interface HeaderProps {
  toggleSidebar: () => void;
  openSidebar: boolean;
}

const Header = ({ toggleSidebar, openSidebar }: HeaderProps) => {
  return (
    <div className={styles.container}>
      <button className={styles.sidebarButton} onClick={toggleSidebar}>
        {openSidebar ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.125 0L18 16.875L16.875 18L-1.41764e-08 1.125L1.125 0Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 16.875L16.875 -3.81234e-07L18 1.125L1.125 18L0 16.875Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            width="23"
            height="14"
            viewBox="0 0 23 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="23" height="1.55556" fill="white" />
            <rect y="6.22223" width="23" height="1.55556" fill="white" />
            <rect y="12.4445" width="23" height="1.55556" fill="white" />
          </svg>
        )}
      </button>
      <div className={styles.input}>
        <FileRename documentName="ImportantNodes.md" />
      </div>
      <button className={styles.deleteButton}>
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 4H13V3C13 1.34315 11.6569 0 10 0H8C6.34315 0 5 1.34315 5 3V4H1C0.447715 4 0 4.44772 0 5C0 5.55228 0.447715 6 1 6H2V17C2 18.6569 3.34315 20 5 20H13C14.6569 20 16 18.6569 16 17V6H17C17.5523 6 18 5.55228 18 5C18 4.44772 17.5523 4 17 4ZM7 16C7.55228 16 8 15.5523 8 15V9C8 8.44771 7.55228 8 7 8C6.44772 8 6 8.44771 6 9V15C6 15.5523 6.44772 16 7 16ZM8 2C7.44772 2 7 2.44772 7 3V4H11V3C11 2.44772 10.5523 2 10 2H8ZM14 17C14 17.5523 13.5523 18 13 18H5C4.44772 18 4 17.5523 4 17V6H14V17ZM12 15C12 15.5523 11.5523 16 11 16C10.4477 16 10 15.5523 10 15V9C10 8.44771 10.4477 8 11 8C11.5523 8 12 8.44771 12 9V15Z"
            fill="#7C8187"
          />
        </svg>
      </button>
      <Button
        text="Save Document"
        icon={
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5759 0.597591L15.9092 5.93092C16.0756 6.09867 16.1684 6.32577 16.167 6.56204V13.6731C16.167 15.1459 14.9731 16.3398 13.5003 16.3398H2.83366C1.3609 16.3398 0.166992 15.1459 0.166992 13.6731V3.00648C0.166992 1.53372 1.3609 0.339813 2.83366 0.339813H9.94477C10.0637 0.342034 10.1812 0.366139 10.2914 0.410924C10.3974 0.454252 10.494 0.517635 10.5759 0.597591ZM9.05588 2.11759H5.50033V3.89537H9.05588V2.11759ZM10.8337 14.562H5.50033V11.8954C5.50033 11.4044 5.89829 11.0065 6.38921 11.0065H9.94477C10.4357 11.0065 10.8337 11.4044 10.8337 11.8954V14.562ZM13.5003 14.562C13.9912 14.562 14.3892 14.1641 14.3892 13.6731V6.92648L10.8337 3.37092V4.78426C10.8337 5.27518 10.4357 5.67315 9.94477 5.67315H4.61144C4.12052 5.67315 3.72255 5.27518 3.72255 4.78426V2.11759H2.83366C2.34274 2.11759 1.94477 2.51556 1.94477 3.00648V13.6731C1.94477 14.1641 2.34274 14.562 2.83366 14.562H3.72255V11.8954C3.72255 10.4226 4.91646 9.2287 6.38921 9.2287H9.94477C11.4175 9.2287 12.6114 10.4226 12.6114 11.8954V14.562H13.5003Z"
              fill="white"
            />
          </svg>
        }
        onClick={() => {}}
      />
    </div>
  );
};

export default Header;
