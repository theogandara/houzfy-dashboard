import { create } from "zustand";
import { Lead } from "./types";

type Store = {
  selectedLead: Lead;
  setSelectedLead: (lead: Lead) => void;
};

export const useCRMStore = create<Store>((set) => ({
  selectedLead: {
    leadId: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    propertyId: "",
    createdAt: "",
  },
  setSelectedLead: (lead) => set({ selectedLead: lead }),
}));
