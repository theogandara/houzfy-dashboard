import { Box, Button, Input } from "@chakra-ui/react";
import { Subtitle, Title } from "../../components/Texts/Texts";
import { useRedirect } from "../../hooks/useRedirect";
import LayoutHeader from "../../layouts/LayoutHeader";

export const HouseDetails = () => {
  const { navigateTo } = useRedirect();
  return (
    <LayoutHeader
      title="Detalhes do imóvel"
      onClickNext={() => navigateTo("/")}
      onClickBack={() => navigateTo("/")}
    >
      <Box>
        <Title>Detalhes do imóvel</Title>
        <Subtitle>Veja os detalhes do imóvel que você selecionou.</Subtitle>
        <Box>
          <Input placeholder="Nome" />
          <Input placeholder="Endereço" />
          <Input placeholder="Preço" />
          <Input placeholder="Descrição" />
          <Button>Salvar</Button>
        </Box>
      </Box>
    </LayoutHeader>
  );
};
