import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { activateMobileLayout, deactivateMobileLayout } from "../ui/uiSlice";

export function useActivateMobileLayout() {
  const dispatch = useDispatch();

  useEffect(
    function () {
      if (window.innerWidth <= 430) {
        dispatch(activateMobileLayout());
      } else {
        dispatch(deactivateMobileLayout());
      }
    },
    [dispatch]
  );
}
