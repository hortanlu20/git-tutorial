import { useState, useEffect } from "react";
import { addProductValues } from "../../../uility/initialValue";
import { validateAddNewProduct } from "../../../uility/validations";
import ProductFormInner from "./ProductFormInner";
import axios from "axios";
import { successMessage } from "../../../uility/helpers";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "../../../constant/constant";

const ProductForm = ({ type, data, setopen }) => {
  const [itemData, setitemData] = useState(null);
  useEffect(() => {
    if (data) {
      let { productSpecification, productImage, ...rest } = data;
      productSpecification = productSpecification.join(". ");
      productImage = productImage.join(", ");

      let newData = { productSpecification, productImage, ...rest };

      setitemData(newData);
    }
  }, [data]);

  const initialValues = addProductValues(itemData);
  const validationSchema = validateAddNewProduct();
  const [disabled, setdisabled] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log("VALUES", values);

    let { productSpecification, productImage, ...rest } = values;
    let permalink = values.productTitle?.toLowerCase()?.split(" ").join("-");
    permalink = `${permalink}-${values.price}`;

    const payload = {
      productSpecification: values.productSpecification.split(". "),
      productImage: values.productImage.split(", "),
      permalink,
      ...rest,
    };
    console.log("Payload", payload);

    const res =
      type === "create"
        ? await axios.post(CREATE_PRODUCT, payload)
        : type === "update"
        ? await axios.put(`${UPDATE_PRODUCT}/${data.id}`, payload)
        : null;

    console.log("res", res);

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
        itemData && (
          <ProductFormInner
            handleSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
            disabled={disabled}
            type={type}
            itemData={itemData}
          />
        )
      ) : (
        <ProductFormInner
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

export default ProductForm;
