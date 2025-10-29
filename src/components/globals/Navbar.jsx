const Navbar = () => {
  return (
    <div className="ml-[-12px] px-3 w-full h-[60px] bg-black  gap-3 flex justify-between items-center  ">
      <div className="border border-pink-300 w-[180px] h-[30px] relative rounded-3xl">
        <input type="text" className="w-[200px]" />

        <img
          src="/images/search.png"
          alt=""
          className="absolute top-[25%] left-[8px] h-[20px]"
        />
      </div>

      <div className="flex items-center gap-5">
        <div className="size-[35px] bg-white rounded-full m-auto">
          <img src="/images/message.png" alt="" className="size-full p-1" />
        </div>

        <div className="size-[35px] bg-white rounded-full m-auto">
          <img
            src="/images/announcement.png"
            alt=""
            className="size-full p-1"
          />
        </div>

        <div className="flex flex-col">
          <span className="text-blue-700">admin</span>
          <span className="text-pink-700">superadmin</span>
        </div>

        <div className="size-[35px] bg-white rounded-full m-auto">
          <img
            src="/images/avatar.png"
            alt=""
            className="size-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
