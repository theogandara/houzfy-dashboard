import { create } from "zustand";

interface Values {
  basicInfos: {
    title: string;
    price: number;
    description: string;
    purpose: string;
    category: string;
  };
  locationInfos: {
    address: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

interface Store {
  step: number;
  setStep: (step: number) => void;
  basicInfos: Values["basicInfos"];
  setBasicInfos: (values: Values["basicInfos"]) => void;
  locationInfos: Values["locationInfos"];
  setLocationInfos: (values: Values["locationInfos"]) => void;
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
  locationInfos: {
    address: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
    zipCode: "",
  },
  setLocationInfos: (values) => set({ locationInfos: values }),
}));
