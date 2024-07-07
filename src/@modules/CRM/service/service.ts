import { api } from "../../../api/axiosInstance";

export const leadsService = {
  async getLeads() {
    return await api.get<Response>("/leads");
  },
};

type Lead = {
  leadId: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyId: string;
  createdAt: string;
};

type Response = {
  leads: Lead[];
  totalLeads: number;
  totalPages: number;
};
