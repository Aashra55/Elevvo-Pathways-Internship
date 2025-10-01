import { configureStore, createSlice, nanoid } from "@reduxjs/toolkit";

const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];

const jobsSlice = createSlice({
  name: "jobs",
  initialState: { jobs: savedJobs },
  reducers: {
    addJob: {
      reducer(state, action) {
        state.jobs.push(action.payload);
        localStorage.setItem("jobs", JSON.stringify(state.jobs));
      },
      prepare(job) {
        return { payload: { id: nanoid(), ...job } };
      },
    },
    updateJob(state, action) {
      const index = state.jobs.findIndex((j) => j.id === action.payload.id);
      if (index !== -1) {
        state.jobs[index] = action.payload;
        localStorage.setItem("jobs", JSON.stringify(state.jobs));
      }
    },
    deleteJob(state, action) {
      state.jobs = state.jobs.filter((j) => j.id !== action.payload);
      localStorage.setItem("jobs", JSON.stringify(state.jobs));
    },
    setJobs(state, action) {
      state.jobs = action.payload;
      localStorage.setItem("jobs", JSON.stringify(state.jobs));
    },
  },
});

export const { addJob, updateJob, deleteJob, setJobs } = jobsSlice.actions;

const store = configureStore({
  reducer: { jobs: jobsSlice.reducer },
});

export default store;

