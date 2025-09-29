type BadgeType = {
  children: React.ReactNode;
  color: "Low" | "Medium" | "High" | "assign";
};

const Badge = ({ children, color }: BadgeType) => {
  const colors = {
    High: "text-red-700 bg-red-300",
    Medium: "text-yellow-700 bg-yellow-300",
    Low: "text-green-700 bg-green-300",
    assign: "text-blue-600 bg-blue-200",
  };

  return <span className={`${colors[color]} badge`}>{children}</span>;
};

export default Badge;
