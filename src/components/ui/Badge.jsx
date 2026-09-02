const Badge = ({ variant = "default", className = "" }) => {
  const variantClasses = {
    default: "px-xs py-0.5 rounded bg-surface-container-high text-on-surface-variant",
    secondary: "px-xs py-0.5 rounded bg-secondary-container text-on-secondary-container",
    tertiary: "px-xs py-0.5 rounded bg-tertiary-container text-on-tertiary-container",
  };

  const baseClasses =
    "font-label-sm text-label-sm uppercase tracking-wider text-[10px]";

  return <div className={`${baseClasses} ${variantClasses[variant]} ${className}`.trim()} />;
};

export default Badge;
