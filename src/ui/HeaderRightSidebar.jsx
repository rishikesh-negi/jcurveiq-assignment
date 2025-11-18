import { BottomPanelOpen, CloseLarge, Maximize } from "@carbon/icons-react";
import ButtonIcon from "./ButtonIcon";
import { useSelector } from "react-redux";
import { useCloseCollapseLeftSidebar } from "../hooks/useCloseCollapseLeftSidebar";

function HeaderRightSidebar() {
  const { currentMobileSidebar } = useSelector((state) => state.ui);
  const closeCollapseSidebar = useCloseCollapseLeftSidebar();

  return (
    <header
      className={`flex flex-col items-center row-start-1 row-span-1 phone-lg:col-start-3 col-span-1 z-10 phone-lg:border-l border-border bg-background-1 transition-transform duration-200 ease-in-out max-phone-lg:absolute max-phone-lg:w-full max-phone-lg:h-full
      ${currentMobileSidebar !== "right" && "max-phone-lg:translate-x-[105%]"}
      ${currentMobileSidebar === "right" && "max-phone-lg:translate-x-0"}`}
      inert={currentMobileSidebar && currentMobileSidebar !== "right"}>
      <div className="flex w-full h-full items-center justify-between px-10 max-phone-lg:px-14">
        <div className="flex items-center gap-3 max-phone-lg:gap-6">
          <span className="text-2xl leading-0 max-phone-lg:text-4xl">
            Notebook
          </span>
          <ButtonIcon
            icon={
              <Maximize
                size={18}
                fill="var(--color-icons)"
                className="max-phone-lg:scale-105"
              />
            }
            ariaLabel="Expand notebook"
            title="Expand"
          />
        </div>

        <div className="rotate-180">
          <ButtonIcon
            icon={
              currentMobileSidebar === "right" ? (
                <CloseLarge
                  size={22}
                  fill="var(--color-icons)"
                  className="max-phone-lg:scale-120"
                />
              ) : (
                <BottomPanelOpen
                  size={18}
                  fill="var(--color-icons)"
                  className="max-phone-lg:scale-120"
                />
              )
            }
            onClick={closeCollapseSidebar}
            ariaLabel={
              currentMobileSidebar === "right"
                ? "Close sidebar"
                : "Collapse panel"
            }
            title={
              currentMobileSidebar === "right"
                ? "Close sidebar"
                : "Collapse panel"
            }
          />
        </div>
      </div>
    </header>
  );
}

export default HeaderRightSidebar;
