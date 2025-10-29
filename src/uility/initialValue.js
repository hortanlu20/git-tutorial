import { category } from "./dataArray";

export const addProductValues = (itemData) => {
  console.log("itemData", itemData);
  const initialValues = {
    productTitle: itemData ? itemData?.productTitle : "",
    productCategory: itemData ? itemData?.productCategory : "",
    price: itemData ? itemData?.price : "",
    productDescription: itemData ? itemData?.productDescription : "",
    productSpecification: itemData ? itemData?.productSpecification : "",
    productImage: itemData ? itemData?.productImage : "",
  };
  return initialValues;
};

export const addCategoryValues = (itemData) => {
  const initialValues = {
    category: itemData ? itemData?.category : "",
    categorySlug: itemData ? itemData?.categorySlug : "",
  };
  return initialValues;
};

export const loginValues = (itemData) => {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  return initialValues;
};
