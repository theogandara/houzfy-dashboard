import { create } from "zustand";

type Store = {
  properties: any[];
  setProperties: (properties: any[]) => void;
};

export const usePropertiesStore = create<Store>((set) => ({
  properties: [],
  setProperties: (properties) => set({ properties }),
}));
