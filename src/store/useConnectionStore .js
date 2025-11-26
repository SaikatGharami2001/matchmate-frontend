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

      const data = Array.isArray(res.data) ? res.data : res.data.data;

      set({ connections: data || [] });
    } catch (err) {
      console.log("Error fetching connections:", err);
      set({ connections: [] });
    }
  },
}));
