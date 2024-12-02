import { createSlice } from "@reduxjs/toolkit";
import { loadTasks, saveTasks } from "../localStorage/index";

const initialState = {
  tasks: loadTasks(),
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      saveTasks(state.tasks);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveTasks(state.tasks);
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index] = action.payload;
        saveTasks(state.tasks);
      }
    },
    reorderTasks: (state, action) => {
      const { sourceIndex, destinationIndex } = action.payload;
      const [movedTask] = state.tasks.splice(sourceIndex, 1);
      state.tasks.splice(destinationIndex, 0, movedTask);
      saveTasks(state.tasks);
    },
  },
});

export const { addTask, deleteTask, updateTask, reorderTasks } =
  tasksSlice.actions;

export default tasksSlice.reducer;
