import { create } from "zustand";

export const usePending = create((set) => ({
  requests: [],
  setRequests: (data) => set({ requests: data }),
}));
