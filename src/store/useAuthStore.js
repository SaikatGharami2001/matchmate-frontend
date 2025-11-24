import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist((set) => ({
    user: null,
    loggedInUser: (data) => set({ user: data.data }),
    logoutUser: () => set({ user: null }),
  }))
);
