import { create } from "zustand";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const useFeedStore = create((set) => ({
  feed: [],

  fetchFeed: async () => {
    try {
      const res = await axios.get(`${BASE_URL}/feed`, {
        withCredentials: true,
      });

      set({ feed: res.data.data });
    } catch (err) {
      console.log("Feed error:", err);
      set({ feed: [] });
    }
  },

  removeUserFromFeed: (id) =>
    set((state) => ({
      feed: state.feed.filter((u) => u._id !== id),
    })),
}));
