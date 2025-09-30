import React from "react";

type ButtonProps = {
  variant: "primary" | "secondary" | "destructive";
} & React.ComponentPropsWithoutRef<"button">;

const Button = ({ children, variant, onClick }: ButtonProps) => {
  const variants = {
    primary: "text-gray-700 inset-ring inset-ring-gray-300 hover:bg-gray-100",
    secondary: "bg-gray-900 text-white hover:bg-gray-700",
    destructive: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      className={`${variants[variant]} p-2 px-4 rounded-lg h-fit w-fit cursor-pointer transition`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
