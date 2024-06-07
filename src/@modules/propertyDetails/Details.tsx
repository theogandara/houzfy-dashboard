import { Box, Button, Input } from "@chakra-ui/react";
import { Subtitle, Title } from "../../components/Texts/Texts";
import { useRedirect } from "../../hooks/useRedirect";
import LayoutHeader from "../../layouts/LayoutHeader";

export const HouseDetails = () => {
  const { navigateTo } = useRedirect();
  return (
    <LayoutHeader
      title="Detalhes da casa"
      onClickNext={() => navigateTo("/")}
      onClickBack={() => navigateTo("/")}
    >
      <Title>CRM</Title>
      <Subtitle>Your current sales summary and activity.</Subtitle>
      <Box textAlign="center" fontSize="xl">
        <Button colorScheme="blue">teste</Button>
        <Button colorScheme="gray">teste</Button>

        <Input placeholder="teste" />
      </Box>
    </LayoutHeader>
  );
};
