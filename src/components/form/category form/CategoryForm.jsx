import { useState, useEffect } from "react";
import { addCategoryValues } from "../../../uility/initialValue";
import { validateAddNewCategory } from "../../../uility/validations";
import CategoryFormInner from "./CategoryFormInner";
import axios from "axios";
import { successMessage } from "../../../uility/helpers";
import { CREATE_CATEGORY, UPDATE_CATEGORY } from "../../../constant/constant";

const CategoryForm = ({ type, data, setopen }) => {
  const initialValues = addCategoryValues(data);
  const validationSchema = validateAddNewCategory();
  const [disabled, setdisabled] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log("VALUES", values);

    const res =
      type === "create"
        ? await axios.post(CREATE_CATEGORY, values)
        : type === "update"
        ? await axios.put(`${UPDATE_CATEGORY}/${data.id}`, values)
        : null;

    if (res.status.toString().includes("20")) {
      successMessage("Sucessfully completed your request");
      setopen(false);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      errorMessage("Unable to complete your request");
    }
    setSubmitting(false);
    setdisabled(false);
  };

  return (
    <>
      {type == "update" ? (
        data && (
          <CategoryFormInner
            handleSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
            disabled={disabled}
            type={type}
            itemData={data}
          />
        )
      ) : (
        <CategoryFormInner
          handleSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
          disabled={disabled}
          type={type}
        />
      )}
    </>
  );
};

export default CategoryForm;
