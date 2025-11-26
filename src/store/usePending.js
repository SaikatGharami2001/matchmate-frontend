import { create } from "zustand";

export const useRequestStore = create((set) => ({
  requests: null,

  addRequests: (data) => set({ requests: data }),
}));
