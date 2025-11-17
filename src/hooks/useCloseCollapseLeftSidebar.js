import { useDispatch, useSelector } from "react-redux";
import {
  collapseLeftSidebar,
  closeMobileSidebar,
  disableSidebarHover,
  enableSidebarHover,
} from "../ui/uiSlice";

export function useCloseCollapseLeftSidebar() {
  const dispatch = useDispatch();
  const { currentMobileSidebar } = useSelector((state) => state.ui);

  if (currentMobileSidebar === "left" || currentMobileSidebar === "right")
    return function () {
      dispatch(closeMobileSidebar());
      return;
    };

  if (!currentMobileSidebar)
    return function () {
      dispatch(disableSidebarHover());

      dispatch(collapseLeftSidebar());

      setTimeout(() => {
        dispatch(enableSidebarHover());
      }, 100);
    };
}
