import { Menu, TableOfContents } from "@carbon/icons-react";
import ButtonIcon from "./ButtonIcon";
import { useDispatch, useSelector } from "react-redux";
import { openMobileSidebar } from "./uiSlice";

function MobileSidebarOpeners() {
  const dispatch = useDispatch();
  const { currentMobileSidebar } = useSelector((state) => state.ui);

  if (currentMobileSidebar) return;

  return (
    <div className="phone-lg:hidden max-phone-lg:flex absolute right-10 top-10 flex items-center gap-10">
      <ButtonIcon
        icon={
          <Menu
            size={22}
            fill="var(--color-icons)"
            className="max-phone-lg:scale-120 bg-background-1 rounded-md"
          />
        }
        onClick={() => dispatch(openMobileSidebar("left"))}
      />

      <ButtonIcon
        icon={
          <TableOfContents
            size={22}
            fill="var(--color-icons)"
            className="max-phone-lg:scale-120 bg-background-1 rounded-md"
          />
        }
        onClick={() => dispatch(openMobileSidebar("right"))}
      />
    </div>
  );
}

export default MobileSidebarOpeners;
