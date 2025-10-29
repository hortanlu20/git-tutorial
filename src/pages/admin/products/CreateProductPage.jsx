import { useState, useEffect } from "react";
import AppInputField from "../../../components/form/AppInputField";

const CreateProductPage = () => {
  const [productTitle, setproductTitle] = useState();
  const [productcategory, setproductcategory] = useState();
  const [price, setprice] = useState();
  const [productDescription, setproductDescription] = useState();
  const [productSpecification, setproductSpecification] = useState();
  const [productimages, setproductimages] = useState([]);
  const [errors, setErrors] = useState({});

  return (
    <div className="container">
      <div className="w-full px-5 lg:w-[50%] mx-auto flex flex-col gap-5">
        <div className="text-xl lg:text-2xl font-semibold">Add New Product</div>
        <div className="flex flex-col gap-5">
          <AppInputField
            name="productTitle"
            label="Product Title"
            onChange={(e) => setproductTitle(e.target.value)}
            error={errors.productTitle}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateProductPage;
