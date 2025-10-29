import { useNavigate } from "react-router-dom";
import AppInputField from "../components/form/AppInputField";
import AppSubmitButton from "../components/form/AppSubmitButton";
import CustomFormik from "../components/form/CustomFormik";
import { loginValues } from "../uility/initialValue";
import { validateLogin } from "../uility/validations";

const LoginPage = () => {
  const initialValues = loginValues();
  const validationSchema = validateLogin();
  const history = useNavigate();

  const handleSubmit = (values) => {
    console.log("VAL", values);
    setTimeout(() => {
      history("/");
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-6 items-center justify-center bg-black h-screen w-screen text-white px-5">
      <div className="w-full md:max-w-[400px] mx-auto flex flex-col gap-5">
        <img src="/images/logo.png" alt="" />

        <CustomFormik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <AppInputField
            type="email"
            name="email"
            placeholder="email address"
          />
          <AppInputField
            type="password"
            name="password"
            placeholder="Password"
          />
          <AppInputField
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
          />

          <AppSubmitButton title="Submit" onClick={handleSubmit} />
        </CustomFormik>
      </div>
    </div>
  );
};

export default LoginPage;
