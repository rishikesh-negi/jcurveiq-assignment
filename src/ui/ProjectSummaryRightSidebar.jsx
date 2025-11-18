import { formatDateAndTime } from "../helpers/formatDateAndTime";

function ProjectSummaryRightSidebar({ project }) {
  return (
    <div className="px-3 py-4 bg-background-1 rounded-lg flex flex-col gap-3 shadow-md/2 max-phone-lg:p-6 max-phone-lg:gap-6">
      <h4 className="text-2xl font-semibold max-phone-lg:text-4xl">Summary</h4>
      <span className="text-xl text-text-helper max-phone-lg:text-2xl">
        {formatDateAndTime(project?.date)}
      </span>
      <p className="text-xl mt-1 max-phone-lg:text-3xl max-phone-lg:mt-2">
        {project?.summary?.split(" ")?.slice(0, 8)?.join(" ") + "..."}
      </p>
    </div>
  );
}

export default ProjectSummaryRightSidebar;
