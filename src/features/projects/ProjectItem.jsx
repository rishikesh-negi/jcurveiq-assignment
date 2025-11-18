import { useDispatch, useSelector } from "react-redux";

import { useCloseCollapseLeftSidebar } from "../../hooks/useCloseCollapseLeftSidebar";
import { formatDateAndTime } from "../../helpers/formatDateAndTime";

import Tag from "../../ui/Tag";
import { openProject } from "../../ui/uiSlice";

function ProjectItem({ project, ariaLabel }) {
  const dispatch = useDispatch();

  const { openProjectId, currentMobileSidebar } = useSelector(
    (state) => state.ui
  );
  const closeCollapseSidebar = useCloseCollapseLeftSidebar();

  const openProjectItemStyle =
    project.id === openProjectId
      ? `bg-background-4 border-r-2 border-accent-100`
      : "";

  function handleOpenProject() {
    dispatch(openProject({ id: project.id }));
    currentMobileSidebar === "left" && closeCollapseSidebar();
  }

  function handleKeyboardTrigger(e) {
    if (e.key === "Enter" || e.key === " ") handleOpenProject();
  }

  return (
    <li
      onClick={handleOpenProject}
      onKeyDown={handleKeyboardTrigger}
      className={`w-full px-8 py-4 flex flex-col gap-3 hover:bg-background-4 cursor-pointer transition-all duration-75 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-100 ${openProjectItemStyle}
      max-phone-lg:gap-5 max-phone-lg:px-16 max-phone-lg:py-8 max-phone-sm:px-8`}
      tabIndex="0"
      role="button"
      aria-label={ariaLabel}>
      <h4 className="text-2xl max-phone-lg:text-4xl">{project.title}</h4>

      <div className="flex items-center gap-5 max-phone-lg:gap-6">
        <Tag borderColor={`border-tag-${project.id}`}>Tag {project.id}</Tag>
        <span className="text-xl text-text-helper max-phone-lg:text-2xl">
          {formatDateAndTime(project.date, "date")}
        </span>
      </div>
    </li>
  );
}

export default ProjectItem;
