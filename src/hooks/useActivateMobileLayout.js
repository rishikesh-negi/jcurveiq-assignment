import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { activateMobileLayout, deactivateMobileLayout } from "../ui/uiSlice";

export function useActivateMobileLayout() {
  const dispatch = useDispatch();
  const viewportWidth = window.innerWidth;

  useEffect(
    function () {
      if (viewportWidth <= 430) {
        dispatch(activateMobileLayout());
      } else {
        dispatch(deactivateMobileLayout());
      }
    },
    [dispatch, viewportWidth]
  );
}
