import { Link } from "react-router-dom";
import { Button, Flex, Input } from "@chakra-ui/react";
import LayoutForm from "../../layouts/LayoutForm";
import { Label, Subtitle, Title } from "../../components/Texts/Texts";

export const Signup = () => {
  return (
    <LayoutForm>
      <Flex flexDir="column" w={{ mobile: "100%", tablet: "650px" }} gap="16px">
        <Flex flexDir="column" gap="4px">
          <Title>Cadastro</Title>
          <Subtitle>Preencha os campos abaixo para criar sua conta.</Subtitle>
        </Flex>

        <Flex flexDir="column" gap="12px">
          <Flex flexDir="column" gap="8px">
            <Label>Insira seu melhor email</Label>
            <Input type="email" placeholder="Digite seu email" />
          </Flex>

          <Flex flexDir={{ mobile: "column", desktop: "row" }} gap="8px">
            <Flex flexDir="column" gap="8px" w="full">
              <Label>Insira uma senha forte</Label>
              <Input type="password" placeholder="••••••••" />
            </Flex>

            <Flex flexDir="column" gap="8px" w="full">
              <Label>Confirme sua senha</Label>
              <Input type="password" placeholder="••••••••" />
            </Flex>
          </Flex>
        </Flex>
        <Button colorScheme="blue">Cadastrar</Button>

        <Flex textAlign="center">
          <Link to="/entrar" style={{ width: "100%" }}>
            <Button w="full" colorScheme="blue" variant="link">
              Já tem uma conta? Faça login
            </Button>
          </Link>
        </Flex>
      </Flex>
    </LayoutForm>
  );
};
