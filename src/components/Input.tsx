import { useState } from "react";

type InputType = "password" | "text";

interface InputProps {
  label: string;
  error?: string;
  id?: string;
  type: InputType;
  placeholder: string;
}

export const Input = ({
  label,
  error,
  id,
  type,
  placeholder,
  ...props
}: InputProps) => {
  const [showPassword, setShowpassword] = useState<boolean>(false);

  const toggleShowPassword = () => setShowpassword(!showPassword);

  return (
    <div className="flex flex-col items-start">
      <label htmlFor="" className="text-sm ">
        {label}
      </label>
      <div className="h-10 border-gray-300 border-2 max-w-125 w-100  rounded-lg relative">
        <input
          type={type === "password" && !showPassword ? "password" : "text"}
          placeholder={placeholder}
          className="h-full w-full pl-4 outline-light-blue rounded-lg"
          {...props}
        />

        {type === "password" &&
          (showPassword ? (
            <button
              onClick={toggleShowPassword}
              className="absolute top-1/2 -translate-y-1/2 right-2"
            >
              <img src="public/eye-off.svg" alt="" className="w-5" />
            </button>
          ) : (
            <button
              onClick={toggleShowPassword}
              className="absolute top-1/2 -translate-y-1/2 right-2"
            >
              <img src="public/eye.svg" alt="" className="w-5" />
            </button>
          ))}
      </div>
      <span className="text-red-500 text-sm">{error}</span>{" "}
    </div>
  );
};
