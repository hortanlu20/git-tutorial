import CustomFormik from "../CustomFormik";
import AppInputField from "../AppInputField";
import AppSubmitButton from "../AppSubmitButton";

const ProductFormInner = ({
  type,
  handleSubmit,
  initialValues,
  validationSchema,
  disabled,
  itemData,
}) => {
  return (
    <CustomFormik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <div className="w-full p-5 flex flex-col gap-3">
        <div className="text-xl lg:text-2xl font-semibold">
          {type == "create"
            ? "Add a new product"
            : `Edit ${itemData.productTitle}`}
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="" className="text-gray-400 text-sm">
            Product Title
          </label>
          <AppInputField name="productTitle" />
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1 w-[45%]">
            <label htmlFor="" className="text-gray-400 text-sm">
              Product Category
            </label>
            <AppInputField name="productCategory" />
          </div>

          <div className="flex flex-col gap-1 w-[45%]">
            <label htmlFor="" className="text-gray-400 text-sm">
              Product Price
            </label>
            <AppInputField name="price" />
          </div>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="" className="text-gray-400 text-sm">
            Product Description
          </label>
          <AppInputField name="productDescription" />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="" className="text-gray-400 text-sm">
            Product Specification
          </label>
          <AppInputField name="productSpecification" />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="" className="text-gray-400 text-sm">
            Product Image
          </label>
          <AppInputField name="productImage" />
        </div>

        <div className="mt-5 w-full flex">
          <AppSubmitButton
            title={type == "create" ? "Add New Product" : "Update Product"}
            disabled={disabled}
          />
        </div>
      </div>
    </CustomFormik>
  );
};

export default ProductFormInner;
