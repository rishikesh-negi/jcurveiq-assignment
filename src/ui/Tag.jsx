function Tag({ borderColor, children }) {
  return (
    <div
      className={`inline-block px-3 py-1 rounded-xs bg-background-4 border ${borderColor} text-lg max-phone-lg:text-2xl`}>
      {children}
    </div>
  );
}

export default Tag;
