import { Settings, UserAvatar } from "@carbon/icons-react";
import ButtonIcon from "./ButtonIcon";
import SlidingButtonLabel from "./SlidingButtonLabel";

function UserActions({ leftSidebarExpanded }) {
  const flexStyle = leftSidebarExpanded
    ? "justify-between"
    : "flex-col-reverse gap-6";

  return (
    <div
      className={`px-8 py-6 flex items-center ${flexStyle} border-t border-border transition-all duration-200 max-phone-lg:px-16 max-phone-lg:py-12 max-phone-sm:px-8`}>
      <ButtonIcon
        icon={
          <UserAvatar
            size={20}
            fill="var(--color-icons)"
            className="max-phone-lg:scale-125"
          />
        }
        ariaLabel="Open user profile">
        <SlidingButtonLabel label="User Profile" />
      </ButtonIcon>

      <ButtonIcon
        icon={
          <Settings
            size={20}
            fill="var(--color-icons)"
            className="max-phone-lg:scale-120"
          />
        }
        ariaLabel="Open settings"
        title="Settings"
      />
    </div>
  );
}

export default UserActions;
