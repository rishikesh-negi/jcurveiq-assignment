import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leftSidebarExpanded: false,
  openProjectId: null,
  sidebarHoverEnabled: true,
  currentMobileSidebar: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    expandLeftSidebar(state) {
      if (state.currentMobileSidebar === "left") return;
      state.leftSidebarExpanded = true;
    },

    collapseLeftSidebar(state) {
      if (state.currentMobileSidebar === "left") return;
      state.leftSidebarExpanded = false;
    },

    enableSidebarHover(state) {
      state.sidebarHoverEnabled = true;
    },

    disableSidebarHover(state) {
      state.sidebarHoverEnabled = false;
    },

    openProject(state, action) {
      state.openProjectId = action.payload.id;
    },

    openMobileSidebar(state, action) {
      state.leftSidebarExpanded = true;
      state.currentMobileSidebar = action.payload;
    },

    closeMobileSidebar(state) {
      state.leftSidebarExpanded = false;
      state.currentMobileSidebar = null;
    },
  },
});

export const {
  expandLeftSidebar,
  collapseLeftSidebar,
  enableSidebarHover,
  disableSidebarHover,
  openProject,
  openMobileSidebar,
  closeMobileSidebar,
} = uiSlice.actions;

export default uiSlice.reducer;
