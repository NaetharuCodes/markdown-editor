import Button from "./components/Button/Button";
import styles from "./App.module.css";
import Toggle from "./components/Toggle/Toggle";
import { useState } from "react";
import AppShell from "./components/AppShell/AppShell";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkmode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppShell>
      <div className={styles.container}>
        <Button
          text="Sample Button"
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
                d="M10.5762 0.597622L15.9095 5.93095C16.0759 6.0987 16.1687 6.3258 16.1673 6.56207V13.6732C16.1673 15.1459 14.9734 16.3398 13.5006 16.3398H2.83398C1.36122 16.3398 0.167313 15.1459 0.167313 13.6732V3.00651C0.167313 1.53375 1.36122 0.339844 2.83398 0.339844H9.94509C10.064 0.342064 10.1815 0.36617 10.2918 0.410955C10.3977 0.454282 10.4943 0.517665 10.5762 0.597622ZM9.0562 2.11762H5.50065V3.8954H9.0562V2.11762ZM10.834 14.5621H5.50065V11.8954C5.50065 11.4045 5.89862 11.0065 6.38953 11.0065H9.94509C10.436 11.0065 10.834 11.4045 10.834 11.8954V14.5621ZM13.5006 14.5621C13.9916 14.5621 14.3895 14.1641 14.3895 13.6732V6.92651L10.834 3.37095V4.78429C10.834 5.27521 10.436 5.67318 9.94509 5.67318H4.61176C4.12084 5.67318 3.72287 5.27521 3.72287 4.78429V2.11762H2.83398C2.34306 2.11762 1.94509 2.51559 1.94509 3.00651V13.6732C1.94509 14.1641 2.34306 14.5621 2.83398 14.5621H3.72287V11.8954C3.72287 10.4226 4.91678 9.22873 6.38953 9.22873H9.94509C11.4178 9.22873 12.6118 10.4226 12.6118 11.8954V14.5621H13.5006Z"
                fill="white"
              />
            </svg>
          }
          onClick={() => console.log("You Clicked")}
        />
      </div>
    </AppShell>
  );
}

export default App;
