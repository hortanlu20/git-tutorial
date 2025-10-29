import { useState } from "react";
import ProductForm from "./product form/ProductForm";
import CategoryForm from "./category form/CategoryForm";
import axios from "axios";
import { DELETE_PRODUCT } from "../../constant/constant";
import { DELETE_CATEGORY } from "../../constant/constant";
import { successMessage, errorMessage } from "../../uility/helpers";
import { category } from "../../uility/dataArray";

const FormModal = ({ table, type, id, data = null }) => {
  const [open, setopen] = useState(false);
  const bgColor =
    type == "create"
      ? "bg-green-500"
      : type == "cancel"
      ? "bg-red-500"
      : type == "update"
      ? "bg-green-500"
      : "bg-[#d8d5ff]";

  const forms = {
    product: (type, data) =>
      type == "update" ? (
        data && <ProductForm type={type} data={data} setopen={setopen} />
      ) : (
        <ProductForm type={type} data={data} setopen={setopen} />
      ),

    category: (type, data) =>
      type == "update" ? (
        data && <CategoryForm type={type} data={data} setopen={setopen} />
      ) : (
        <CategoryForm type={type} data={data} setopen={setopen} />
      ),
  };

  const handleDelete = async () => {
    const res =
      table === "product"
        ? await axios.delete(`${DELETE_PRODUCT}/${id}`)
        : table === "category"
        ? await axios.delete(`${DELETE_CATEGORY}/${id}`)
        : null;
    if (res.status.toString().includes("20")) {
      successMessage("Sucessfully deleted data");
      setopen(false);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      errorMessage("Unable to delete data");
    }
    console.log("Deleting an item");
  };

  const Form = () => {
    return type == "delete" && id ? (
      <div className="flex flex-col p-4 items-center gap-4">
        <div className="text-center font-medium">
          All data will be deleted upon the completion of this action. Are you
          sure you want to continue
        </div>
        <button
          className="bg-red-500 text-white py-2  px-6 font-semibold rounded-md w-max cursor-pointer hover:scale-110 ease-in duration-200"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    ) : type == "create" || type == "update" ? (
      forms[table](type, data)
    ) : null;
  };

  return (
    <>
      <button
        onClick={() => setopen(true)}
        className={`${bgColor} h-7 w-7 flex items-center justify-center rounded-full cursor-pointer`}
      >
        <img src={`/images/${type}.png`} alt="" className="h-[16px]" />
      </button>

      {open && (
        <div className="w-screen h-screen bg-black/65 absolute top-0 left-0 z-50 flex items-center justify-center">
          <div className="bg-black w-[50%] p-5 relative">
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setopen(false)}
            >
              <img
                src="/images/close.png"
                alt=""
                className="w-[14px] h-[14px] hover:scale-110 ease-in duration-200"
              />
            </div>
            <Form />
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
