import LayoutDefault from "../../layouts/LayoutDefault";
import { Subtitle, Title } from "../../components/Texts/Texts";
import { WhatsappLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export const Suport = () => {
  return (
    <LayoutDefault>
      <Title>Suporte</Title>
      <Subtitle>Caso tenha alguma dúvida, entre em contato conosco.</Subtitle>

      <Link
        style={{
          textDecoration: "none",
          border: "2px solid #E2E8F0",
          marginTop: "24px",
          borderRadius: "8px",
          gap: "12px",
          padding: "12px",
          color: "#000000",
          display: "flex",
          cursor: "pointer",
          alignItems: "center",
        }}
        target="_blank"
        to="https://api.whatsapp.com/send?phone=351934407348&text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20com%20a%20plataforma%20de%20voc%C3%AAs."
      >
        <WhatsappLogo />
        <Subtitle>Whatsapp</Subtitle>
      </Link>
    </LayoutDefault>
  );
};
