import { useEffect } from "react";
import { useDispatch } from "react-redux";

export function useProjectLoad(thunk) {
  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(thunk());
    },
    [dispatch, thunk]
  );
}
