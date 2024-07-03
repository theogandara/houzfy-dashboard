import { Button, Flex } from "@chakra-ui/react";
import LayoutDefault from "../../layouts/LayoutDefault";
import { Subtitle, Title } from "../Texts/Texts";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <LayoutDefault>
      <Flex flexDir="column" gap="16px">
        <Title>Ops! Algo deu errado.</Title>
        <Title>Por favor, tente novamente mais tarde.</Title>
        <Subtitle>
          Se o erro persistir, entre em contato com o suporte.
        </Subtitle>
        <Button mt="8px" h="48px" as={Link} to="/" colorScheme="blue">
          Voltar para a página inicial
        </Button>
      </Flex>
    </LayoutDefault>
  );
};
