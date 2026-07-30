import { create } from "zustand";
import "@features";

interface UserStore {
  isAuthenticated: boolean;
  setAuthenticated: (value: boolean) => void;
}

export const useUserStore = create<UserStore>()((set) => ({
  isAuthenticated: false,
  setAuthenticated: (value) => set({ isAuthenticated: value }),
}));
