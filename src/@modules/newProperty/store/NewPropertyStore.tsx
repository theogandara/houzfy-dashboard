import { create } from "zustand";

interface Values {
  basicInfos: {
    title: string;
    price: number;
    description: string;
    purpose: string;
    category: string;
  };
}

interface Store {
  step: number;
  setStep: (step: number) => void;
  basicInfos: Values["basicInfos"];
  setBasicInfos: (values: Values["basicInfos"]) => void;
}

export const useNewPropertyStore = create<Store>()((set) => ({
  step: 0,
  setStep: (step) => set({ step }),
  basicInfos: {
    title: "",
    price: 0,
    description: "",
    purpose: "",
    category: "",
  },
  setBasicInfos: (values) => set({ basicInfos: values }),
}));
