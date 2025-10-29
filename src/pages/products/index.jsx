import useFetch from "../../api/useFetch";
import FormModal from "../../components/form/FormModal";
import Table from "../../components/globals/Table";
import { Link } from "react-router-dom";

const tableColumn = [
  {
    accessor: "products-info",
    title: "Products Info",
    className: "font-semibold",
  },
  {
    accessor: "Original-Prices",
    title: "Original/New Prices",
    className: "font-semibold",
  },
  {
    accessor: "Description",
    title: "Description",
    className: "font-semibold",
  },
  {
    accessor: "Actions",
    title: "Actions",
    className: "font-semibold",
  },
];

const ProductPage = () => {
  const { data } = useFetch("products");

  const rowTemplate = (item, i) => {
    return (
      <tr
        key={i}
        className=" even:bg-gray-950 hover:bg-gray-950 border-b border-gray-700"
      >
        <td className="table-cell py-2">
          <div className="flex items-center gap-2 py-2">
            <img
              src={`/public/images/shop/${item.productImage[0]}`}
              alt={item.name}
              className="h-8 w-8 rounded-full"
            />
            <div>
              <div className="text-white">{item.productTitle}</div>
              <div className="text-gray-400 text-xs">
                {item.productCategory}
              </div>
            </div>
          </div>
        </td>
        <td className="table-cell text-white">{item.price}</td>
        <td className="table-cell text-white">
          {item.productDescription?.substring(0, 40)}...
        </td>

        <td className="table-cell">
          <div className="flex items-center gap-2">
            <FormModal type="delete" table="product" id={item?.id} />
            <FormModal
              type="update"
              id={item?.id}
              data={item}
              table="product"
            />

            <Link
              to=""
              className="h-7 w-7 flex items-center justify-center rounded-full"
            >
              <img src="/images/view.png" alt="" className="rounded-full " />
            </Link>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="bg-black/80 h-full  p-2">
      <div className="bg-stone-900  w-full h-full rounded-md flex flex-col p-4 ">
        <div className="flex justify-between items-center">
          <h2 className="text-lg text-stone-400">All Products in Shop</h2>
          <div className="flex gap-2 px-2">
            <div className="border-[1px] h-[30px] w-[200px] relative border-pink-300 rounded-2xl">
              <input type="text" className="h-full w-full border-pink-300" />
              <img
                src="/images/search.png"
                alt=""
                className="absolute top-[7px] left-[5px] h-[14px]"
              />
            </div>

            <div className="bg-[#d401f0] border-[1px] rounded-full p-2">
              <img className="h-4" src="/public/images/filter.png" alt="" />
            </div>
            <div className="bg-[#d401f0] border-[1px] rounded-full p-2">
              <img className="h-4" src="/public/images/sort.png" alt="" />
            </div>
            <div className="bg-[#d401f0] border-[1px] rounded-full p-2">
              <img className="h-4" src="/public/images/upload.png" alt="" />
            </div>
          </div>
        </div>

        <FormModal type="create" table="product" />

        <div className="bg-[#181818] rounded-lg p-5 w-full">
          <div className="rounded-lg p-5">
            <Table
              tableColumn={tableColumn}
              rowData={data}
              rowTemplate={rowTemplate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
