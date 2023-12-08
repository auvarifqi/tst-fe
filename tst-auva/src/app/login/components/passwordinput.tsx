"use client";
import { useState } from "react";
// import { Field, ErrorMessage } from "formik";

function PasswordInput({ field, form, ...props }: any) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <input type={showPassword ? "text" : "password"} {...field} {...props} />
      <button type="button" onClick={togglePasswordVisibility}></button>
      {/* <ErrorMessage name={field.name} component="div" /> */}
    </div>
  );
}

export default PasswordInput;
