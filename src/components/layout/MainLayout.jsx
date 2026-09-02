import { Outlet } from "react-router-dom";
import SideNavBar from "./SideNavBar";
import TopAppBar from "./TopAppBar";

const MainLayout = ({ onSearch }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <SideNavBar />
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        <TopAppBar onSearch={onSearch} />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
