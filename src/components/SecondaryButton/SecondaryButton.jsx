export default function SecondaryButton({ type, className, children }) {
  return (
    <button
      type={type}
      className={`flex items-center justify-center bg-transparent rounded-lg font-semibold cursor-pointer
          border border-white/10 text-[#ced1c7] transition-all duration-200 select-none ${
            className || ""
          }`}
    >
      {children}
    </button>
  );
}
