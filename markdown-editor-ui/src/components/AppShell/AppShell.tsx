import { useState } from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import styles from "./AppShell.module.css";

interface AppShellProps {
  children: React.ReactNode;
}

const AppShell = ({ children }: AppShellProps) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const handleToggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div
      className={`${styles.container} ${openSidebar ? styles.openSidebar : ""}`}
    >
      <Header toggleSidebar={handleToggleSidebar} openSidebar={openSidebar} />
      <SideBar open={openSidebar} />
      {children}
    </div>
  );
};

export default AppShell;
