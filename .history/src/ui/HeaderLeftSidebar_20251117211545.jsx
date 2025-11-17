import { CloseLarge, SidePanelClose } from "@carbon/icons-react";

import { useCloseCollapseLeftSidebar } from "../hooks/useCloseCollapseLeftSidebar";

import ButtonIcon from "./ButtonIcon";
import { useSelector } from "react-redux";

function HeaderLeftSidebar({ leftSidebarExpanded }) {
  const closeCollapseSidebar = useCloseCollapseLeftSidebar();
  const { currentMobileSidebar } = useSelector((state) => state.ui);

  return (
    <header
      className={`flex items-center justify-between ${leftSidebarExpanded ? "px-8" : "px-2 justify-center"} py-10 max-phone-lg:px-16 max-phone-lg:py-12 max-phone-sm:px-12`}>
      <div className="flex items-center gap-3 z-10">
        <img
          src="logo.png"
          alt="Company logo"
          className="size-[2.6rem] max-phone-lg:size-[4.2rem]"
        />
        <span
          className={`text-2xl tracking-wider font-semibold pt-[5px] transition-all duration-200 ${!leftSidebarExpanded && "absolute -translate-x-200"} max-phone-lg:text-4xl`}>
          LOGO
        </span>
      </div>
      {leftSidebarExpanded && (
        <ButtonIcon
          icon={
            currentMobileSidebar === "left" ? (
              <CloseLarge
                size={22}
                fill="var(--color-icons)"
                className="max-phone-lg:scale-120"
              />
            ) : (
              <SidePanelClose
                size={22}
                fill="var(--color-icons)"
                className="max-phone-lg:scale-120"
              />
            )
          }
          onClick={closeCollapseSidebar}
          additionalStyles={`transition-all duration-200 ${!leftSidebarExpanded && "absolute -translate-x-200"}`}
        />
      )}
    </header>
  );
}

export default HeaderLeftSidebar;
