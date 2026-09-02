const MaterialSymbols = ({ name, className, ...props }) => {
  return (
    <span className={`material-symbols-outlined ${className || ""}`.trim()} {...props}>
      {name}
    </span>
  );
};

export default MaterialSymbols;
