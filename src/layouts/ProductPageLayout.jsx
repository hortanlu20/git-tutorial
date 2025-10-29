//import Navbar from "../globals/Navbar";
import Navbar from "../components/globals/Navbar";
import LeftSidebar from "../components/globals/LeftSidebar";
import { Outlet } from "react-router-dom";

const ProductPageLayout = () => {
  return (
    <div className="flex w-screen h-screen gap-3">
      {/* Left */}
      <div className="flex w-[20%]">
        <LeftSidebar />
      </div>

      <div className="flex flex-col gap-3 w-full">
        {/* Right */}
        <Navbar />

        {/* Main */}
        <Outlet />
      </div>
    </div>
  );
};

export default ProductPageLayout;
