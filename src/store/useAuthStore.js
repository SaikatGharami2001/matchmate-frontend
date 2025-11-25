import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist((set) => ({
    user: null,
    loggedInUserData: (data) => set({ user: data }),
    logoutUser: () => set({ user: null }),
  }))
);
