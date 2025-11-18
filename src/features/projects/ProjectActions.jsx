import { AddLarge, Search, Box } from "@carbon/icons-react";
import ButtonIcon from "../../ui/ButtonIcon";
import SlidingButtonLabel from "../../ui/SlidingButtonLabel";

function ProjectActions({ leftSidebarExpanded }) {
  return (
    <div
      className={`w-full py-10 px-8 flex flex-col gap-6 border-b border-border ${!leftSidebarExpanded && "items-center"} max-phone-lg:px-16 max-phone-lg:py-12 max-phone-lg:gap-10 max-phone-sm:px-12 max-phone-sm:gap-12`}>
      <ButtonIcon
        icon={
          <AddLarge
            size={20}
            fill="var(--color-icons)"
            className="max-phone-lg:scale-120"
          />
        }
        ariaLabel="Create new project">
        <SlidingButtonLabel label="New Project" />
      </ButtonIcon>

      <ButtonIcon
        icon={
          <Search
            size={20}
            fill="var(--color-icons)"
            className="max-phone-lg:scale-120"
          />
        }
        ariaLabel="Search in project content">
        <SlidingButtonLabel label="Search in Project" />
      </ButtonIcon>

      <ButtonIcon
        icon={
          <Box
            size={20}
            fill="var(--color-icons)"
            className="max-phone-lg:scale-120"
          />
        }
        ariaLabel="View archived projects">
        <SlidingButtonLabel label="Archived Projects" />
      </ButtonIcon>
    </div>
  );
}

export default ProjectActions;
