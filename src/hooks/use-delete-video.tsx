import { create } from "zustand";

type DeleteVideoStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useDeleteVideo = create<DeleteVideoStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
