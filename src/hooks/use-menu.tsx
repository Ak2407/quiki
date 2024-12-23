import { create } from "zustand";

type MenuStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useMenu = create<MenuStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
