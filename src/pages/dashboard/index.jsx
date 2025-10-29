import {
  cards,
  category,
  pendinOrders,
  recentProducts,
} from "../../uility/dataArray";

const DashboardPage = () => {
  return (
    <div className="flex gap-5">
      {/* Left Side  */}
      <div className="w-[65%] flex flex-col gap-6">
        {/* Part 1 */}
        <div className="grid grid-cols-4 w-full gap-3 h-[120px]  ]">
          {cards &&
            cards.map((items, i) => (
              <div
                key={i}
                className={
                  i % 2 == 0 || 1 == 0
                    ? "p-1 flex flex-col gap-2 rounded-md bg-stone-900"
                    : "p-1 flex flex-col gap-2 rounded-md  bg-stone-600"
                }
              >
                <div className="flex justify-between">
                  <span className="bg-indigo-300 rounded-3xl text-[10px] p-[2px]">{`as at ${items.year}`}</span>

                  <img
                    src={`/images/${items.img}`}
                    alt=""
                    className="w-[10px]"
                  />
                </div>
                <span className="text-sm font-semibold text-white">
                  {items.counts}
                </span>
                <p className="text-sm text-pink-400 font font-semibold">
                  {items.title}
                </p>
              </div>
            ))}
        </div>

        <div className="flex gap-4 w-full">
          <div className="bg-stone-600 text-white rounded-md p-2 w-[30%]">
            <h2 className="mb-3 text-lg">Categories</h2>
            <div className="flex w-full justify-between text-pink-500 font-semibold text-sm">
              <span>Category</span>
              <span>Actions</span>
            </div>

            <div className="flex flex-col gap-2">
              {category &&
                category.map((cate, i) => (
                  <div
                    key={i}
                    className={
                      i % 2 == 0 || 1 == 0
                        ? "flex justify-between w-full py-[8px] pl-1"
                        : "flex justify-between w-full py-[9px] bg-black pl-1"
                    }
                  >
                    <div className="text-sm">{cate.title}</div>
                    <div className="flex gap-2">
                      <div className="bg-pink-300 rounded-full size-[22px] p-[5px]">
                        <img src={`/images/${cate.img1}`} alt="" />
                      </div>
                      <div className="bg-pink-300 rounded-full size-[22px] p-[5px]">
                        <img src={`/images/${cate.img2}`} alt="" />{" "}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="bg-stone-600 text-white rounded-md p-2 w-full">
            <h2 className="mb-3 text-lg">Pending Orders</h2>
            <div className="grid grid-cols-4 w-full justify-between items-center text-pink-500 font-semibold text-sm">
              <span>Items</span>
              <span>By</span>
              <span className="">Location</span>
              <span className="flex justify-center">Actions</span>
            </div>

            <div className="flex flex-col gap-3 overflow-y-scroll items-center">
              {pendinOrders &&
                pendinOrders.map((items, i) => (
                  <div
                    className={
                      i % 2 == 0 || i == 0
                        ? "w-full grid grid-cols-4 justify-between"
                        : "w-full grid grid-cols-4 justify-between bg-stone-900"
                    }
                    key={i}
                  >
                    <div className="flex gap-2">
                      <img
                        src={`/images/shop/${items.img}`}
                        alt=""
                        className="size-7 rounded-full"
                      />
                      <p className="text-[12px]">
                        {items.title} <br />
                        <span>{items.counts}</span>
                      </p>
                    </div>
                    <div className="flex">
                      <p className="text-sm font-semibold text-center">
                        {items.orderby}
                      </p>
                    </div>
                    <div className="flex pr-6 pl-2 my-2">
                      <p className="text-sm font-semibold">{items.location}</p>
                    </div>
                    <div className="flex items-center justify-center pl-3">
                      <img
                        src={`/images/${items.fullImg}`}
                        alt=""
                        className="size-5 rounded-full"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="text-white p-1 bg-stone-500 w-[35%] rounded-sm">
        <div className="bg-[#181818] p-5 rounded-sm flex flex-col">
          <h3 className="mb-5">Recently Added Products</h3>

          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400 text-sm">
                <th>Product Info</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {recentProducts.map((items, ids) => (
                <tr className="border-b  border-gray-700" key={ids}>
                  <td className="flex items-center py-2 gap-2">
                    <img
                      src={`/images/shop/${items.image}`}
                      alt=""
                      className="h-8 w-8 rounded-full"
                    />

                    <div className="flex flex-col">
                      <p>{items.name}</p>
                      <p className="text-[12px]">{items.category}</p>
                    </div>
                  </td>
                  <td>{items.price}</td>
                  <td>
                    <img
                      src="/images/view.png"
                      alt=""
                      className="h-4 w-4 rounded-full"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
