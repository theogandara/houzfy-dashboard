import { api } from "../../../api/axiosInstance";
import { Lead } from "../types";

export const leadsService = {
  async getLeads({ page }: { page: number }) {
    return await api.get<Response>("/leads", { params: { page } });
  },
};

type Response = {
  leads: Lead[];
  totalLeads: number;
  totalPages: number;
};
