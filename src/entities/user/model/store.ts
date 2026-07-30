import { create } from "zustand";

interface UserStore {
  isAuthenticated: boolean;
  setAuthenticated: (value: boolean) => void;
}

export const useUserStore = create<UserStore>()((set) => ({
  isAuthenticated: false,
  setAuthenticated: (value) => set({ isAuthenticated: value }),
}));
