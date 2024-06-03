import { Box, Button, Input } from "@chakra-ui/react";
import { Subtitle, Title } from "../components/Texts/Texts";
import LayoutDefault from "../layouts/LayoutDefault";

export const Dashboard = () => {
  return (
    <LayoutDefault>
      <Title>Dashboard</Title>
      <Subtitle>Your current sales summary and activity.</Subtitle>
      <Box textAlign="center" fontSize="xl">
        <Button colorScheme="blue">teste</Button>
        <Button colorScheme="gray">teste</Button>

        <Input placeholder="teste" />
      </Box>
    </LayoutDefault>
  );
};
