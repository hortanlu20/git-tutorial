import CustomFormik from "../CustomFormik";
import AppInputField from "../AppInputField";
import AppSubmitButton from "../AppSubmitButton";

const CategoryFormInner = ({
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
            ? "Add a new category"
            : `Edit ${itemData.category}`}
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="" className="text-gray-400 text-sm">
            Category Title
          </label>
          <AppInputField name="category" />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="" className="text-gray-400 text-sm">
            Category Slug (Lower case. Join multiple words with -)
          </label>
          <AppInputField name="categorySlug" />
        </div>

        <div className="mt-5 w-full flex">
          <AppSubmitButton
            title={type == "create" ? "Add New Category" : "Update Category"}
            disabled={disabled}
          />
        </div>
      </div>
    </CustomFormik>
  );
};

export default CategoryFormInner;
