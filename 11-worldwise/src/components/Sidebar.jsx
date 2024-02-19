import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import FooterApp from "./FooterApp";
import { Outlet } from "react-router-dom";
// import { CitiesProvider } from "../contexts/CitiesContext";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      {/* <CitiesProvider> */}
      <Outlet />
      {/* </CitiesProvider> */}
      <FooterApp />
    </div>
  );
}

export default Sidebar;
