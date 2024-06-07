import { Box, Button, Input } from "@chakra-ui/react";
import LayoutDefault from "../../layouts/LayoutDefault";
import { Subtitle, Title } from "../../components/Texts/Texts";

export const CRM = () => {
  return (
    <LayoutDefault>
      <Title>CRM</Title>
      <Subtitle>Your current sales summary and activity.</Subtitle>
      <Box textAlign="center" fontSize="xl">
        <Button colorScheme="blue">teste</Button>
        <Button colorScheme="gray">teste</Button>
        <Input placeholder="teste" />
      </Box>
    </LayoutDefault>
  );
};
