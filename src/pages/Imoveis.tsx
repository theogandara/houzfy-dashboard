import { Box, Button, Input } from "@chakra-ui/react";
import { Subtitle, Title } from "../components/Texts/Texts";
import LayoutDefault from "../layouts/LayoutDefault";

export const Imoveis = () => {
  return (
    <LayoutDefault>
      <Title>Imoveis</Title>
      <Subtitle>Your current sales summary and activity.</Subtitle>
      <Box textAlign="center" fontSize="xl">
        <Button colorScheme="blue">teste</Button>
        <Button colorScheme="gray">teste</Button>

        <Input placeholder="teste" />
      </Box>
    </LayoutDefault>
  );
};
