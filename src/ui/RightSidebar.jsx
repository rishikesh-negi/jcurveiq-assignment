import { Filter } from "@carbon/icons-react";
import ButtonIcon from "./ButtonIcon";
import HeaderRightSidebar from "./HeaderRightSidebar";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import ProjectSummaryRightSidebar from "./ProjectSummaryRightSidebar";

function RightSidebar() {
  const { openProjectId, currentMobileSidebar } = useSelector(
    (state) => state.ui
  );

  const selectAllProjects = (state) => state.projects.projects;
  const selectOpenProject = createSelector([selectAllProjects], (projects) =>
    projects.filter((project) => project.id === openProjectId)?.at(0)
  );

  const openProject = useSelector(selectOpenProject);

  return (
    <>
      <HeaderRightSidebar />
      <aside
        className={`flex flex-col gap-5 row-start-2 row-span-1 phone-lg:col-start-3 col-span-1 border-l border-border bg-background-4 p-4 transition-transform duration-200 ease-in-out  max-phone-lg:absolute max-phone-lg:w-full max-phone-lg:h-full max-phone-lg:p-6 max-phone-lg:gap-6
        ${currentMobileSidebar !== "right" && "max-phone-lg:translate-x-[105%]"}
        ${currentMobileSidebar === "right" && "max-phone-lg:translate-x-0"}`}
        inert={currentMobileSidebar && currentMobileSidebar !== "right"}>
        <div className="w-full flex items-center gap-4 max-phone-lg:gap-6">
          <SearchBar required={true} />
          <div className="px-2">
            <ButtonIcon
              icon={
                <Filter
                  size={18}
                  fill="var(--color-text-primary)"
                  className="max-phone-lg:scale-120"
                />
              }
              ariaLabel="Add filters"
              title="Filter"
            />
          </div>
        </div>
        {openProject && <ProjectSummaryRightSidebar project={openProject} />}
      </aside>
    </>
  );
}

export default RightSidebar;
