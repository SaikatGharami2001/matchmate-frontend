import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist((set) => ({
    user: null,
    loggedInUserData: (res) =>
      set({
        user: res.data ? res.data : res,
      }),

    logoutUser: () => set({ user: null }),
  }))
);
