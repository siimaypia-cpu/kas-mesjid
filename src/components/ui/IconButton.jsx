import MaterialSymbols from "../icons/MaterialSymbols";

const IconButton = ({ icon, onClick, className = "", size = "md", ...props }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded ${sizeClasses[size]} flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors ${className}`}
      {...props}
    >
      <MaterialSymbols name={icon} />
    </button>
  );
};

export default IconButton;
