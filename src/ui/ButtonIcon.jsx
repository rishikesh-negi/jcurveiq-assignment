function ButtonIcon({ icon, children, onClick, ariaLabel = "", title }) {
  return (
    <button
      className={`w-fit flex items-center gap-5 cursor-pointer hover:scale-x-105 focus-visible:outline-none focus:ring-2 hover:ring-1 ring-offset-4 hover:ring-gray-300 focus:ring-accent-100 rounded-full transition-all duration-75`}
      onClick={onClick || null}
      aria-label={ariaLabel}
      title={title}>
      {icon}
      {children}
    </button>
  );
}

export default ButtonIcon;
