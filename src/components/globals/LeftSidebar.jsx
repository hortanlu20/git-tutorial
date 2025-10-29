import { sidebarMenu } from "../../uility/dataArray";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div className="flex flex-col p-3 overflow-scroll bg-stone-900 h-full w-full px-3">
      <div className="flex items-center justify-start gap-2 mb-10">
        <img src="/images/logo.png" alt="" className="w-[45px]" />
        <span className="text-white text-xs font-semibold">
          Yayyu Lifestyles
        </span>
      </div>

      <div className="flex flex-col gap-10 text-pink-300">
        {sidebarMenu.map((item, i) => (
          <div key={i} className="flex flex-col gap-4">
            <h2 className="uppercase font-semibold text-[16px]">
              {item.category}
            </h2>
            <div className="flex flex-col gap-5 text-sm cursor-pointer">
              {item.children.map((child, ind) => (
                <Link to={child.url} key={ind} className="flex flex-col gap-3">
                  <div className="flex gap-3">
                    <img
                      src={`/images/${child.img}`}
                      alt=""
                      className="w-[16px] font-medium"
                    />
                    <span>{child.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
