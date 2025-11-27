import { create } from "zustand";

export const usePending = create((set) => ({
  requests: null,
  setRequests: (data) => set({ requests: data }),
}));
