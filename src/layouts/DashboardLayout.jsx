import { Outlet } from "react-router-dom";
import LeftSidebar from "../components/globals/LeftSidebar";
import Navbar from "../components/globals/Navbar";

const DashboardLayout = () => {
  return (
    <div className="flex w-screen h-screen gap-3 bg-black ">
      <div className="flex w-[20%] ">
        <LeftSidebar />
      </div>
      <div className="w-full flex flex-col gap-3">
        <Navbar />

        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
