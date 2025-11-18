import { useDispatch, useSelector } from "react-redux";
import HeaderLeftSidebar from "./HeaderLeftSidebar";
import ProjectActions from "../features/projects/ProjectActions";
import ProjectsList from "../features/projects/ProjectsList";
import UserActions from "./UserActions";
import { collapseLeftSidebar, expandLeftSidebar } from "./uiSlice";

function LeftSidebar() {
  const dispatch = useDispatch();

  const {
    leftSidebarExpanded,
    sidebarHoverEnabled,
    openProjectId,
    currentMobileSidebar,
    isMobileLayout,
  } = useSelector((state) => state.ui);

  function handleMouseEnter() {
    if (!leftSidebarExpanded && sidebarHoverEnabled)
      dispatch(expandLeftSidebar());
  }

  function handleMouseLeave() {
    if (leftSidebarExpanded && !openProjectId) dispatch(collapseLeftSidebar());
  }

  const width = leftSidebarExpanded ? "w-102" : "w-25";

  return (
    <aside
      className={`row-span-full col-span-1 bg-background-1 transition-all duration-200 ease-in-out ${width} h-full flex flex-col border-r border-border relative z-10 max-phone-lg:absolute max-phone-lg:w-full
      ${currentMobileSidebar !== "left" && "max-phone-lg:translate-x-[-105%]"}
      ${currentMobileSidebar === "left" && "translate-0"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      inert={isMobileLayout && currentMobileSidebar !== "left"}
      aria-hidden={isMobileLayout && currentMobileSidebar !== "left"}>
      <HeaderLeftSidebar leftSidebarExpanded={leftSidebarExpanded} />
      <ProjectActions leftSidebarExpanded={leftSidebarExpanded} />
      <ProjectsList leftSidebarExpanded={leftSidebarExpanded} />
      <UserActions leftSidebarExpanded={leftSidebarExpanded} />
    </aside>
  );
}

export default LeftSidebar;
