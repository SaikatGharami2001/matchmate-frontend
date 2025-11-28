import { create } from "zustand";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const useConnectionStore = create((set) => ({
  connections: [],

  fetchConnections: async () => {
    try {
      const res = await axios.get(`${BASE_URL}/connections`, {
        withCredentials: true,
      });

      set({ connections: res.data });
    } catch (err) {
      console.log("Error fetching connections:", err);
      set({ connections: [] });
    }
  },

  removeConnection: (id) =>
    set((state) => ({
      connections: state.connections.filter((c) => c._id !== id),
    })),
}));
