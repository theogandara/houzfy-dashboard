import { Box, Button, Input } from "@chakra-ui/react";
import { Subtitle, Title } from "../../components/Texts/Texts";
import { useRedirect } from "../../hooks/useRedirect";
import LayoutHeader from "../../layouts/LayoutHeader";
import { Trash } from "@phosphor-icons/react";

export const HouseDetails = () => {
  const { navigateTo } = useRedirect();
  return (
    <LayoutHeader
      title="Detalhes do imóvel"
      onClickBack={() => navigateTo("/imoveis")}
    >
      <Box>
        <Title>Detalhes do imóvel</Title>
        <Subtitle>Veja os detalhes do imóvel que você selecionou.</Subtitle>
        <Box>
          <Button colorScheme="blue">Salvar</Button>

          <Button
            colorScheme="red"
            display="flex"
            alignItems="center"
            gap="8px"
          >
            <Trash />
            Excluir imóvel
          </Button>
        </Box>
      </Box>
    </LayoutHeader>
  );
};
