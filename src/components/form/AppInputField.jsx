import { FaEye } from "react-icons/fa";
import { useFormikContext } from "formik";
import { useState } from "react";

const AppInputField = ({ name, type, placeholder, className }) => {
  const { errors, values, touched, handleBlur, handleChange } =
    useFormikContext();

  const value = values[name];
  const error = errors[name];
  const isInputTouched = touched[name];

  const [showPassword, setshowPassword] = useState();
  const togglePassword = () => {
    setshowPassword(!showPassword);
  };

  return (
    <div className={`flex flex-col w-full gap-1 ${className}`}>
      {type == "password" ? (
        <div className="flex w-full mx-auto">
          <div className="flex justify-between items-center border-white border-[1px] px-2 w-full rounded-md">
            <input
              onChange={handleChange(name)}
              onBlur={handleBlur(name)}
              value={value}
              type={showPassword ? "text" : "password"}
              placeholder={placeholder}
              className="h-full w-full p-2"
            />
            <FaEye className="cursor-pointer" onClick={togglePassword} />
          </div>
          {error && <span className="error">{error}</span>}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <input
            onChange={handleChange(name)}
            onBlur={handleBlur(name)}
            value={value}
            type={type}
            placeholder={placeholder}
            className="primary-input w-full h-[35px] p-3"
          />
          {error && isInputTouched && <span className="error">{error}</span>}
        </div>
      )}
    </div>
  );
};

export default AppInputField;
