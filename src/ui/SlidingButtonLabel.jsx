import { useSelector } from "react-redux";

function SlidingButtonLabel({ label }) {
  const { leftSidebarExpanded } = useSelector((state) => state.ui);
  const position = !leftSidebarExpanded && "absolute -translate-x-200 text-xs";

  return (
    <span
      className={`text-2xl leading-0 -mb-1 transition-all duration-100 ease-in-out ${position} max-phone-lg:text-4xl`}>
      {label}
    </span>
  );
}

export default SlidingButtonLabel;
