import { create } from "zustand";

interface Values {
  basicInfos: {
    title: string;
    price: string;
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
  detailInfos: {
    totalArea: string;
    builtArea: string;
    bedrooms: string;
    bathrooms: string;
    suites: string;
    parkingSpaces: string;
    pool: boolean;
    gym: boolean;
    elevator: boolean;
    petsAllowed: boolean;
    barbecueArea: boolean;
    security24h: boolean;
    furnished: boolean;
  };
}

interface Store {
  step: number;
  setStep: (step: number) => void;
  basicInfos: Values["basicInfos"];
  setBasicInfos: (values: Values["basicInfos"]) => void;
  locationInfos: Values["locationInfos"];
  setLocationInfos: (values: Values["locationInfos"]) => void;
  detailInfos: Values["detailInfos"];
  setDetailInfos: (values: Values["detailInfos"]) => void;
  clear: () => void;
}

export const useNewPropertyStore = create<Store>()((set) => ({
  step: 0,
  setStep: (step) => set({ step }),
  basicInfos: {
    title: "",
    price: "",
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
  detailInfos: {
    totalArea: "",
    builtArea: "",
    bedrooms: "",
    bathrooms: "",
    suites: "",
    parkingSpaces: "",
    pool: false,
    gym: false,
    elevator: false,
    petsAllowed: false,
    barbecueArea: false,
    security24h: false,
    furnished: false,
  },
  setDetailInfos: (values) => set({ detailInfos: values }),
  clear: () =>
    set({
      step: 0,
      basicInfos: {
        title: "",
        price: "",
        description: "",
        purpose: "",
        category: "",
      },
      locationInfos: {
        address: "",
        number: "",
        neighborhood: "",
        city: "",
        state: "",
        zipCode: "",
      },
      detailInfos: {
        totalArea: "",
        builtArea: "",
        bedrooms: "",
        bathrooms: "",
        suites: "",
        parkingSpaces: "",
        pool: false,
        gym: false,
        elevator: false,
        petsAllowed: false,
        barbecueArea: false,
        security24h: false,
        furnished: false,
      },
    }),
}));
