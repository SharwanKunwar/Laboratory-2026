import { create } from "zustand";

export const useFavStore = create((set) => ({
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],

  addFavorite: (site) =>
    set((state) => {
      const updated = [...state.favorites, site];
      localStorage.setItem("favorites", JSON.stringify(updated));
      return { favorites: updated };
    }),

  removeFavorite: (id) =>
    set((state) => {
      const updated = state.favorites.filter((item) => item.id !== id);
      localStorage.setItem("favorites", JSON.stringify(updated));
      return { favorites: updated };
    }),
}));