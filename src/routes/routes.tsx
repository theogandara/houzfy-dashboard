import {
  House,
  Users,
  Chat,
  ListPlus,
  File,
  ChartLine,
} from "@phosphor-icons/react";

export const routes = [
  {
    path: "/",
    name: "Home",
    icon: <ChartLine color="white" size={24} />,
  },
  {
    path: "/imoveis",
    name: "Imóveis",
    icon: <House color="white" size={24} />,
  },
  {
    path: "/cadastrar-imovel",
    name: "Cadastrar imóvel",
    icon: <ListPlus color="white" size={24} />,
  },
  {
    path: "/crm",
    name: "CRM",
    icon: <Users color="white" size={24} />,
  },
  {
    path: "/documentos",
    name: "Documentos",
    icon: <File color="white" size={24} />,
  },
  {
    path: "/suporte",
    name: "Suporte",
    icon: <Chat color="white" size={24} />,
  },
];
