import { create } from "zustand";
import { combine } from "zustand/middleware";

const useMenuStore = create(
  combine({ menuOpen: false }, (set) => ({
    toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
    closeMenu: () => set(() => ({ menuOpen: false })),
  })),
);

export {
  useMenuStore,
};