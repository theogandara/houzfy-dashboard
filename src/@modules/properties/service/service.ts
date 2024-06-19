import { api } from "../../../api/axiosInstance";

export const propertiesService = {
  async getProperties() {
    return await api.get("/properties");
  },
  async getProperty(id: string) {
    return {};
  },
  async createProperty(property: any) {
    return {};
  },
  async updateProperty(property: any) {
    return {};
  },
  async deleteProperty(id: string) {
    return {};
  },
};
