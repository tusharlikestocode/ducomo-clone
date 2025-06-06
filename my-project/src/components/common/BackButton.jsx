const BackButton = ({ onClick, className = "", ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center p-sm rounded-md bg-transparent cursor-pointer transition-all duration-300 ease-linear ${className}`}
      aria-label="Go back"
      {...props}
    >
      <img src="/back.svg" alt="Back" />
    </button>
  );
};

export default BackButton;