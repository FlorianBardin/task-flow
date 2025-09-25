type BadgeType = {
  children: React.ReactNode;
  color: "low" | "medium" | "high" | "assign";
};

const Badge = ({ children, color }: BadgeType) => {
  const colors = {
    high: "text-red-700 bg-red-300",
    medium: "text-yellow-700 bg-yellow-300",
    low: "text-green-700 bg-green-300",
    assign: "text-blue-600 bg-blue-200",
  };

  return <span className={`${colors[color]} badge`}>{children}</span>;
};

export default Badge;
