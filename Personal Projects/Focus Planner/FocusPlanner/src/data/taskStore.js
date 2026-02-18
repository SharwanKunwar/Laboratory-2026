import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTaskStore = create(
  persist(
    (set) => ({
      tasks: [],

      addTask: ({ title, description, priority }) =>
        set((state) => {
          const now = new Date();

          const newTask = {
            id: Date.now(),
            title,
            description,
            status: "pending",
            createdAt: now.toISOString(),
            createdYear: now.getFullYear(),
            priority, // now stored correctly
          };

          return {
            tasks: [...state.tasks, newTask],
          };
        }),

      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      deleteAllTasks: () => set({ tasks: [] }),

      updateStatus: (id, newStatus) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, status: newStatus } : task
          ),
        })),
    }),
    {
      name: "task-storage", // key in localStorage
      getStorage: () => localStorage, // use localStorage for persistence
    }
  )
);

export default useTaskStore;
