import React from "react";

const Input = ({ color = "gray", label, size = "md", className, ...props }) => {
  const baseStyles = "border rounded-lg px-4 py-2";
  const colorStyles = color === "gray" ? "bg-gray-200 border-gray-300" : "";
  const sizeStyles =
    size === "lg" ? "text-lg" : size === "sm" ? "text-sm" : "text-base";

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label className="mb-1 text-gray-700 dark:text-gray-300">{label}</label>
      )}
      <input
        className={`${baseStyles} ${colorStyles} ${sizeStyles}`}
        {...props}
      />
    </div>
  );
};

export default Input;
