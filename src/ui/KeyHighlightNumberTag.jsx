function KeyHighlightNumberTag({ children }) {
  return (
    <span className="inline-flex items-center justify-center size-6 p-3.5 ml-1.5 bg-border text-xl text-text-helper text-center rounded-sm max-phone-lg:size-10 max-phone-lg:text-2xl">
      {children}
    </span>
  );
}

export default KeyHighlightNumberTag;
