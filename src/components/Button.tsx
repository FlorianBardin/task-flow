import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "destructive";
};

const Button = ({ children, variant }: ButtonProps) => {
  const variants = {
    primary: "text-gray-700 border border-gray-300 hover:bg-gray-100",
    secondary: "bg-gray-900 text-white",
    destructive: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      className={`${variants[variant]} p-2 px-4 rounded-lg h-fit w-fit cursor-pointer transition`}
    >
      {children}
    </button>
  );
};

export default Button;
