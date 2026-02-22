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
            priority,
            completedAt: null,
            duration: 0, // milliseconds
            notes: "",   // 👈 NEW FIELD for notes
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
          tasks: state.tasks.map((task) => {
            if (task.id === id) {
              return {
                ...task,
                status: newStatus,
                completedAt:
                  newStatus === "completed"
                    ? new Date().toISOString()
                    : task.completedAt,
              };
            }
            return task;
          }),
        })),

      updateDuration: (id, duration) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, duration } : task
          ),
        })),



      // 👈 NEW FUNCTION TO UPDATE NOTES
      updateNotes: (id, notes) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, notes } : task
          ),
        })),
    }),
    {
      name: "task-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useTaskStore;
