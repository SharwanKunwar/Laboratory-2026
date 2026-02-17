import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [],

  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),

  deleteAllTasks: () => set({ tasks: [] }),
}));

export default useTaskStore;
