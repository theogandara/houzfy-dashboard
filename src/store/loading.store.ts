import { create } from "zustand";

type Store = {
  show: boolean;
  setShow: (show: boolean) => void;
};

export const useLoadingStore = create<Store>((set) => ({
  show: false,
  setShow: (show) => set({ show }),
}));
