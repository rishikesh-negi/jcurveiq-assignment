import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProjects = createAsyncThunk(
  "projects/getProjects",
  async () => {
    // Simulate data loading:
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const res = await fetch("projects.json");
    const data = await res.json();
    return data;
  }
);

const initialState = {
  projects: [],
  status: "idle",
  error: null,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.projects = action.payload;
        state.status = state.projects.length ? "success" : "empty";
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default projectsSlice.reducer;
