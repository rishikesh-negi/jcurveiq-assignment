import { useSelector } from "react-redux";
import Spinner from "../../ui/Spinner";
import ProjectItem from "./ProjectItem";

function ProjectsList({ leftSidebarExpanded }) {
  const { status: projectsDataStatus, projects } = useSelector(
    (state) => state.projects
  );

  const { currentMobileSidebar } = useSelector((state) => state.ui);

  return (
    <div
      className={`w-full h-full pt-8 flex flex-col gap-6 max-phone-lg:pt-12 overflow-y-hidden`}>
      {projectsDataStatus === "loading" &&
      (leftSidebarExpanded || currentMobileSidebar === "left") ? (
        <Spinner />
      ) : (
        <div
          className={`flex flex-col gap-6 max-phone-lg:gap-8 overflow-y-hidden transition-all duration-150 ${!leftSidebarExpanded ? "absolute translate-x-[-105%]" : "static translate-none"}`}>
          <h4 className="text-2xl text-text-helper px-8 max-phone-lg:text-3xl max-phone-lg:px-16 max-phone-sm:px-8">
            {projectsDataStatus === "empty"
              ? "No existing projects..."
              : `Your Projects (${projects.length})`}
          </h4>

          <ul className="w-full flex flex-col gap-1 overflow-y-scroll no-scrollbar">
            {projects.map((project) => (
              <ProjectItem
                project={project}
                key={project.headline}
                ariaLabel={`Open project ${project.id}`}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProjectsList;
