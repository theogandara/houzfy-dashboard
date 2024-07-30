import { api } from "../../../api/axiosInstance";

export const documentsService = {
  async getDocuments() {
    return await api.get<Response>("/documents");
  },
};

type Response = Array<{
  documentId: string;
  title: string;
  description: string;
  url: string;
  createdAt: string;
}>;
