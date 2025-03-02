import { Outlet } from "react-router-dom";
import { Navigation } from "../../components/Navigation";
import "./Layout.css";

export const Layout = () => {
  return (
    <div id="layout">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
