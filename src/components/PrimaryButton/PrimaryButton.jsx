export default function PrimaryButton({ type, className, children }) {
  return (
    <button
      type={type}
      className={`flex items-center justify-center bg-primary rounded-lg font-semibold cursor-pointer
        transition-all duration-200 select-none ${className || ""}`}
    >
      {children}
    </button>
  );
}
