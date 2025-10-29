import * as yup from "yup";

export const validateAddNewProduct = () => {
  const validationSchema = yup.object({
    productTitle: yup
      .string()
      .min(3, "Product title is too short. Go higher")
      .max(50, "Product title is too long")
      .required("Product title must be added"),
    productCategory: yup.string().required("Product category is missing"),
    price: yup.number("Must be a number").required("Product price is missing"),
    productDescription: yup.string().required("Product description is missing"),
    productSpecification: yup
      .string()
      .required("Product description is missing"),
    productImage: yup.string().required("Product images are missing"),
  });

  return validationSchema;
};

export const validateAddNewCategory = () => {
  const validationSchema = yup.object({
    category: yup.string().required("Category name must be added"),
    categorySlug: yup.string().required("Category slug is missing"),
  });

  return validationSchema;
};

export const validateLogin = () => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("invalid email adress")
      .required("Email must be added"),
    password: yup
      .string()
      .min(3, "Password is too short. Go higher")
      .required("Password is missing"),
    confirmPassword: yup
      .string()
      .required("Please Confirm Password")
      .oneOf([yup.ref("password"), null], "Password must match"),
  });

  return validationSchema;
};
