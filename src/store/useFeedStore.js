import { create } from "zustand";

export const useFeedStore = create((set) => ({
  feed: null,

  addFeed: (data) => set({ feed: data }),

  removeUserFromFeed: (userId) =>
    set((state) => ({
      feed: state.feed ? state.feed.filter((user) => user._id !== userId) : [],
    })),
}));
